window.BENCHMARK_DATA = {
  "lastUpdate": 1774693182339,
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
      }
    ]
  }
}