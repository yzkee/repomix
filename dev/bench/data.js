window.BENCHMARK_DATA = {
  "lastUpdate": 1777522799116,
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
      }
    ]
  }
}