window.BENCHMARK_DATA = {
  "lastUpdate": 1774801572384,
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
      }
    ]
  }
}