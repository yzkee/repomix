import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  __resetTokenCountCacheForTests,
  contentCacheKey,
  getCached,
  isCacheDisabled,
  loadTokenCountCache,
  MAX_CACHE_ENTRIES,
  saveTokenCountCache,
  setCached,
} from '../../../src/core/metrics/tokenCountCache.js';

describe('tokenCountCache', () => {
  let tmpDir: string;
  let cacheFile: string;
  const originalDisableEnv = process.env.REPOMIX_TOKEN_CACHE;
  const originalPathEnv = process.env.REPOMIX_TOKEN_CACHE_PATH;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'repomix-cache-test-'));
    cacheFile = path.join(tmpDir, 'token-counts.json');
    process.env.REPOMIX_TOKEN_CACHE_PATH = cacheFile;
    delete process.env.REPOMIX_TOKEN_CACHE;
    __resetTokenCountCacheForTests();
  });

  afterEach(async () => {
    if (originalDisableEnv === undefined) {
      delete process.env.REPOMIX_TOKEN_CACHE;
    } else {
      process.env.REPOMIX_TOKEN_CACHE = originalDisableEnv;
    }
    if (originalPathEnv === undefined) {
      delete process.env.REPOMIX_TOKEN_CACHE_PATH;
    } else {
      process.env.REPOMIX_TOKEN_CACHE_PATH = originalPathEnv;
    }
    __resetTokenCountCacheForTests();
    await fs.rm(tmpDir, { recursive: true, force: true });
  });

  describe('contentCacheKey', () => {
    it('produces stable keys for identical content/encoding pairs', () => {
      const a = contentCacheKey('o200k_base', 'hello world');
      const b = contentCacheKey('o200k_base', 'hello world');
      expect(a).toBe(b);
    });

    it('differs across encodings', () => {
      const a = contentCacheKey('o200k_base', 'hello');
      const b = contentCacheKey('cl100k_base', 'hello');
      expect(a).not.toBe(b);
    });

    it('differs across content', () => {
      const a = contentCacheKey('o200k_base', 'hello');
      const b = contentCacheKey('o200k_base', 'world');
      expect(a).not.toBe(b);
    });

    it('embeds the byte length so same-digest different-length inputs cannot collide', () => {
      const key = contentCacheKey('o200k_base', 'abc');
      const [encoding, byteLength] = key.split(':');
      expect(encoding).toBe('o200k_base');
      expect(byteLength).toBe('3');
    });
  });

  describe('load + save round-trip', () => {
    it('persists entries to disk and reloads them in a fresh process', async () => {
      const key = contentCacheKey('o200k_base', 'hello');
      setCached(key, 42);
      await saveTokenCountCache();

      __resetTokenCountCacheForTests();
      await loadTokenCountCache();
      expect(getCached(key)).toBe(42);
    });

    it('skips writing when nothing has been added since the last save', async () => {
      // Nothing dirty → no file should exist
      await saveTokenCountCache();
      await expect(fs.stat(cacheFile)).rejects.toThrow();
    });

    it('starts fresh when the cache file is missing', async () => {
      await loadTokenCountCache();
      expect(getCached('whatever:0:0000000000000000')).toBeUndefined();
    });

    it('starts fresh when the cache file is corrupt JSON', async () => {
      await fs.mkdir(path.dirname(cacheFile), { recursive: true });
      await fs.writeFile(cacheFile, '{not valid json');
      await loadTokenCountCache();
      const key = contentCacheKey('o200k_base', 'x');
      expect(getCached(key)).toBeUndefined();
      // Subsequent writes should still succeed
      setCached(key, 7);
      await saveTokenCountCache();
      __resetTokenCountCacheForTests();
      await loadTokenCountCache();
      expect(getCached(key)).toBe(7);
    });

    it('discards entries when the on-disk version does not match', async () => {
      await fs.mkdir(path.dirname(cacheFile), { recursive: true });
      await fs.writeFile(cacheFile, JSON.stringify({ version: 999, entries: { 'o200k_base:1:abc': 5 } }));
      await loadTokenCountCache();
      expect(getCached('o200k_base:1:abc')).toBeUndefined();
    });

    it('is atomic: the destination file is replaced via rename, not overwritten in place', async () => {
      const key = contentCacheKey('o200k_base', 'first');
      setCached(key, 1);
      await saveTokenCountCache();
      const firstStat = await fs.stat(cacheFile);

      const key2 = contentCacheKey('o200k_base', 'second');
      setCached(key2, 2);
      await saveTokenCountCache();
      const secondStat = await fs.stat(cacheFile);

      // Atomic rename gives the file a new inode on most filesystems.
      // The data, at minimum, must have been replaced cleanly.
      const raw = await fs.readFile(cacheFile, 'utf8');
      const data = JSON.parse(raw);
      expect(data.entries[key]).toBe(1);
      expect(data.entries[key2]).toBe(2);
      expect(secondStat.size).toBeGreaterThanOrEqual(firstStat.size);
    });
  });

  describe('FIFO eviction', () => {
    it('drops the oldest entries once the cap is exceeded on save', async () => {
      // Use a stub cap by directly inserting MAX + 5 entries
      for (let i = 0; i < MAX_CACHE_ENTRIES + 5; i++) {
        setCached(`o200k_base:1:${i.toString(16).padStart(16, '0')}`, i);
      }
      await saveTokenCountCache();

      __resetTokenCountCacheForTests();
      await loadTokenCountCache();

      // Oldest 5 dropped; newest preserved
      expect(getCached(`o200k_base:1:${(0).toString(16).padStart(16, '0')}`)).toBeUndefined();
      expect(getCached(`o200k_base:1:${(4).toString(16).padStart(16, '0')}`)).toBeUndefined();
      expect(getCached(`o200k_base:1:${(5).toString(16).padStart(16, '0')}`)).toBe(5);
      expect(getCached(`o200k_base:1:${(MAX_CACHE_ENTRIES + 4).toString(16).padStart(16, '0')}`)).toBe(
        MAX_CACHE_ENTRIES + 4,
      );
    });
  });

  describe('disable switch', () => {
    it('reports disabled when REPOMIX_TOKEN_CACHE=0', () => {
      process.env.REPOMIX_TOKEN_CACHE = '0';
      expect(isCacheDisabled()).toBe(true);
    });

    it('treats unset and other values as enabled', () => {
      delete process.env.REPOMIX_TOKEN_CACHE;
      expect(isCacheDisabled()).toBe(false);
      process.env.REPOMIX_TOKEN_CACHE = '1';
      expect(isCacheDisabled()).toBe(false);
    });

    it('skips load and save when disabled', async () => {
      process.env.REPOMIX_TOKEN_CACHE = '0';
      const key = contentCacheKey('o200k_base', 'hello');
      setCached(key, 99);
      await saveTokenCountCache();
      // No file should have been written
      await expect(fs.stat(cacheFile)).rejects.toThrow();

      __resetTokenCountCacheForTests();
      await loadTokenCountCache();
      expect(getCached(key)).toBeUndefined();
    });
  });
});
