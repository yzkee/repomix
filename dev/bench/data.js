window.BENCHMARK_DATA = {
  "lastUpdate": 1783614014247,
  "repoUrl": "https://github.com/yzkee/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "308c11b4c8606531dabc86ab9f84d21bd7534669",
          "message": "Merge pull request #1323 from yamadashy/renovate/browser-non-major-dependencies\n\nchore(deps): update browser non-major dependencies",
          "timestamp": "2026-03-28T11:24:57+09:00",
          "tree_id": "3ebef7be38852e9a980619d94f4d76d812cba651",
          "url": "https://github.com/yzkee/repomix/commit/308c11b4c8606531dabc86ab9f84d21bd7534669"
        },
        "date": 1774671552875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2526,
            "range": "±276",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2427ms, Q3: 2703ms\nAll times: 2324, 2352, 2359, 2374, 2387, 2427, 2427, 2439, 2443, 2468, 2526, 2530, 2530, 2578, 2616, 2703, 2703, 2711, 2806, 2881ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2971,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 2962ms, Q3: 2975ms\nAll times: 2947, 2954, 2962, 2966, 2970, 2971, 2972, 2975, 3010, 3045ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 4714,
            "range": "±966",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3963ms, Q3: 4929ms\nAll times: 3822, 3825, 3963, 4682, 4706, 4714, 4737, 4929, 4986, 18046ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28f93e9357f73bb174a180ee9b634a0f18273eb0",
          "message": "Merge pull request #1338 from yamadashy/perf/skip-worker-pool-lightweight-v2\n\nperf(core): Skip worker pool for lightweight file processing",
          "timestamp": "2026-03-28T18:31:23+09:00",
          "tree_id": "ecada18b88b4e34671a8adf11133c157b8ac4302",
          "url": "https://github.com/yzkee/repomix/commit/28f93e9357f73bb174a180ee9b634a0f18273eb0"
        },
        "date": 1774693181615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1575,
            "range": "±47",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1558ms, Q3: 1605ms\nAll times: 1532, 1539, 1552, 1556, 1557, 1558, 1566, 1572, 1574, 1575, 1575, 1578, 1592, 1597, 1599, 1605, 1629, 1876, 1914, 1962ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2902,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 2892ms, Q3: 2908ms\nAll times: 2887, 2888, 2892, 2894, 2896, 2902, 2905, 2908, 2910, 2913ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 4314,
            "range": "±952",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3452ms, Q3: 4404ms\nAll times: 3395, 3430, 3452, 4192, 4286, 4314, 4324, 4404, 4539, 5418ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b21a85f69810745c34f2e88ff8e58b6dc86936b6",
          "message": "Merge pull request #1351 from yamadashy/chore/allow-deepwiki-mcp-firewall\n\nchore(devcontainer): Add mcp.deepwiki.com to firewall allowed domains",
          "timestamp": "2026-03-29T11:44:16+09:00",
          "tree_id": "09a10512938d41bd05d34215b06602419b3a9dad",
          "url": "https://github.com/yzkee/repomix/commit/b21a85f69810745c34f2e88ff8e58b6dc86936b6"
        },
        "date": 1774757938417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1470,
            "range": "±59",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1453ms, Q3: 1512ms\nAll times: 1431, 1435, 1439, 1445, 1445, 1448, 1452, 1453, 1455, 1457, 1461, 1462, 1464, 1464, 1466, 1470, 1478, 1481, 1486, 1487, 1494, 1498, 1512, 1521, 1539, 1542, 1558, 1605, 1608, 1646ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2567,
            "range": "±20",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2554ms, Q3: 2574ms\nAll times: 2529, 2534, 2537, 2537, 2546, 2554, 2555, 2557, 2566, 2567, 2567, 2567, 2572, 2574, 2574, 2574, 2577, 2584, 2608, 2609ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3212,
            "range": "±99",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3168ms, Q3: 3267ms\nAll times: 3123, 3132, 3133, 3157, 3167, 3168, 3173, 3182, 3187, 3207, 3212, 3222, 3230, 3232, 3248, 3267, 3280, 3330, 3469, 3937ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81fc9ebd9e094c97882a893f766e898c70dc3b2d",
          "message": "Merge pull request #1354 from yamadashy/chore/pr-resolve-outdated-auto-reply\n\nchore(agents): Skip confirmation and auto-reply on pr-resolve-outdated",
          "timestamp": "2026-03-29T23:08:07+09:00",
          "tree_id": "887b25858afed1fd09c61ab878862e899fe6a885",
          "url": "https://github.com/yzkee/repomix/commit/81fc9ebd9e094c97882a893f766e898c70dc3b2d"
        },
        "date": 1774801571631,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1425,
            "range": "±96",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1370ms, Q3: 1466ms\nAll times: 1354, 1357, 1361, 1363, 1363, 1367, 1369, 1370, 1371, 1377, 1382, 1383, 1388, 1391, 1393, 1425, 1438, 1441, 1452, 1457, 1460, 1461, 1466, 1469, 1500, 1542, 1554, 1570, 1586, 1613ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2331,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2321ms, Q3: 2350ms\nAll times: 2295, 2302, 2310, 2311, 2320, 2321, 2322, 2325, 2326, 2331, 2331, 2336, 2338, 2344, 2346, 2350, 2354, 2359, 2363, 2444ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3143,
            "range": "±39",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3127ms, Q3: 3166ms\nAll times: 3093, 3105, 3110, 3114, 3119, 3127, 3132, 3135, 3138, 3140, 3143, 3145, 3147, 3148, 3155, 3166, 3171, 3186, 3187, 3220ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6e224a94df25c1bd06b23455296a70561266d8",
          "message": "Merge pull request #1356 from yamadashy/perf/cache-empty-dir-paths\n\nperf(core): Cache empty directory paths to avoid redundant file search",
          "timestamp": "2026-04-02T00:26:39+09:00",
          "tree_id": "9f39d41e3bdcf3870204b7a48ffc12e284484cde",
          "url": "https://github.com/yzkee/repomix/commit/9d6e224a94df25c1bd06b23455296a70561266d8"
        },
        "date": 1775126008329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1994,
            "range": "±471",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1699ms, Q3: 2170ms\nAll times: 1471, 1545, 1568, 1589, 1595, 1624, 1641, 1699, 1737, 1763, 1812, 1851, 1920, 1923, 1935, 1994, 2013, 2078, 2090, 2127, 2142, 2166, 2170, 2217, 2237, 2277, 2323, 2324, 2435, 2442ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2221,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2210ms, Q3: 2225ms\nAll times: 2193, 2199, 2200, 2202, 2208, 2210, 2211, 2212, 2216, 2218, 2221, 2221, 2221, 2224, 2225, 2225, 2226, 2241, 2246, 2260ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2829,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2794ms, Q3: 2840ms\nAll times: 2730, 2747, 2771, 2774, 2790, 2794, 2796, 2803, 2819, 2823, 2829, 2829, 2832, 2832, 2833, 2840, 2859, 2877, 2938, 3279ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208f492ef967a0c683ffe627089c3baf5f279128",
          "message": "Merge pull request #1394 from yamadashy/chore/remove-tower-sponsorship\n\nchore(sponsors): remove Tower sponsorship",
          "timestamp": "2026-04-05T01:09:52+09:00",
          "tree_id": "66c0283cea5cc8168a718a10870c4f3691c2d678",
          "url": "https://github.com/yzkee/repomix/commit/208f492ef967a0c683ffe627089c3baf5f279128"
        },
        "date": 1775363220462,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1220,
            "range": "±66",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1195ms, Q3: 1261ms\nAll times: 1165, 1175, 1179, 1184, 1190, 1193, 1194, 1195, 1197, 1197, 1199, 1207, 1211, 1212, 1213, 1220, 1224, 1238, 1240, 1253, 1256, 1259, 1261, 1298, 1299, 1312, 1324, 1361, 1457, 1463ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2009,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1998ms, Q3: 2027ms\nAll times: 1961, 1970, 1983, 1985, 1993, 1998, 2002, 2003, 2003, 2009, 2009, 2015, 2018, 2024, 2025, 2027, 2029, 2053, 2062, 2148ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2452,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2446ms, Q3: 2468ms\nAll times: 2407, 2411, 2434, 2441, 2446, 2447, 2450, 2451, 2452, 2452, 2454, 2456, 2457, 2466, 2468, 2474, 2478, 2495, 2511ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a0eb983a5d63457125c930db7b5d8e7fbd4f74c",
          "message": "Merge pull request #1403 from yamadashy/fix/block-bot-pack-requests\n\nfix(server): Block bot/crawler requests to prevent OOM crashes",
          "timestamp": "2026-04-05T22:52:57+09:00",
          "tree_id": "f391d2965c09473e0c0f9848ce4cd62248e67e59",
          "url": "https://github.com/yzkee/repomix/commit/4a0eb983a5d63457125c930db7b5d8e7fbd4f74c"
        },
        "date": 1775406255218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2250,
            "range": "±485",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 2031ms, Q3: 2516ms\nAll times: 1330, 1379, 1398, 1489, 1689, 1892, 1978, 2031, 2068, 2132, 2134, 2144, 2168, 2177, 2240, 2250, 2255, 2293, 2336, 2376, 2391, 2429, 2516, 2545, 2590, 2601, 2683, 2720, 2765, 2955ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1949,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1935ms, Q3: 1960ms\nAll times: 1905, 1912, 1921, 1926, 1932, 1935, 1941, 1942, 1942, 1949, 1949, 1954, 1957, 1958, 1960, 1960, 1964, 1965, 1968, 2000ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2417,
            "range": "±44",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2393ms, Q3: 2437ms\nAll times: 2376, 2384, 2388, 2392, 2393, 2393, 2406, 2409, 2409, 2411, 2417, 2426, 2427, 2429, 2432, 2437, 2440, 2453, 2454, 2473ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a645d86637bab9cb670a7a297944039384000f5",
          "message": "Merge pull request #1425 from yamadashy/chore/improve-claude-md\n\nchore(agents): Improve CLAUDE.md clarity and conciseness",
          "timestamp": "2026-04-06T23:24:46+09:00",
          "tree_id": "bc3d4c5050625f199762755f04bc43ac27f3f858",
          "url": "https://github.com/yzkee/repomix/commit/6a645d86637bab9cb670a7a297944039384000f5"
        },
        "date": 1775492864733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1347,
            "range": "±129",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1271ms, Q3: 1400ms\nAll times: 1219, 1234, 1245, 1251, 1253, 1265, 1271, 1271, 1276, 1292, 1298, 1301, 1307, 1320, 1330, 1347, 1355, 1361, 1366, 1378, 1395, 1399, 1400, 1409, 1429, 1523, 1541, 1574, 1637, 1781ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1916,
            "range": "±76",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1894ms, Q3: 1970ms\nAll times: 1872, 1875, 1879, 1881, 1883, 1894, 1894, 1895, 1904, 1907, 1916, 1924, 1925, 1932, 1949, 1970, 1970, 1980, 1982, 2124ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2408,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2394ms, Q3: 2422ms\nAll times: 2365, 2365, 2386, 2391, 2392, 2394, 2399, 2403, 2405, 2407, 2408, 2412, 2416, 2421, 2421, 2422, 2427, 2436, 2444, 2533ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eafa70a7ca875f6737a86349397d3233c2d9fa13",
          "message": "Merge pull request #1430 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-8578f1e909\n\nchore(deps): Bump the npm_and_yarn group across 3 directories with 3 updates",
          "timestamp": "2026-04-08T22:37:37+09:00",
          "tree_id": "3d87db94a20a0f2feff45bacc1f036810046d91c",
          "url": "https://github.com/yzkee/repomix/commit/eafa70a7ca875f6737a86349397d3233c2d9fa13"
        },
        "date": 1775708922412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1334,
            "range": "±167",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1283ms, Q3: 1450ms\nAll times: 1213, 1215, 1229, 1243, 1252, 1280, 1282, 1283, 1300, 1312, 1312, 1313, 1314, 1317, 1319, 1334, 1337, 1339, 1365, 1377, 1386, 1436, 1450, 1459, 1477, 1495, 1506, 1549, 1549, 1616ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2007,
            "range": "±59",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1983ms, Q3: 2042ms\nAll times: 1934, 1954, 1972, 1975, 1981, 1983, 1987, 1988, 1991, 2003, 2007, 2015, 2019, 2023, 2028, 2042, 2048, 2056, 2068, 2086ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2384,
            "range": "±220",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2316ms, Q3: 2536ms\nAll times: 2292, 2292, 2293, 2300, 2308, 2316, 2321, 2335, 2339, 2343, 2384, 2452, 2464, 2465, 2497, 2536, 2538, 2600, 2646, 2921ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afbab35a6d9fee3ef9f99dc871d498d3d024716f",
          "message": "Merge pull request #1436 from yamadashy/perf/lazy-load-heavy-modules\n\nperf(core): Lazy-load handlebars, fast-xml-builder, and @clack/prompts",
          "timestamp": "2026-04-11T12:59:11+09:00",
          "tree_id": "e029b0add1a0b86d923d238fcf85c197932b73d7",
          "url": "https://github.com/yzkee/repomix/commit/afbab35a6d9fee3ef9f99dc871d498d3d024716f"
        },
        "date": 1775881201689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1630,
            "range": "±434",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1478ms, Q3: 1912ms\nAll times: 1231, 1232, 1284, 1329, 1361, 1393, 1421, 1478, 1502, 1536, 1546, 1573, 1613, 1613, 1626, 1630, 1640, 1642, 1642, 1655, 1723, 1821, 1912, 1935, 1941, 2005, 2033, 2164, 2218, 2282ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1903,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1892ms, Q3: 1919ms\nAll times: 1870, 1880, 1887, 1887, 1888, 1892, 1895, 1900, 1901, 1902, 1903, 1904, 1912, 1914, 1915, 1919, 1920, 1921, 1928, 1934ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2344,
            "range": "±53",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2323ms, Q3: 2376ms\nAll times: 2307, 2311, 2311, 2316, 2322, 2323, 2335, 2336, 2341, 2342, 2344, 2346, 2349, 2354, 2363, 2376, 2378, 2380, 2381, 2394ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c05836ac8442587ce16dd21a5dd15d4848277052",
          "message": "Merge pull request #1455 from yamadashy/fix/codecov-badge-token\n\ndocs(readme): Fix Codecov badge token",
          "timestamp": "2026-04-11T19:46:51+09:00",
          "tree_id": "aa9e743ad7e9c905a1d1981714aeb535d54893e6",
          "url": "https://github.com/yzkee/repomix/commit/c05836ac8442587ce16dd21a5dd15d4848277052"
        },
        "date": 1775945920771,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1268,
            "range": "±145",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1216ms, Q3: 1361ms\nAll times: 1151, 1170, 1170, 1191, 1199, 1207, 1213, 1216, 1220, 1221, 1227, 1232, 1234, 1240, 1256, 1268, 1270, 1281, 1292, 1328, 1329, 1333, 1361, 1365, 1371, 1376, 1420, 1532, 1535, 1783ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1781,
            "range": "±41",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1764ms, Q3: 1805ms\nAll times: 1749, 1751, 1752, 1755, 1759, 1764, 1766, 1773, 1773, 1775, 1781, 1781, 1783, 1783, 1792, 1805, 1811, 1812, 1833, 1868ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2369,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2336ms, Q3: 2378ms\nAll times: 2299, 2308, 2320, 2330, 2334, 2336, 2345, 2350, 2362, 2366, 2369, 2369, 2372, 2372, 2374, 2378, 2378, 2394, 2398, 2403ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c356f73251746c2cc3edcc68dbe19204aa1e950",
          "message": "Merge pull request #1457 from yamadashy/perf/fast-output-tokenization\n\nperf(core): Skip redundant full-output tokenization via wrapper-extraction fast path (-13.2%)",
          "timestamp": "2026-04-13T00:20:10+09:00",
          "tree_id": "905174e4806045dbff1efb20decd1259331b2189",
          "url": "https://github.com/yzkee/repomix/commit/4c356f73251746c2cc3edcc68dbe19204aa1e950"
        },
        "date": 1776032291042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 928,
            "range": "±39",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 907ms, Q3: 946ms\nAll times: 897, 901, 902, 902, 904, 904, 907, 907, 915, 915, 916, 919, 921, 923, 926, 928, 928, 928, 932, 935, 938, 945, 946, 953, 954, 967, 970, 1007, 1034, 1044ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1510,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1496ms, Q3: 1534ms\nAll times: 1464, 1485, 1491, 1495, 1496, 1496, 1496, 1500, 1505, 1510, 1510, 1510, 1520, 1527, 1532, 1534, 1537, 1543, 1544, 1549ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1908,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1902ms, Q3: 1920ms\nAll times: 1888, 1892, 1895, 1899, 1901, 1902, 1903, 1905, 1906, 1907, 1908, 1908, 1910, 1911, 1919, 1920, 1930, 1936, 1940, 1960ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c01d6951c6494ef226637bb83d5c70cd7e0716f",
          "message": "Merge pull request #1467 from yamadashy/perf/prefetch-sort-data\n\nperf(core): Prefetch git sort data to overlap with file search and collection",
          "timestamp": "2026-04-15T00:41:41+09:00",
          "tree_id": "cba49da97f353c479f12fcb5d8418cbefe43c759",
          "url": "https://github.com/yzkee/repomix/commit/1c01d6951c6494ef226637bb83d5c70cd7e0716f"
        },
        "date": 1776228307765,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 961,
            "range": "±55",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 931ms, Q3: 986ms\nAll times: 919, 919, 920, 923, 925, 928, 929, 931, 938, 943, 945, 947, 947, 947, 959, 961, 961, 962, 969, 971, 972, 980, 986, 996, 1013, 1022, 1035, 1038, 1058, 1062ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1186,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1175ms, Q3: 1204ms\nAll times: 1151, 1167, 1169, 1172, 1173, 1175, 1182, 1182, 1183, 1186, 1186, 1190, 1191, 1197, 1201, 1204, 1204, 1207, 1209, 1221ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2012,
            "range": "±66",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1983ms, Q3: 2049ms\nAll times: 1944, 1963, 1966, 1972, 1973, 1983, 1995, 2001, 2002, 2002, 2012, 2021, 2025, 2028, 2033, 2049, 2052, 2059, 2068, 2075ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55528df3718b5adb0952da0a72efcb7772cc482",
          "message": "Merge pull request #1469 from yamadashy/perf/reduce-module-overhead\n\nperf(core): Remove redundant minimatch and parallelize wrapper tokenization",
          "timestamp": "2026-04-15T22:24:43+09:00",
          "tree_id": "435703feb2ba6845db791f74a54749dcaf047bb4",
          "url": "https://github.com/yzkee/repomix/commit/c55528df3718b5adb0952da0a72efcb7772cc482"
        },
        "date": 1776336867196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1298,
            "range": "±276",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1244ms, Q3: 1520ms\nAll times: 1102, 1111, 1134, 1175, 1212, 1228, 1237, 1244, 1248, 1250, 1274, 1277, 1279, 1286, 1290, 1298, 1303, 1312, 1312, 1321, 1404, 1405, 1520, 1540, 1553, 1628, 1672, 2140, 2279, 2709ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1474,
            "range": "±41",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1450ms, Q3: 1491ms\nAll times: 1424, 1439, 1443, 1446, 1449, 1450, 1460, 1461, 1463, 1470, 1474, 1476, 1476, 1481, 1482, 1491, 1491, 1495, 1499, 1556ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2050,
            "range": "±100",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1965ms, Q3: 2065ms\nAll times: 1933, 1937, 1955, 1960, 1961, 1965, 1970, 1973, 2036, 2045, 2050, 2052, 2058, 2060, 2063, 2065, 2092, 2465, 2491, 2497ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f00df4968380cbee4113e709e38ab595b247d1d8",
          "message": "Merge pull request #1485 from yamadashy/renovate/docker-build-push-action-7.x\n\nchore(deps): update docker/build-push-action action to v7.1.0",
          "timestamp": "2026-04-18T13:05:19+09:00",
          "tree_id": "e6baa823d11fff0a19093295c9edf7067d8aa4c5",
          "url": "https://github.com/yzkee/repomix/commit/f00df4968380cbee4113e709e38ab595b247d1d8"
        },
        "date": 1776486389114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 949,
            "range": "±93",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 925ms, Q3: 1018ms\nAll times: 904, 907, 907, 914, 919, 921, 921, 925, 929, 930, 935, 936, 936, 940, 946, 949, 956, 965, 967, 980, 985, 1014, 1018, 1022, 1040, 1042, 1063, 1241, 1308, 1328ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1506,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1490ms, Q3: 1528ms\nAll times: 1456, 1480, 1484, 1489, 1490, 1490, 1491, 1494, 1500, 1505, 1506, 1517, 1519, 1523, 1527, 1528, 1542, 1545, 1558, 1585ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1943,
            "range": "±45",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1920ms, Q3: 1965ms\nAll times: 1911, 1912, 1916, 1917, 1918, 1920, 1930, 1933, 1936, 1941, 1943, 1951, 1951, 1951, 1964, 1965, 1966, 1975, 1991, 2012ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8ef0ec8336415f77a9d181f36f90e5a237111a2",
          "message": "Merge pull request #1491 from yamadashy/renovate/major-scripts-major-dependencies\n\nchore(deps): update dependency typescript to v6",
          "timestamp": "2026-04-18T15:22:05+09:00",
          "tree_id": "b0c40b91473f246d5d6cb147195a5625c80f8952",
          "url": "https://github.com/yzkee/repomix/commit/b8ef0ec8336415f77a9d181f36f90e5a237111a2"
        },
        "date": 1776507540060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 973,
            "range": "±64",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 946ms, Q3: 1010ms\nAll times: 854, 861, 886, 924, 933, 934, 943, 946, 949, 952, 953, 955, 959, 963, 972, 973, 982, 988, 993, 998, 1001, 1010, 1010, 1043, 1049, 1051, 1099, 1247, 1320, 1614ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1390,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1381ms, Q3: 1406ms\nAll times: 1372, 1375, 1375, 1376, 1376, 1381, 1381, 1383, 1384, 1386, 1390, 1393, 1402, 1402, 1404, 1406, 1412, 1418, 1420, 1442ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1817,
            "range": "±39",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1802ms, Q3: 1841ms\nAll times: 1739, 1784, 1793, 1794, 1802, 1802, 1803, 1807, 1816, 1816, 1817, 1823, 1827, 1831, 1832, 1841, 1850, 1853, 1862, 2033ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2de8219ecf8a2283b38883aeffc38da980a588f",
          "message": "Merge pull request #1493 from yamadashy/feat/observability-phase2\n\nfeat(server): Log pack options and validation reject reasons",
          "timestamp": "2026-04-18T23:17:47+09:00",
          "tree_id": "e643bd20dca6c1428c334812f554f5e42269ab71",
          "url": "https://github.com/yzkee/repomix/commit/f2de8219ecf8a2283b38883aeffc38da980a588f"
        },
        "date": 1776529627680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1171,
            "range": "±264",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1050ms, Q3: 1314ms\nAll times: 907, 925, 1003, 1016, 1030, 1047, 1049, 1050, 1056, 1081, 1083, 1084, 1144, 1151, 1163, 1171, 1197, 1206, 1241, 1253, 1306, 1310, 1314, 1322, 1526, 1535, 1537, 1621, 1659, 1798ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1437,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1427ms, Q3: 1456ms\nAll times: 1401, 1406, 1418, 1420, 1425, 1427, 1427, 1428, 1429, 1435, 1437, 1440, 1441, 1442, 1448, 1456, 1472, 1485, 1491, 1534ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1993,
            "range": "±498",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1967ms, Q3: 2465ms\nAll times: 1938, 1943, 1945, 1957, 1957, 1967, 1971, 1973, 1974, 1979, 1993, 1996, 2030, 2136, 2450, 2465, 2477, 2525, 2558, 2608ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f6d0b5bdba0d8bea746d065cb28cff2b444b1ce",
          "message": "Merge pull request #1489 from yamadashy/perf/try-valibot\n\nperf(config): Migrate configSchema from zod to valibot (experimental)",
          "timestamp": "2026-04-19T10:39:01+09:00",
          "tree_id": "3bc3369dd07cdd1654ae8481861ab5069086eb5a",
          "url": "https://github.com/yzkee/repomix/commit/9f6d0b5bdba0d8bea746d065cb28cff2b444b1ce"
        },
        "date": 1776572348628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1439,
            "range": "±213",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1285ms, Q3: 1498ms\nAll times: 1048, 1093, 1151, 1196, 1224, 1235, 1284, 1285, 1291, 1334, 1346, 1349, 1377, 1382, 1433, 1439, 1445, 1452, 1452, 1461, 1477, 1493, 1498, 1513, 1529, 1558, 1561, 1576, 1644, 1965ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1443,
            "range": "±33",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1423ms, Q3: 1456ms\nAll times: 1400, 1407, 1411, 1413, 1413, 1423, 1427, 1428, 1434, 1442, 1443, 1443, 1446, 1448, 1452, 1456, 1461, 1474, 1475, 1536ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2186,
            "range": "±457",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1813ms, Q3: 2270ms\nAll times: 1773, 1777, 1791, 1807, 1808, 1813, 1821, 1892, 1973, 2181, 2186, 2195, 2195, 2211, 2222, 2270, 2288, 2320, 2358, 2359ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dc0b0d446074771f9a1f1f7e2cffbac470dc137",
          "message": "Merge pull request #1497 from yamadashy/refactor/website-server-valibot\n\nrefactor(server): Migrate request validation from zod to valibot",
          "timestamp": "2026-04-19T22:46:59+09:00",
          "tree_id": "189208a3ecb34e596c518fe9bedd60c7d1f9305c",
          "url": "https://github.com/yzkee/repomix/commit/6dc0b0d446074771f9a1f1f7e2cffbac470dc137"
        },
        "date": 1776680529742,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 950,
            "range": "±86",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 922ms, Q3: 1008ms\nAll times: 867, 902, 902, 909, 909, 914, 919, 922, 924, 924, 925, 928, 938, 938, 942, 950, 950, 979, 997, 997, 1003, 1007, 1008, 1011, 1017, 1031, 1101, 1127, 1131, 1247ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1483,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1470ms, Q3: 1501ms\nAll times: 1457, 1457, 1462, 1466, 1467, 1470, 1474, 1476, 1476, 1477, 1483, 1489, 1493, 1494, 1497, 1501, 1509, 1510, 1542, 1548ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1878,
            "range": "±48",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1857ms, Q3: 1905ms\nAll times: 1840, 1843, 1845, 1853, 1854, 1857, 1859, 1866, 1866, 1875, 1878, 1887, 1889, 1892, 1897, 1905, 1976, 2061, 2314, 2359ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99ea7d2de7a5730498cac249c70f520e485cd92a",
          "message": "Merge pull request #1505 from yamadashy/chore/temp-disable-website-auto-pack\n\nchore(website): Temporarily disable auto-pack on repo query param",
          "timestamp": "2026-04-24T00:44:21+09:00",
          "tree_id": "87a8740ca2718ea06aada55e42ae49584c201325",
          "url": "https://github.com/yzkee/repomix/commit/99ea7d2de7a5730498cac249c70f520e485cd92a"
        },
        "date": 1776961367506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 879,
            "range": "±52",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 862ms, Q3: 914ms\nAll times: 833, 833, 846, 848, 851, 857, 859, 862, 866, 872, 876, 877, 878, 878, 879, 879, 880, 889, 891, 892, 908, 909, 914, 919, 935, 947, 976, 1001, 1039, 1151ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1461,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1451ms, Q3: 1475ms\nAll times: 1425, 1434, 1443, 1448, 1450, 1451, 1452, 1452, 1456, 1457, 1461, 1461, 1462, 1466, 1470, 1475, 1476, 1478, 1482, 1512ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1767,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1755ms, Q3: 1785ms\nAll times: 1727, 1745, 1749, 1750, 1751, 1755, 1757, 1760, 1763, 1767, 1767, 1775, 1781, 1782, 1784, 1785, 1789, 1789, 1844, 1845ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ed18a8c54458879766a62ea964ee692f76c7bd6a",
          "message": "Merge pull request #1512 from yamadashy/renovate/crate-ci-typos-1.x\n\nchore(deps): update crate-ci/typos action to v1.45.1",
          "timestamp": "2026-04-25T18:16:49+09:00",
          "tree_id": "1f4cacd2a14b3b2bb9109f2655ef610ff3ef03ff",
          "url": "https://github.com/yzkee/repomix/commit/ed18a8c54458879766a62ea964ee692f76c7bd6a"
        },
        "date": 1777112378552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 992,
            "range": "±139",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 968ms, Q3: 1107ms\nAll times: 921, 935, 951, 954, 955, 960, 961, 968, 969, 982, 983, 984, 986, 987, 990, 992, 994, 1011, 1023, 1045, 1074, 1078, 1107, 1115, 1156, 1177, 1197, 1211, 1232, 1247ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1376,
            "range": "±20",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1369ms, Q3: 1389ms\nAll times: 1340, 1351, 1352, 1365, 1366, 1369, 1371, 1371, 1372, 1373, 1376, 1377, 1381, 1382, 1385, 1389, 1391, 1404, 1418, 1418ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1867,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1852ms, Q3: 1876ms\nAll times: 1837, 1844, 1849, 1850, 1852, 1852, 1855, 1855, 1858, 1862, 1867, 1870, 1873, 1873, 1875, 1876, 1877, 1889, 1893, 1909ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ea06cb1080fa18ad421b4886f7e5deba06998cb",
          "message": "Merge pull request #1513 from yamadashy/dependabot/npm_and_yarn/browser/npm_and_yarn-87d6b5a2fd\n\nchore(deps): Bump the npm_and_yarn group across 2 directories with 1 update",
          "timestamp": "2026-04-25T20:07:33+09:00",
          "tree_id": "d387086ba4496e01b616543a304cfa0fd133a83f",
          "url": "https://github.com/yzkee/repomix/commit/3ea06cb1080fa18ad421b4886f7e5deba06998cb"
        },
        "date": 1777133894072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 905,
            "range": "±59",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 887ms, Q3: 946ms\nAll times: 866, 868, 871, 876, 879, 881, 885, 887, 890, 890, 894, 894, 896, 901, 902, 905, 909, 913, 913, 925, 937, 940, 946, 947, 952, 963, 973, 1014, 1014, 1025ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1392,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1381ms, Q3: 1403ms\nAll times: 1360, 1363, 1368, 1371, 1374, 1381, 1387, 1388, 1388, 1390, 1392, 1395, 1399, 1401, 1401, 1403, 1407, 1411, 1413, 1429ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1884,
            "range": "±98",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1838ms, Q3: 1936ms\nAll times: 1803, 1817, 1825, 1836, 1836, 1838, 1838, 1857, 1858, 1872, 1884, 1893, 1904, 1917, 1919, 1936, 1946, 1983, 2030, 2076ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28b57679262ee6816d8f937dc87e70369e84ff44",
          "message": "Merge pull request #1516 from yamadashy/claude/sleepy-tesla-vUjfm\n\nperf(core): Automated performance tuning by Claude",
          "timestamp": "2026-04-26T18:41:58+09:00",
          "tree_id": "72fabf0e3792edffa560070757abd7c5378e9340",
          "url": "https://github.com/yzkee/repomix/commit/28b57679262ee6816d8f937dc87e70369e84ff44"
        },
        "date": 1777198798945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 877,
            "range": "±67",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 839ms, Q3: 906ms\nAll times: 814, 820, 821, 823, 835, 837, 838, 839, 845, 846, 857, 861, 867, 872, 877, 877, 877, 881, 886, 891, 894, 898, 906, 907, 922, 947, 957, 1107, 1144, 1252ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1332,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1319ms, Q3: 1338ms\nAll times: 1293, 1313, 1317, 1317, 1318, 1319, 1320, 1324, 1325, 1326, 1332, 1333, 1333, 1335, 1336, 1338, 1344, 1351, 1368, 1379ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1841,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1821ms, Q3: 1859ms\nAll times: 1787, 1795, 1816, 1819, 1819, 1821, 1833, 1836, 1838, 1841, 1841, 1842, 1849, 1850, 1854, 1859, 1865, 1893, 1911, 1916ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba",
          "message": "1.14.0",
          "timestamp": "2026-04-26T23:04:36+09:00",
          "tree_id": "32caaa33ce128e019313d6503d78fe49367f33c5",
          "url": "https://github.com/yzkee/repomix/commit/7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba"
        },
        "date": 1777286522822,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 993,
            "range": "±158",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 924ms, Q3: 1082ms\nAll times: 823, 866, 877, 886, 895, 903, 909, 924, 927, 934, 935, 968, 989, 991, 992, 993, 1000, 1002, 1004, 1009, 1036, 1072, 1082, 1104, 1109, 1152, 1174, 1269, 1270, 1330ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1314,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1304ms, Q3: 1326ms\nAll times: 1285, 1296, 1300, 1303, 1304, 1304, 1306, 1306, 1310, 1310, 1314, 1317, 1318, 1321, 1322, 1326, 1333, 1334, 1338, 1386ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1829,
            "range": "±75",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1813ms, Q3: 1888ms\nAll times: 1795, 1802, 1803, 1806, 1808, 1813, 1815, 1822, 1824, 1827, 1829, 1835, 1838, 1842, 1845, 1888, 1918, 2245, 2266, 2275ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "758ab51bac0bbca668e073982f3eef423173a8f0",
          "message": "Merge pull request #1521 from yamadashy/claude/sleepy-tesla-LdYQq\n\nperf(core): Automated performance tuning by Claude",
          "timestamp": "2026-04-30T00:46:07+09:00",
          "tree_id": "5a02c96a3f72c02f459aaf39b1f5b2e46979fb50",
          "url": "https://github.com/yzkee/repomix/commit/758ab51bac0bbca668e073982f3eef423173a8f0"
        },
        "date": 1777522798785,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1073,
            "range": "±241",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 965ms, Q3: 1206ms\nAll times: 866, 881, 900, 932, 935, 945, 953, 965, 991, 998, 1007, 1011, 1027, 1050, 1065, 1073, 1086, 1095, 1100, 1106, 1117, 1187, 1206, 1247, 1379, 1393, 1414, 1501, 1595, 1651ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1353,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1342ms, Q3: 1388ms\nAll times: 1321, 1328, 1338, 1338, 1339, 1342, 1345, 1346, 1350, 1353, 1353, 1364, 1364, 1374, 1383, 1388, 1388, 1392, 1393, 1408ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1653,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1634ms, Q3: 1672ms\nAll times: 1607, 1612, 1629, 1629, 1634, 1638, 1639, 1639, 1649, 1653, 1654, 1657, 1659, 1664, 1672, 1675, 1682, 1684, 1712ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "253b95fba5a7117ebfbee5147a4861746459aad6",
          "message": "Merge pull request #1525 from yamadashy/feat/nix-flake-devshell\n\nfeat(nix): Add Nix flake with development shell",
          "timestamp": "2026-05-01T00:41:32+09:00",
          "tree_id": "d94fd2a6bab89f43b201cc6132c3dc7ddf64894c",
          "url": "https://github.com/yzkee/repomix/commit/253b95fba5a7117ebfbee5147a4861746459aad6"
        },
        "date": 1777587562172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1298,
            "range": "±157",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1252ms, Q3: 1409ms\nAll times: 1148, 1200, 1205, 1209, 1214, 1215, 1246, 1252, 1253, 1260, 1263, 1264, 1266, 1276, 1296, 1298, 1318, 1325, 1336, 1350, 1356, 1383, 1409, 1500, 1543, 1553, 1559, 1578, 1591, 1604ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1347,
            "range": "±80",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1322ms, Q3: 1402ms\nAll times: 1294, 1305, 1316, 1318, 1321, 1322, 1327, 1327, 1332, 1340, 1347, 1353, 1357, 1370, 1385, 1402, 1406, 1539, 1554, 1613ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1730,
            "range": "±51",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1719ms, Q3: 1770ms\nAll times: 1686, 1689, 1698, 1716, 1717, 1719, 1721, 1723, 1723, 1729, 1730, 1743, 1746, 1758, 1766, 1770, 1790, 1800, 1804, 1987ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d606eabb8cce38953cc3c7a0ab6705bbb841b33",
          "message": "Merge pull request #1532 from yamadashy/renovate/browser-non-major-dependencies\n\nchore(deps): update browser non-major dependencies",
          "timestamp": "2026-05-02T11:05:59+09:00",
          "tree_id": "cec232e9ea931e5c5d231658a2539748d1da30ed",
          "url": "https://github.com/yzkee/repomix/commit/3d606eabb8cce38953cc3c7a0ab6705bbb841b33"
        },
        "date": 1777717182683,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 855,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 845ms, Q3: 888ms\nAll times: 809, 809, 833, 837, 838, 843, 843, 845, 845, 846, 850, 850, 851, 851, 851, 855, 867, 867, 870, 873, 881, 888, 888, 889, 891, 892, 897, 898, 915, 1036ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1087,
            "range": "±34",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1077ms, Q3: 1111ms\nAll times: 1066, 1068, 1075, 1075, 1077, 1077, 1077, 1081, 1084, 1084, 1087, 1088, 1102, 1104, 1110, 1111, 1128, 1184, 1193, 1294ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1745,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1735ms, Q3: 1757ms\nAll times: 1731, 1732, 1733, 1733, 1734, 1735, 1737, 1739, 1743, 1744, 1745, 1747, 1752, 1752, 1756, 1757, 1762, 1773, 1786, 1805ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afd329561fd889265f173fad40cb4a9e149bbe34",
          "message": "Merge pull request #1536 from yamadashy/chore/mark-skills-internal\n\nchore(skills): Mark agent-memory and contextual-commit as internal",
          "timestamp": "2026-05-03T15:43:06+09:00",
          "tree_id": "2d496ca7038384c8fa998775d3e2ceb6b01c0338",
          "url": "https://github.com/yzkee/repomix/commit/afd329561fd889265f173fad40cb4a9e149bbe34"
        },
        "date": 1777803578889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2214,
            "range": "±233",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 2096ms, Q3: 2329ms\nAll times: 1913, 1932, 1969, 1999, 2042, 2051, 2073, 2096, 2114, 2130, 2171, 2181, 2192, 2200, 2208, 2214, 2228, 2252, 2257, 2282, 2301, 2301, 2329, 2335, 2340, 2370, 2375, 2379, 2525, 3154ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 4440,
            "range": "±356",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 4132ms, Q3: 4488ms\nAll times: 4092, 4100, 4107, 4109, 4112, 4132, 4204, 4411, 4426, 4433, 4440, 4445, 4466, 4472, 4482, 4488, 4493, 4496, 4502, 4516ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1879,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1864ms, Q3: 1894ms\nAll times: 1830, 1841, 1851, 1854, 1862, 1864, 1864, 1868, 1869, 1874, 1879, 1880, 1883, 1887, 1887, 1894, 1898, 1898, 1902, 1939ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b743c9659c81b5229a56df672221ea17f3c3bbdb",
          "message": "Merge pull request #1543 from yamadashy/chore/codex-review-loop-command\n\nchore(agents): Add codex-review-loop command",
          "timestamp": "2026-05-05T16:22:31+09:00",
          "tree_id": "7ca2cc36fe32048c8cb1321fbd3d94202f966783",
          "url": "https://github.com/yzkee/repomix/commit/b743c9659c81b5229a56df672221ea17f3c3bbdb"
        },
        "date": 1777976799816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 6132,
            "range": "±1151",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 5401ms, Q3: 6552ms\nAll times: 4730, 4737, 4777, 5017, 5040, 5199, 5343, 5401, 5420, 5621, 5665, 5684, 5723, 5877, 6129, 6132, 6229, 6317, 6333, 6369, 6503, 6530, 6552, 6748, 7034, 7094, 7150, 7161, 7367, 8199ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 4972,
            "range": "±107",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 4920ms, Q3: 5027ms\nAll times: 4483, 4522, 4680, 4803, 4834, 4920, 4928, 4961, 4962, 4968, 4972, 4999, 5007, 5015, 5023, 5027, 5032, 5038, 5041, 5106ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1780,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1768ms, Q3: 1795ms\nAll times: 1751, 1755, 1760, 1760, 1767, 1768, 1772, 1773, 1776, 1779, 1780, 1782, 1782, 1786, 1789, 1795, 1795, 1805, 1813, 1822ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55f43dedfdffe27a205fea4d46c72042ba6aacb2",
          "message": "Merge pull request #1534 from yamadashy/renovate/scripts-non-major-dependencies\n\nchore(deps): update dependency typescript to ^6.0.3",
          "timestamp": "2026-05-06T00:48:26+09:00",
          "tree_id": "b25fd0248c063a34531eb527e54ded121bab5208",
          "url": "https://github.com/yzkee/repomix/commit/55f43dedfdffe27a205fea4d46c72042ba6aacb2"
        },
        "date": 1777999083772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1121,
            "range": "±225",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1035ms, Q3: 1260ms\nAll times: 970, 976, 990, 995, 1008, 1025, 1030, 1035, 1040, 1046, 1058, 1082, 1083, 1087, 1108, 1121, 1128, 1153, 1180, 1214, 1229, 1232, 1260, 1279, 1322, 1345, 1353, 1355, 1365, 1426ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1434,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1420ms, Q3: 1448ms\nAll times: 1401, 1403, 1405, 1412, 1419, 1420, 1421, 1422, 1429, 1430, 1434, 1436, 1437, 1444, 1447, 1448, 1480, 1500, 1504, 1510ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1704,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1686ms, Q3: 1721ms\nAll times: 1670, 1670, 1678, 1681, 1681, 1686, 1689, 1694, 1697, 1703, 1704, 1707, 1709, 1710, 1711, 1721, 1722, 1726, 1735, 1745ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b99706131b26b68e0d72aab7f93fccebad1460c0",
          "message": "Merge pull request #1515 from yamadashy/feat/dart-extra-definitions\n\nfeat(core): Capture mixin, typedef, getter, setter, and factory in Dart query",
          "timestamp": "2026-05-06T22:28:35+09:00",
          "tree_id": "01b750aa212658cce3cbc004558584657d90cd08",
          "url": "https://github.com/yzkee/repomix/commit/b99706131b26b68e0d72aab7f93fccebad1460c0"
        },
        "date": 1778128344699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1184,
            "range": "±374",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 987ms, Q3: 1361ms\nAll times: 795, 837, 888, 913, 946, 958, 966, 987, 995, 1006, 1015, 1055, 1091, 1143, 1159, 1184, 1192, 1201, 1219, 1279, 1305, 1327, 1361, 1362, 1363, 1389, 1465, 1478, 1491, 1570ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1456,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1432ms, Q3: 1475ms\nAll times: 1418, 1426, 1426, 1428, 1432, 1432, 1443, 1445, 1446, 1454, 1456, 1462, 1462, 1463, 1463, 1475, 1480, 1480, 1494, 1507ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1853,
            "range": "±57",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1826ms, Q3: 1883ms\nAll times: 1792, 1807, 1813, 1814, 1816, 1826, 1830, 1840, 1842, 1847, 1853, 1855, 1862, 1865, 1881, 1883, 1890, 1919, 1922, 2294ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "daa7ff3e2b5dc92c5e52781982689ad73f1e8d36",
          "message": "Merge pull request #1558 from yamadashy/chore/renovate-group-github-actions\n\nchore(renovate): Group GitHub Actions, Dockerfile, and Nix updates",
          "timestamp": "2026-05-10T01:02:30+09:00",
          "tree_id": "0500dfca24e09dcac988d9f24bcb2dbf49f1c6e4",
          "url": "https://github.com/yzkee/repomix/commit/daa7ff3e2b5dc92c5e52781982689ad73f1e8d36"
        },
        "date": 1778367316182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 820,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 803ms, Q3: 841ms\nAll times: 775, 783, 791, 795, 798, 799, 802, 803, 804, 807, 813, 814, 815, 818, 820, 820, 823, 826, 826, 827, 834, 838, 841, 847, 857, 871, 879, 940, 980, 1006ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1422,
            "range": "±40",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1405ms, Q3: 1445ms\nAll times: 1385, 1385, 1399, 1400, 1403, 1405, 1408, 1409, 1413, 1419, 1422, 1424, 1424, 1434, 1441, 1445, 1449, 1453, 1466, 1488ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2100,
            "range": "±32",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2081ms, Q3: 2113ms\nAll times: 2052, 2065, 2066, 2078, 2080, 2081, 2085, 2086, 2094, 2099, 2100, 2103, 2104, 2110, 2110, 2113, 2132, 2143, 2188, 2249ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e27d8be1c4cb8cab511070724cb7f030a84e1fe2",
          "message": "Merge pull request #1565 from yamadashy/chore/remove-agent-memory-skill\n\nchore(skills): Remove agent-memory skill in favor of agent-carnet",
          "timestamp": "2026-05-10T23:13:25+09:00",
          "tree_id": "3127d54a54fa0cc20c2cb0cea6dcef6c29f97d4d",
          "url": "https://github.com/yzkee/repomix/commit/e27d8be1c4cb8cab511070724cb7f030a84e1fe2"
        },
        "date": 1778517066379,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1128,
            "range": "±326",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 988ms, Q3: 1314ms\nAll times: 913, 938, 946, 949, 960, 976, 978, 988, 1026, 1051, 1060, 1079, 1112, 1114, 1118, 1128, 1163, 1169, 1183, 1185, 1193, 1241, 1314, 1400, 1462, 1494, 1506, 1524, 1546, 2037ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1371,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1362ms, Q3: 1387ms\nAll times: 1343, 1349, 1354, 1356, 1359, 1362, 1366, 1369, 1370, 1371, 1371, 1371, 1379, 1384, 1386, 1387, 1391, 1396, 1398, 1405ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1793,
            "range": "±41",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1783ms, Q3: 1824ms\nAll times: 1750, 1777, 1778, 1780, 1782, 1783, 1785, 1788, 1792, 1792, 1793, 1804, 1813, 1815, 1820, 1824, 1825, 1831, 1846, 1848ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc14555d7f4e24c920b1df3a456a8e9f5d607320",
          "message": "Merge pull request #1575 from yamadashy/test/auto-perf-regression-guard\n\ntest(core): Add regression-guard specs against auto-perf-tuning silent breakages",
          "timestamp": "2026-05-16T18:14:13+09:00",
          "tree_id": "09d215cfa38e00f25452cad23e714a3a6a71ef5d",
          "url": "https://github.com/yzkee/repomix/commit/dc14555d7f4e24c920b1df3a456a8e9f5d607320"
        },
        "date": 1778926768270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 571,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 552ms, Q3: 595ms\nAll times: 529, 535, 540, 548, 551, 552, 552, 552, 553, 555, 557, 568, 568, 568, 569, 571, 575, 575, 577, 583, 587, 591, 595, 603, 607, 622, 633, 635, 642, 657ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 963,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 956ms, Q3: 977ms\nAll times: 934, 936, 942, 945, 952, 956, 956, 958, 960, 961, 963, 970, 971, 972, 972, 977, 980, 981, 988, 991ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1274,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1264ms, Q3: 1283ms\nAll times: 1244, 1247, 1256, 1258, 1261, 1264, 1267, 1269, 1272, 1272, 1274, 1274, 1281, 1282, 1283, 1283, 1296, 1302, 1311, 1314ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f704397bd5aefb5a6482144285136a9b186bb3d",
          "message": "Merge pull request #1588 from yamadashy/a11y/tabs-and-file-upload\n\nfix(website): Improve accessibility of tabs and file upload widgets",
          "timestamp": "2026-05-22T00:25:43+09:00",
          "tree_id": "546861c642c4b824ae7cd45fa1b806ecbe62a351",
          "url": "https://github.com/yzkee/repomix/commit/5f704397bd5aefb5a6482144285136a9b186bb3d"
        },
        "date": 1779380342548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 545,
            "range": "±162",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 477ms, Q3: 639ms\nAll times: 427, 432, 454, 459, 460, 471, 473, 477, 479, 481, 486, 493, 498, 504, 506, 545, 570, 576, 577, 597, 604, 633, 639, 645, 645, 647, 655, 681, 740, 787ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 746,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 740ms, Q3: 756ms\nAll times: 728, 735, 738, 739, 740, 740, 742, 742, 744, 746, 746, 747, 748, 748, 753, 756, 757, 758, 763, 775ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1023,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1012ms, Q3: 1027ms\nAll times: 999, 1007, 1009, 1012, 1012, 1012, 1012, 1017, 1020, 1023, 1023, 1023, 1024, 1025, 1026, 1027, 1029, 1029, 1037, 1073ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2e60fd70b31d0114b979d29760f1e19a04c211c",
          "message": "Merge pull request #1596 from yamadashy/docs/privacy-turnstile-disclosure\n\ndocs(website): Disclose Cloudflare Turnstile in privacy policy",
          "timestamp": "2026-05-24T17:14:13+09:00",
          "tree_id": "ce2e3b2aacd20a1e683a437ff96ad89ee975564c",
          "url": "https://github.com/yzkee/repomix/commit/b2e60fd70b31d0114b979d29760f1e19a04c211c"
        },
        "date": 1779617923867,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 573,
            "range": "±116",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 494ms, Q3: 610ms\nAll times: 455, 468, 472, 479, 487, 487, 494, 494, 495, 496, 501, 511, 531, 539, 566, 573, 581, 582, 583, 600, 603, 605, 610, 613, 613, 614, 614, 628, 650, 654ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 757,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 749ms, Q3: 771ms\nAll times: 743, 743, 744, 745, 747, 749, 749, 755, 756, 756, 757, 760, 762, 764, 765, 771, 772, 774, 784, 789ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1118,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1106ms, Q3: 1124ms\nAll times: 1096, 1099, 1099, 1101, 1105, 1106, 1111, 1113, 1114, 1114, 1118, 1118, 1123, 1123, 1124, 1124, 1125, 1131, 1133, 1156ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "132f1b87d25f43d277a2cfd178f221a1f6190be2",
          "message": "Merge pull request #1598 from yamadashy/fix/issue-triage-prompt-injection\n\nchore(ci): harden issue triage workflow with least-privilege split",
          "timestamp": "2026-05-24T22:59:55+09:00",
          "tree_id": "adeca105d532dbb3b400a85779e37cc3bb102bec",
          "url": "https://github.com/yzkee/repomix/commit/132f1b87d25f43d277a2cfd178f221a1f6190be2"
        },
        "date": 1779640025555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 440,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 433ms, Q3: 463ms\nAll times: 430, 431, 431, 431, 432, 432, 432, 433, 434, 435, 436, 436, 436, 437, 437, 440, 441, 443, 445, 445, 449, 455, 463, 472, 479, 483, 485, 497, 542, 549ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 771,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 756ms, Q3: 777ms\nAll times: 741, 742, 742, 746, 751, 756, 761, 764, 769, 769, 771, 773, 773, 775, 777, 777, 778, 780, 781, 795ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1023,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1013ms, Q3: 1038ms\nAll times: 1004, 1010, 1011, 1012, 1012, 1013, 1016, 1017, 1018, 1021, 1023, 1029, 1032, 1032, 1032, 1038, 1039, 1043, 1052, 1102ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "094a635b030e556f69afd74432f7892dbba3824c",
          "message": "Merge pull request #1601 from yamadashy/chore/explorer-description\n\nchore(skills): Sharpen repomix-explorer description",
          "timestamp": "2026-05-26T00:30:55+09:00",
          "tree_id": "e82b0c850042b780859aa9443932a14fa2b43ddf",
          "url": "https://github.com/yzkee/repomix/commit/094a635b030e556f69afd74432f7892dbba3824c"
        },
        "date": 1779769141630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 434,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 431ms, Q3: 448ms\nAll times: 423, 424, 425, 426, 427, 429, 431, 431, 431, 431, 431, 433, 433, 433, 434, 434, 434, 435, 435, 437, 438, 440, 448, 450, 451, 465, 483, 486, 487, 495ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 772,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 762ms, Q3: 783ms\nAll times: 758, 758, 758, 760, 761, 762, 765, 766, 768, 771, 772, 775, 778, 780, 782, 783, 784, 786, 787, 789ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 832,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 820ms, Q3: 836ms\nAll times: 810, 812, 814, 816, 819, 820, 821, 821, 825, 829, 832, 833, 834, 835, 835, 836, 838, 842, 847, 869ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "6d7800eada2e5a2e4d2ef24dc4c09a18348c5769",
          "message": "docs(release): Add v1.14.1 release notes\n\nintent(release): document the 1.14.1 security patch (GHSA-9mm9 argument injection, GHSA-hwpp MCP secret-scan bypass) alongside the token-count cache and Dart parsing improvements\ndecision(release-notes): lead with Security since updating is recommended for all users; omit website/deps/internal PRs per release-note guidelines\ndecision(nix): list nixpkgs install under Improvements (user-facing) and the dev flake under Development (contributor-facing), without pinning a nixpkgs version since it lags releases\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-28T00:29:38+09:00",
          "tree_id": "a29a1cde6027fe0bfe9f55b6215b4772f3a39c4b",
          "url": "https://github.com/yzkee/repomix/commit/6d7800eada2e5a2e4d2ef24dc4c09a18348c5769"
        },
        "date": 1779898724202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 445,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 439ms, Q3: 466ms\nAll times: 431, 432, 433, 434, 436, 437, 439, 439, 439, 439, 440, 442, 443, 443, 444, 445, 446, 452, 457, 462, 464, 464, 466, 469, 472, 477, 484, 486, 493, 587ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 727,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 722ms, Q3: 740ms\nAll times: 712, 718, 719, 720, 721, 722, 724, 726, 726, 726, 727, 729, 731, 734, 740, 740, 741, 744, 751, 755ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1155,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1143ms, Q3: 1168ms\nAll times: 1115, 1130, 1135, 1137, 1139, 1143, 1144, 1152, 1155, 1155, 1155, 1156, 1157, 1159, 1160, 1168, 1172, 1175, 1180, 1189ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c4eac374c285efab96cfa89de31f1335ce7b1983",
          "message": "Merge pull request #1613 from yamadashy/renovate/root-non-major-dependencies\n\nchore(deps): update dependency @typescript/native-preview to ^7.0.0-dev.20260523.1",
          "timestamp": "2026-05-30T18:28:44+09:00",
          "tree_id": "b1d6282aab3efc630ecb3ac4d250788aa2957021",
          "url": "https://github.com/yzkee/repomix/commit/c4eac374c285efab96cfa89de31f1335ce7b1983"
        },
        "date": 1780136389454,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 568,
            "range": "±70",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 546ms, Q3: 616ms\nAll times: 500, 513, 517, 534, 538, 539, 541, 546, 551, 552, 553, 560, 561, 564, 565, 568, 571, 589, 592, 598, 609, 610, 616, 616, 624, 644, 659, 680, 686, 688ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 835,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 825ms, Q3: 856ms\nAll times: 807, 818, 820, 821, 824, 825, 828, 831, 832, 833, 835, 838, 839, 845, 846, 856, 859, 949, 981, 987ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1187,
            "range": "±84",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1163ms, Q3: 1247ms\nAll times: 1144, 1151, 1160, 1160, 1161, 1163, 1165, 1178, 1178, 1185, 1187, 1194, 1195, 1197, 1207, 1247, 1308, 1318, 1393, 2264ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb54625652e35d5937bcf1deb09368533f96faed",
          "message": "Merge pull request #1614 from yamadashy/ci/schema-update-auto-pr\n\nci(schema): Deliver schema updates via PR instead of direct push to main",
          "timestamp": "2026-06-03T22:10:52+09:00",
          "tree_id": "a3a0d9d8a04400c366e50739b9f5cfd9d94e5466",
          "url": "https://github.com/yzkee/repomix/commit/eb54625652e35d5937bcf1deb09368533f96faed"
        },
        "date": 1780525139244,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 799,
            "range": "±77",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 766ms, Q3: 843ms\nAll times: 684, 691, 705, 711, 736, 748, 751, 766, 776, 779, 780, 786, 794, 794, 799, 799, 803, 805, 809, 821, 822, 837, 843, 861, 862, 894, 903, 944, 983, 1094ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 851,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 839ms, Q3: 865ms\nAll times: 829, 830, 833, 836, 836, 839, 841, 841, 848, 849, 851, 852, 856, 856, 864, 865, 869, 871, 883, 889ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1135,
            "range": "±93",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1113ms, Q3: 1206ms\nAll times: 1095, 1098, 1103, 1105, 1105, 1113, 1114, 1123, 1131, 1133, 1135, 1145, 1168, 1180, 1180, 1206, 1247, 1265, 1265, 1353ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a6d4c8a7a88ba69958e2252e780368eb3924036",
          "message": "Merge pull request #1619 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-0a9c170602\n\nchore(deps): Bump hono from 4.12.18 to 4.12.23 in the npm_and_yarn group across 1 directory",
          "timestamp": "2026-06-05T15:19:37+09:00",
          "tree_id": "a7f22769430289d889cb5e5241ae758ca847b3a8",
          "url": "https://github.com/yzkee/repomix/commit/4a6d4c8a7a88ba69958e2252e780368eb3924036"
        },
        "date": 1780654784786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 779,
            "range": "±132",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 751ms, Q3: 883ms\nAll times: 664, 694, 697, 711, 727, 735, 737, 751, 752, 758, 762, 762, 763, 773, 776, 779, 802, 819, 825, 855, 859, 879, 883, 891, 900, 903, 931, 989, 1024, 1077ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 884,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 879ms, Q3: 903ms\nAll times: 855, 861, 865, 870, 871, 879, 881, 881, 882, 882, 884, 886, 889, 895, 901, 903, 906, 910, 918, 923ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1121,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1116ms, Q3: 1151ms\nAll times: 1082, 1092, 1115, 1115, 1116, 1116, 1117, 1117, 1119, 1120, 1121, 1129, 1139, 1147, 1149, 1151, 1163, 1174, 1176, 1266ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edbe25eaa4a8f10d0ef68fc07e55881d13a4d3e8",
          "message": "Merge pull request #1621 from yamadashy/feat/token-budget-1616\n\nfeat(cli): Add --token-budget guard for CI/agent context limits",
          "timestamp": "2026-06-05T22:26:45+09:00",
          "tree_id": "38e4ced9ab1fb4008cfba49300e440d5f6901de0",
          "url": "https://github.com/yzkee/repomix/commit/edbe25eaa4a8f10d0ef68fc07e55881d13a4d3e8"
        },
        "date": 1780676374174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 808,
            "range": "±91",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 742ms, Q3: 833ms\nAll times: 671, 697, 718, 720, 726, 729, 735, 742, 755, 761, 765, 765, 766, 770, 801, 808, 812, 821, 821, 823, 825, 830, 833, 836, 855, 863, 869, 982, 988, 1012ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 793,
            "range": "±9",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 790ms, Q3: 799ms\nAll times: 783, 784, 786, 786, 789, 790, 790, 790, 791, 793, 793, 794, 794, 794, 796, 799, 800, 800, 816, 841ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1392,
            "range": "±232",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1195ms, Q3: 1427ms\nAll times: 1182, 1189, 1189, 1194, 1195, 1195, 1196, 1199, 1205, 1209, 1392, 1398, 1406, 1419, 1424, 1427, 1429, 1435, 1441, 1446ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dac7643587e10b14d364a3601ff3032c476bfcaa",
          "message": "Merge pull request #1630 from yamadashy/renovate/redis-8.x\n\nchore(deps): update redis docker tag to v8",
          "timestamp": "2026-06-07T17:23:33+09:00",
          "tree_id": "a0b4e8a42d653c24580a329fa57a8048cf0a1463",
          "url": "https://github.com/yzkee/repomix/commit/dac7643587e10b14d364a3601ff3032c476bfcaa"
        },
        "date": 1780827567212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 667,
            "range": "±128",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 591ms, Q3: 719ms\nAll times: 501, 517, 522, 523, 530, 555, 566, 591, 603, 627, 632, 641, 649, 651, 660, 667, 677, 687, 700, 702, 706, 713, 719, 723, 732, 750, 781, 797, 853, 894ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 820,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 813ms, Q3: 831ms\nAll times: 798, 804, 806, 810, 812, 813, 813, 816, 818, 819, 820, 823, 826, 827, 828, 831, 833, 835, 839, 861ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1215,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1196ms, Q3: 1225ms\nAll times: 1182, 1190, 1193, 1193, 1195, 1196, 1196, 1197, 1198, 1211, 1215, 1216, 1217, 1223, 1224, 1225, 1227, 1234, 1242, 1254ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc69dcc31357d5db934f67ceaff4150f67e4735c",
          "message": "Merge pull request #1622 from Samsen879/fix-ignore-gitignore-conflict\n\nfix(file): keep ignored .gitignore rules active",
          "timestamp": "2026-06-08T00:33:17+09:00",
          "tree_id": "0f9a330968372237c5335d0717c3b2158eb81bbe",
          "url": "https://github.com/yzkee/repomix/commit/fc69dcc31357d5db934f67ceaff4150f67e4735c"
        },
        "date": 1780849106368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 649,
            "range": "±200",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 579ms, Q3: 779ms\nAll times: 533, 549, 551, 558, 566, 569, 575, 579, 583, 595, 601, 612, 617, 623, 626, 649, 655, 660, 682, 709, 725, 727, 779, 804, 814, 830, 850, 917, 944, 976ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 847,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 837ms, Q3: 858ms\nAll times: 806, 818, 825, 831, 833, 837, 839, 843, 845, 847, 847, 849, 851, 852, 853, 858, 859, 869, 910, 914ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1222,
            "range": "±237",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1166ms, Q3: 1403ms\nAll times: 1124, 1140, 1148, 1159, 1164, 1166, 1197, 1199, 1211, 1212, 1222, 1231, 1235, 1271, 1377, 1403, 1423, 1443, 1449, 1453ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "915f2af824d38fe6a04eaa7885b530cfb940ce9b",
          "message": "Merge pull request #1641 from yamadashy/renovate/major-root-major-dependencies\n\nfix(deps): update root major dependencies to v15",
          "timestamp": "2026-06-13T17:35:16+09:00",
          "tree_id": "ece2c7d7f1dbbd10ee344d655b360cf0649220b9",
          "url": "https://github.com/yzkee/repomix/commit/915f2af824d38fe6a04eaa7885b530cfb940ce9b"
        },
        "date": 1781367572576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 524,
            "range": "±102",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 509ms, Q3: 611ms\nAll times: 479, 485, 487, 490, 493, 497, 503, 509, 511, 516, 518, 520, 521, 523, 523, 524, 525, 542, 542, 548, 569, 600, 611, 613, 615, 616, 667, 694, 700, 704ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 822,
            "range": "±8",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 821ms, Q3: 829ms\nAll times: 811, 816, 817, 817, 821, 821, 821, 822, 822, 822, 822, 823, 824, 827, 828, 829, 836, 838, 847, 858ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1138,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1127ms, Q3: 1144ms\nAll times: 1095, 1110, 1116, 1122, 1123, 1127, 1128, 1130, 1132, 1136, 1138, 1139, 1140, 1142, 1142, 1144, 1146, 1147, 1169, 1169ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7abd413dd88adc73eb62a9c0536f41e8c6e42fa",
          "message": "Merge pull request #1628 from serhiizghama/feat/auto-detect-github-shorthand\n\nfeat(cli): auto-detect GitHub shorthand (owner/repo) in positional arguments",
          "timestamp": "2026-06-14T20:51:42+09:00",
          "tree_id": "ccf6bd0d6a35035a8f9f78612082ba91562e4a74",
          "url": "https://github.com/yzkee/repomix/commit/d7abd413dd88adc73eb62a9c0536f41e8c6e42fa"
        },
        "date": 1781454551737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 673,
            "range": "±98",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 626ms, Q3: 724ms\nAll times: 521, 578, 582, 588, 601, 602, 610, 626, 644, 644, 648, 648, 660, 666, 672, 673, 679, 682, 691, 702, 718, 722, 724, 732, 744, 750, 763, 766, 767, 884ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 880,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 864ms, Q3: 892ms\nAll times: 844, 850, 853, 853, 861, 864, 867, 872, 873, 879, 880, 881, 884, 886, 887, 892, 899, 922, 960, 1024ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1208,
            "range": "±40",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1188ms, Q3: 1228ms\nAll times: 1173, 1177, 1182, 1183, 1186, 1188, 1189, 1197, 1201, 1203, 1208, 1210, 1212, 1212, 1227, 1228, 1232, 1240, 1247, 1247ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3741808966bdea4dda82e4e270433de8ace0a66",
          "message": "Merge pull request #1643 from yamadashy/feat/file-watch-option\n\nfeat(cli): add --watch / -w option to auto re-pack on file changes",
          "timestamp": "2026-06-18T00:13:07+09:00",
          "tree_id": "cdefc0641fa153bbef64c3f76568e7f8ed075223",
          "url": "https://github.com/yzkee/repomix/commit/f3741808966bdea4dda82e4e270433de8ace0a66"
        },
        "date": 1781735987383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 993,
            "range": "±227",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 850ms, Q3: 1077ms\nAll times: 622, 654, 748, 758, 790, 814, 836, 850, 874, 895, 899, 924, 956, 956, 965, 993, 996, 1018, 1019, 1033, 1035, 1074, 1077, 1091, 1096, 1100, 1114, 1147, 1201, 1244ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 863,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 854ms, Q3: 884ms\nAll times: 835, 837, 848, 849, 850, 854, 854, 856, 859, 862, 863, 864, 870, 871, 872, 884, 891, 899, 902, 912ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1447,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1434ms, Q3: 1457ms\nAll times: 1395, 1407, 1424, 1426, 1430, 1434, 1435, 1440, 1443, 1445, 1447, 1448, 1449, 1452, 1456, 1457, 1458, 1467, 1477, 1488ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "bb4ac4763faeb7fc3d31438f072a6946b5b290b9",
          "message": "1.15.0\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-19T00:19:03+09:00",
          "tree_id": "9bf73568e26cc5f0740cd3273ca86fc233183e7d",
          "url": "https://github.com/yzkee/repomix/commit/bb4ac4763faeb7fc3d31438f072a6946b5b290b9"
        },
        "date": 1781801611202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 533,
            "range": "±65",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 517ms, Q3: 582ms\nAll times: 499, 505, 505, 509, 510, 511, 516, 517, 519, 520, 521, 522, 523, 523, 524, 533, 533, 534, 535, 545, 546, 557, 582, 595, 610, 619, 621, 627, 659, 672ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 870,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 869ms, Q3: 884ms\nAll times: 854, 858, 864, 865, 865, 869, 869, 869, 870, 870, 870, 878, 880, 881, 884, 884, 885, 886, 890, 896ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1185,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1166ms, Q3: 1196ms\nAll times: 1144, 1153, 1158, 1160, 1162, 1166, 1169, 1173, 1173, 1181, 1185, 1187, 1188, 1191, 1192, 1196, 1196, 1197, 1215, 1225ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a9833efb36c7d1156f9ad1df7de32538a1cc82a",
          "message": "Merge pull request #1665 from yamadashy/docs/file-cohesion-guideline\n\ndocs: Reframe the 250-line rule as a cohesion-review signal",
          "timestamp": "2026-06-20T23:54:09+09:00",
          "tree_id": "a3b242d39c68a8b54d4e585e796b54dd4fcd7215",
          "url": "https://github.com/yzkee/repomix/commit/7a9833efb36c7d1156f9ad1df7de32538a1cc82a"
        },
        "date": 1781993954377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1016,
            "range": "±206",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 893ms, Q3: 1099ms\nAll times: 839, 851, 860, 873, 873, 883, 888, 893, 914, 927, 940, 943, 974, 1003, 1010, 1016, 1019, 1039, 1042, 1074, 1079, 1082, 1099, 1120, 1127, 1146, 1170, 1456, 1535, 1595ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 876,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 866ms, Q3: 887ms\nAll times: 845, 859, 859, 864, 864, 866, 869, 870, 875, 876, 876, 877, 880, 883, 884, 887, 891, 893, 912, 946ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 908,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 900ms, Q3: 918ms\nAll times: 881, 892, 895, 898, 899, 900, 903, 903, 904, 905, 908, 909, 912, 915, 915, 918, 920, 921, 924, 925ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c62ff43444eabc34611cb7b813f1f33993880db",
          "message": "Merge pull request #1666 from yamadashy/docs/output-file-path-style\n\ndocs(website): Document output.filePathStyle in 14 locales",
          "timestamp": "2026-06-21T14:24:07+09:00",
          "tree_id": "ec980a052a16dc795e2bf93649048aea9b54ee52",
          "url": "https://github.com/yzkee/repomix/commit/6c62ff43444eabc34611cb7b813f1f33993880db"
        },
        "date": 1782037233046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 807,
            "range": "±150",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 760ms, Q3: 910ms\nAll times: 693, 714, 720, 722, 740, 755, 759, 760, 762, 764, 778, 781, 781, 783, 791, 807, 811, 817, 838, 849, 892, 901, 910, 913, 949, 991, 1026, 1114, 1127, 1273ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 829,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 821ms, Q3: 838ms\nAll times: 812, 816, 817, 818, 819, 821, 822, 823, 826, 828, 829, 830, 830, 834, 836, 838, 843, 855, 858, 860ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1151,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1147ms, Q3: 1164ms\nAll times: 1133, 1137, 1137, 1141, 1146, 1147, 1147, 1147, 1148, 1150, 1151, 1156, 1158, 1160, 1162, 1164, 1164, 1169, 1170, 1180ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f04db0088ec00969436a0878bdae8f43176f9e11",
          "message": "Merge pull request #1631 from Samsen879/codex/fix-remote-split-output-copy\n\nfix(cli): copy split output files after remote packing",
          "timestamp": "2026-06-22T00:15:00+09:00",
          "tree_id": "912dc1acf2d96ef0ce452465fe8818ad2ab58688",
          "url": "https://github.com/yzkee/repomix/commit/f04db0088ec00969436a0878bdae8f43176f9e11"
        },
        "date": 1782058750400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 515,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 495ms, Q3: 530ms\nAll times: 476, 480, 482, 482, 485, 487, 494, 495, 496, 498, 501, 501, 502, 504, 508, 515, 517, 517, 523, 523, 524, 525, 530, 532, 549, 550, 629, 637, 657, 675ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 862,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 852ms, Q3: 883ms\nAll times: 841, 842, 842, 847, 850, 852, 852, 852, 854, 861, 862, 862, 865, 868, 869, 883, 893, 906, 908, 982ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1113,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1109ms, Q3: 1123ms\nAll times: 1096, 1100, 1103, 1108, 1109, 1109, 1109, 1111, 1112, 1112, 1113, 1115, 1115, 1118, 1122, 1123, 1130, 1132, 1139, 1140ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f94efc87852dce44731ca9461e2e38847006375",
          "message": "Merge pull request #1676 from yamadashy/chore/remove-homebrew-autobump-workflow\n\nchore(ci): Remove redundant Homebrew bump workflow",
          "timestamp": "2026-06-27T23:31:33+09:00",
          "tree_id": "532d0ad17d9ba066d929e4cc3757ef33ee9f4d42",
          "url": "https://github.com/yzkee/repomix/commit/5f94efc87852dce44731ca9461e2e38847006375"
        },
        "date": 1782577160399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 549,
            "range": "±118",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 513ms, Q3: 631ms\nAll times: 495, 502, 505, 505, 506, 507, 507, 513, 514, 515, 525, 534, 536, 539, 543, 549, 559, 566, 578, 591, 603, 619, 631, 643, 646, 648, 736, 784, 830, 865ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 879,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 871ms, Q3: 892ms\nAll times: 858, 859, 864, 864, 869, 871, 872, 874, 876, 876, 879, 881, 883, 886, 886, 892, 898, 900, 905, 930ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1236,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1227ms, Q3: 1246ms\nAll times: 1217, 1219, 1221, 1223, 1226, 1227, 1230, 1231, 1231, 1236, 1236, 1239, 1240, 1241, 1245, 1246, 1246, 1251, 1255, 1263ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51c03e9ef6bd519bc5b144f7420d5e4b2d845508",
          "message": "Merge pull request #1653 from PMDevSolutions/feat/output-patterns-inclusion-level\n\nfeat(output): add per-file inclusion levels (output.patterns)",
          "timestamp": "2026-06-28T18:38:56+09:00",
          "tree_id": "a4040f3a93e059bf8d03b8838acb0299cc5252fe",
          "url": "https://github.com/yzkee/repomix/commit/51c03e9ef6bd519bc5b144f7420d5e4b2d845508"
        },
        "date": 1782641997636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 787,
            "range": "±112",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 731ms, Q3: 843ms\nAll times: 655, 670, 686, 697, 703, 704, 718, 731, 733, 742, 744, 746, 758, 774, 787, 787, 790, 790, 798, 821, 821, 824, 843, 843, 861, 866, 866, 905, 1019, 1075ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 779,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 764ms, Q3: 793ms\nAll times: 744, 754, 755, 756, 759, 764, 769, 771, 774, 775, 779, 780, 780, 786, 786, 793, 798, 799, 802, 827ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1193,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1186ms, Q3: 1200ms\nAll times: 1168, 1173, 1176, 1181, 1184, 1186, 1187, 1188, 1191, 1191, 1193, 1194, 1194, 1196, 1197, 1200, 1202, 1203, 1213, 1228ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae54c5f22a3a33b1ae7e8584bf36febe337294dc",
          "message": "Merge pull request #1685 from yamadashy/chore/schema-update\n\nchore(schema): Update configuration JSON schema",
          "timestamp": "2026-06-30T00:02:11+09:00",
          "tree_id": "31978f67610fcea67b6c3432e995e8fb426ebb9a",
          "url": "https://github.com/yzkee/repomix/commit/ae54c5f22a3a33b1ae7e8584bf36febe337294dc"
        },
        "date": 1782750603884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 521,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 511ms, Q3: 542ms\nAll times: 485, 495, 499, 500, 502, 507, 510, 511, 514, 515, 517, 518, 518, 520, 521, 521, 525, 528, 531, 531, 532, 534, 542, 560, 563, 565, 566, 568, 591, 592ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 910,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 901ms, Q3: 926ms\nAll times: 884, 889, 890, 891, 896, 901, 901, 903, 906, 907, 910, 911, 911, 914, 923, 926, 927, 927, 929, 938ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1220,
            "range": "±84",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1178ms, Q3: 1262ms\nAll times: 1146, 1154, 1158, 1159, 1161, 1178, 1185, 1187, 1191, 1220, 1220, 1221, 1240, 1243, 1256, 1262, 1268, 1393, 1508, 1512ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6873d5212227998a4de7395744acc1f2d894cc20",
          "message": "Merge pull request #1681 from isaka1022/fix/tree-sitter-memory-leak\n\nfix(core): free web-tree-sitter Tree after parsing to avoid WASM heap leak",
          "timestamp": "2026-06-30T23:42:43+09:00",
          "tree_id": "e918b1347dd141aba65698cecfcfda6a0bdaa176",
          "url": "https://github.com/yzkee/repomix/commit/6873d5212227998a4de7395744acc1f2d894cc20"
        },
        "date": 1782836583220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 828,
            "range": "±145",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 760ms, Q3: 905ms\nAll times: 682, 700, 703, 726, 741, 742, 749, 760, 766, 767, 773, 774, 799, 809, 824, 828, 836, 837, 865, 876, 891, 898, 905, 916, 923, 931, 942, 963, 1122, 1446ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 881,
            "range": "±36",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 869ms, Q3: 905ms\nAll times: 861, 861, 862, 862, 868, 869, 871, 872, 876, 880, 881, 881, 883, 891, 894, 905, 912, 956, 1057, 1107ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1151,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1145ms, Q3: 1172ms\nAll times: 1128, 1128, 1136, 1141, 1143, 1145, 1148, 1150, 1150, 1151, 1151, 1152, 1153, 1155, 1161, 1172, 1173, 1175, 1182, 1193ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0852f0b5ee1440eac547febbbe5a93a2e517e0eb",
          "message": "Merge pull request #1689 from Uaitt/docs/bump-github-actions-versions\n\ndocs: Bump GitHub Actions versions in guides",
          "timestamp": "2026-07-02T00:23:02+09:00",
          "tree_id": "4df8cfcc27c01eeb34f3b5fff52e407e41f41b81",
          "url": "https://github.com/yzkee/repomix/commit/0852f0b5ee1440eac547febbbe5a93a2e517e0eb"
        },
        "date": 1782924066516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 778,
            "range": "±85",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 729ms, Q3: 814ms\nAll times: 609, 671, 688, 704, 710, 720, 722, 729, 753, 754, 756, 762, 766, 766, 771, 778, 780, 793, 796, 811, 811, 813, 814, 824, 833, 840, 845, 892, 904, 939ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 482,
            "range": "±11",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 480ms, Q3: 491ms\nAll times: 467, 474, 477, 479, 479, 480, 480, 481, 481, 481, 482, 483, 484, 485, 488, 491, 493, 499, 501, 504ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1232,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1214ms, Q3: 1237ms\nAll times: 1193, 1194, 1203, 1208, 1209, 1214, 1214, 1217, 1222, 1224, 1232, 1234, 1234, 1235, 1236, 1237, 1237, 1240, 1242, 1253ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea6fccb963c4109e80220557667e61b055a10b56",
          "message": "Merge pull request #1690 from yamadashy/dependabot/npm_and_yarn/browser/npm_and_yarn-3213b4e331\n\nchore(deps): Bump undici from 7.27.2 to 7.28.0 in /browser in the npm_and_yarn group across 1 directory",
          "timestamp": "2026-07-04T18:27:38+09:00",
          "tree_id": "6c6d81a595433d65a1b9a2e7bdfb31145ebe7afa",
          "url": "https://github.com/yzkee/repomix/commit/ea6fccb963c4109e80220557667e61b055a10b56"
        },
        "date": 1783160389858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 866,
            "range": "±184",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 791ms, Q3: 975ms\nAll times: 711, 713, 732, 738, 742, 766, 777, 791, 796, 806, 837, 837, 850, 860, 864, 866, 867, 940, 942, 952, 954, 967, 975, 986, 987, 1036, 1059, 1065, 1083, 1110ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 879,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 874ms, Q3: 896ms\nAll times: 849, 864, 865, 865, 868, 874, 874, 877, 878, 879, 879, 883, 885, 885, 889, 896, 902, 908, 949, 988ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1159,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1144ms, Q3: 1172ms\nAll times: 1128, 1134, 1134, 1141, 1143, 1144, 1145, 1147, 1148, 1148, 1159, 1160, 1163, 1164, 1164, 1172, 1188, 1205, 1214, 1234ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9befb06c690d1f20d66e868fc9def8e4886947a",
          "message": "Merge pull request #1698 from yamadashy/chore/renovate-weekend-schedule\n\nchore(renovate): Extend schedule to full weekend window",
          "timestamp": "2026-07-04T22:57:41+09:00",
          "tree_id": "11a90c9621886194d7802ce27072bdf79e62c25f",
          "url": "https://github.com/yzkee/repomix/commit/f9befb06c690d1f20d66e868fc9def8e4886947a"
        },
        "date": 1783203959638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 557,
            "range": "±70",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 515ms, Q3: 585ms\nAll times: 500, 506, 506, 506, 507, 510, 510, 515, 516, 518, 524, 524, 530, 532, 547, 557, 559, 572, 576, 581, 582, 583, 585, 589, 590, 607, 612, 618, 686, 732ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 856,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 846ms, Q3: 873ms\nAll times: 827, 833, 836, 841, 845, 846, 848, 851, 855, 856, 856, 857, 859, 860, 867, 873, 882, 887, 890, 899ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1207,
            "range": "±24",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1195ms, Q3: 1219ms\nAll times: 1183, 1186, 1187, 1188, 1193, 1195, 1199, 1202, 1202, 1205, 1207, 1209, 1210, 1214, 1216, 1219, 1219, 1219, 1219, 1260ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8d3f65fda5baa9d0feb05fc5fdd289669da70b5",
          "message": "Merge pull request #1706 from yamadashy/fix/website-ssrf-lfi-clone-url-validation",
          "timestamp": "2026-07-06T01:09:36+09:00",
          "tree_id": "6ea66f8a426dbf10298a99821d705d261dc27581",
          "url": "https://github.com/yzkee/repomix/commit/d8d3f65fda5baa9d0feb05fc5fdd289669da70b5"
        },
        "date": 1783312195013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 523,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 506ms, Q3: 534ms\nAll times: 498, 498, 499, 502, 503, 504, 504, 506, 507, 509, 509, 511, 513, 515, 518, 523, 523, 526, 527, 530, 530, 531, 534, 538, 543, 562, 581, 595, 621, 632ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 895,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 886ms, Q3: 907ms\nAll times: 874, 879, 881, 881, 885, 886, 887, 888, 890, 894, 895, 902, 905, 906, 907, 907, 907, 911, 937, 958ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1321,
            "range": "±67",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1310ms, Q3: 1377ms\nAll times: 1287, 1292, 1296, 1298, 1305, 1310, 1311, 1312, 1312, 1320, 1321, 1331, 1347, 1351, 1354, 1377, 1442, 1465, 1502, 1522ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab81efd8e7e99bc3ae3a897d89e0790e4c999f4f",
          "message": "Merge pull request #1711 from yamadashy/refactor/token-count-tree-typing\n\nrefactor(core): Use a discriminated node type for the token count tree",
          "timestamp": "2026-07-10T00:31:04+09:00",
          "tree_id": "04196f6bc36e5c76dfe9ee93e97446575d697fa5",
          "url": "https://github.com/yzkee/repomix/commit/ab81efd8e7e99bc3ae3a897d89e0790e4c999f4f"
        },
        "date": 1783614013431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 805,
            "range": "±203",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 720ms, Q3: 923ms\nAll times: 654, 656, 660, 679, 684, 693, 696, 720, 734, 736, 739, 743, 761, 761, 776, 805, 815, 825, 848, 877, 884, 917, 923, 938, 951, 953, 967, 996, 1125, 1142ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 837,
            "range": "±13",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 833ms, Q3: 846ms\nAll times: 814, 819, 824, 830, 832, 833, 834, 834, 834, 835, 837, 839, 842, 845, 846, 846, 847, 852, 853, 916ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1150,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1133ms, Q3: 1161ms\nAll times: 1112, 1116, 1117, 1126, 1128, 1133, 1137, 1140, 1142, 1148, 1150, 1150, 1155, 1157, 1159, 1161, 1170, 1173, 1177, 1191ms"
          }
        ]
      }
    ]
  }
}