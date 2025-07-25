import util from 'node:util';
import { workerData } from 'node:worker_threads';
import pc from 'picocolors';

export const repomixLogLevels = {
  SILENT: -1, // No output
  ERROR: 0, // error
  WARN: 1, // warn
  INFO: 2, // success, info, log, note
  DEBUG: 3, // debug, trace
} as const;

export type RepomixLogLevel = (typeof repomixLogLevels)[keyof typeof repomixLogLevels];

class RepomixLogger {
  private level: RepomixLogLevel = repomixLogLevels.INFO;

  constructor() {
    this.init();
  }

  init() {
    this.setLogLevel(repomixLogLevels.INFO);
  }

  setLogLevel(level: RepomixLogLevel) {
    this.level = level;
  }

  getLogLevel(): RepomixLogLevel {
    return this.level;
  }

  error(...args: unknown[]) {
    if (this.level >= repomixLogLevels.ERROR) {
      console.error(pc.red(this.formatArgs(args)));
    }
  }

  warn(...args: unknown[]) {
    if (this.level >= repomixLogLevels.WARN) {
      console.log(pc.yellow(this.formatArgs(args)));
    }
  }

  success(...args: unknown[]) {
    if (this.level >= repomixLogLevels.INFO) {
      console.log(pc.green(this.formatArgs(args)));
    }
  }

  info(...args: unknown[]) {
    if (this.level >= repomixLogLevels.INFO) {
      console.log(pc.cyan(this.formatArgs(args)));
    }
  }

  log(...args: unknown[]) {
    if (this.level >= repomixLogLevels.INFO) {
      console.log(this.formatArgs(args));
    }
  }

  note(...args: unknown[]) {
    if (this.level >= repomixLogLevels.INFO) {
      console.log(pc.dim(this.formatArgs(args)));
    }
  }

  debug(...args: unknown[]) {
    if (this.level >= repomixLogLevels.DEBUG) {
      console.log(pc.blue(this.formatArgs(args)));
    }
  }

  trace(...args: unknown[]) {
    if (this.level >= repomixLogLevels.DEBUG) {
      console.log(pc.gray(this.formatArgs(args)));
    }
  }

  private formatArgs(args: unknown[]): string {
    return args
      .map((arg) => (typeof arg === 'object' ? util.inspect(arg, { depth: null, colors: true }) : arg))
      .join(' ');
  }
}

export const logger = new RepomixLogger();

export const setLogLevel = (level: RepomixLogLevel) => {
  logger.setLogLevel(level);
};

/**
 * Set logger log level from workerData if valid.
 * This is used in worker threads where configuration is passed via workerData.
 */
export const setLogLevelByWorkerData = () => {
  if (Array.isArray(workerData) && workerData.length > 1 && workerData[1]?.logLevel !== undefined) {
    const logLevel = workerData[1].logLevel;
    if (
      logLevel === repomixLogLevels.SILENT ||
      logLevel === repomixLogLevels.ERROR ||
      logLevel === repomixLogLevels.WARN ||
      logLevel === repomixLogLevels.INFO ||
      logLevel === repomixLogLevels.DEBUG
    ) {
      setLogLevel(logLevel);
    }
  }
};
