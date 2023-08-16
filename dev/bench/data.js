window.BENCHMARK_DATA = {
  "lastUpdate": 1692158937904,
  "repoUrl": "https://github.com/AzureAD/microsoft-authentication-library-for-python",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "3d7cfb0f94e148c514dab170455bdb35b71d5e02",
          "message": "Use vanilla git command to publish",
          "timestamp": "2023-07-29T15:32:03-07:00",
          "tree_id": "624895a2f13ae17cd516aef3f01bc666780abd16",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/3d7cfb0f94e148c514dab170455bdb35b71d5e02"
        },
        "date": 1690670039287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 34030.11240869917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010809977509376026",
            "extra": "mean: 29.38573895936848 usec\nrounds: 11186"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23630.645516600933,
            "unit": "iter/sec",
            "range": "stddev: 0.000003192653222418667",
            "extra": "mean: 42.317929880395475 usec\nrounds: 20080"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 746.8004758102776,
            "unit": "iter/sec",
            "range": "stddev: 0.00001944893456239702",
            "extra": "mean: 1.3390457456725657 msec\nrounds: 751"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23695.610180218206,
            "unit": "iter/sec",
            "range": "stddev: 0.000001874504593713623",
            "extra": "mean: 42.20190965307277 usec\nrounds: 19724"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 7630.724927891385,
            "unit": "iter/sec",
            "range": "stddev: 0.000017559467166946328",
            "extra": "mean: 131.04914794462815 usec\nrounds: 6374"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6935.964144015228,
            "unit": "iter/sec",
            "range": "stddev: 0.000018359870006536114",
            "extra": "mean: 144.17606251077018 usec\nrounds: 5855"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 673.0620293435167,
            "unit": "iter/sec",
            "range": "stddev: 0.000029783853280479337",
            "extra": "mean: 1.48574716207861 msec\nrounds: 654"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6827.615039278727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001797239158016403",
            "extra": "mean: 146.46402795809072 usec\nrounds: 5079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "8ed61e9d1dca18760db97b53f90b416917a429a7",
          "message": "Do not run benchmark in matrix",
          "timestamp": "2023-07-29T15:53:29-07:00",
          "tree_id": "da99ba69ebda5b9005e994f69a2aaf7192bf4cca",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/8ed61e9d1dca18760db97b53f90b416917a429a7"
        },
        "date": 1690671398662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 34135.62250920954,
            "unit": "iter/sec",
            "range": "stddev: 9.572619386751023e-7",
            "extra": "mean: 29.294910316347895 usec\nrounds: 10236"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23151.003956619144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010377350230142023",
            "extra": "mean: 43.194671033438624 usec\nrounds: 20534"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 668.3612124629099,
            "unit": "iter/sec",
            "range": "stddev: 0.000010152209091874527",
            "extra": "mean: 1.4961969386508858 msec\nrounds: 652"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23062.705399971182,
            "unit": "iter/sec",
            "range": "stddev: 0.000001500287878974986",
            "extra": "mean: 43.36004742970222 usec\nrounds: 20367"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8206.922332122947,
            "unit": "iter/sec",
            "range": "stddev: 0.000018413488113040616",
            "extra": "mean: 121.84835673244665 usec\nrounds: 6610"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7352.232496705283,
            "unit": "iter/sec",
            "range": "stddev: 0.000017922074598120608",
            "extra": "mean: 136.01310900439083 usec\nrounds: 6330"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 619.5530113995497,
            "unit": "iter/sec",
            "range": "stddev: 0.00002439858844106065",
            "extra": "mean: 1.6140668862879597 msec\nrounds: 598"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7239.102061034979,
            "unit": "iter/sec",
            "range": "stddev: 0.00001860609111086352",
            "extra": "mean: 138.13867957223266 usec\nrounds: 6173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "7b1030f35bbb8f2a4c4f4ca3fe41a99b2b69aa28",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix",
          "timestamp": "2023-07-29T16:08:39-07:00",
          "tree_id": "ac92391893e44239683b133d90893116c5965a70",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/7b1030f35bbb8f2a4c4f4ca3fe41a99b2b69aa28"
        },
        "date": 1690672314069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 38300.00446908366,
            "unit": "iter/sec",
            "range": "stddev: 9.844864177972842e-7",
            "extra": "mean: 26.109657527774313 usec\nrounds: 14772"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25432.31211238378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011708989949636449",
            "extra": "mean: 39.32005849806589 usec\nrounds: 19881"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 708.227935920858,
            "unit": "iter/sec",
            "range": "stddev: 0.000008565503474902845",
            "extra": "mean: 1.411974802575066 msec\nrounds: 699"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25094.141899800547,
            "unit": "iter/sec",
            "range": "stddev: 0.000001504690572239288",
            "extra": "mean: 39.84993804502031 usec\nrounds: 19724"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8381.326031342443,
            "unit": "iter/sec",
            "range": "stddev: 0.000017168041008957286",
            "extra": "mean: 119.31286245880942 usec\nrounds: 7605"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7549.621837084086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001677801479869199",
            "extra": "mean: 132.45696560428425 usec\nrounds: 7123"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 654.1390254452017,
            "unit": "iter/sec",
            "range": "stddev: 0.00002351268380147235",
            "extra": "mean: 1.5287270153610055 msec\nrounds: 651"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7475.141370943885,
            "unit": "iter/sec",
            "range": "stddev: 0.000016963040090045192",
            "extra": "mean: 133.77673416144773 usec\nrounds: 6440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "dcc037e896caaec12e6dc4a4bbce7b0839c893c8",
          "message": "Adjust detection calculation",
          "timestamp": "2023-07-31T13:24:58-07:00",
          "tree_id": "6c2a91ae450a170b821004251fcc6adf62fa1937",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/dcc037e896caaec12e6dc4a4bbce7b0839c893c8"
        },
        "date": 1690835297039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 26441.900847859742,
            "unit": "iter/sec",
            "range": "stddev: 0.000029502158953191036",
            "extra": "mean: 37.81876370211644 usec\nrounds: 6623"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18825.9366460408,
            "unit": "iter/sec",
            "range": "stddev: 0.00003279940597170719",
            "extra": "mean: 53.118207014167645 usec\nrounds: 10835"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 630.03215458433,
            "unit": "iter/sec",
            "range": "stddev: 0.00023790991072829339",
            "extra": "mean: 1.587220577114449 msec\nrounds: 603"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18477.27689001512,
            "unit": "iter/sec",
            "range": "stddev: 0.00003115064299044735",
            "extra": "mean: 54.12052901260505 usec\nrounds: 11495"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 5721.806453768691,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474731544681337",
            "extra": "mean: 174.76998008930306 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5473.837115873423,
            "unit": "iter/sec",
            "range": "stddev: 0.00005907852562473156",
            "extra": "mean: 182.68720439271547 usec\nrounds: 5054"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 583.5040485033944,
            "unit": "iter/sec",
            "range": "stddev: 0.00022934836837647027",
            "extra": "mean: 1.7137841675046797 msec\nrounds: 597"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5222.333157668937,
            "unit": "iter/sec",
            "range": "stddev: 0.00009153096628777019",
            "extra": "mean: 191.48529398809254 usec\nrounds: 4990"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "b46a99a7dcf4749ef0a46841d44b2f71ab495ef1",
          "message": "Experimenting different reference workload",
          "timestamp": "2023-07-31T15:00:33-07:00",
          "tree_id": "3a4639c618152bdc4cb087b4c963061e9623eedb",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/b46a99a7dcf4749ef0a46841d44b2f71ab495ef1"
        },
        "date": 1690841216480,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 28489.047104352565,
            "unit": "iter/sec",
            "range": "stddev: 0.00001607124302821284",
            "extra": "mean: 35.101209118616666 usec\nrounds: 7216"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19634.301206702017,
            "unit": "iter/sec",
            "range": "stddev: 0.000040573113324344455",
            "extra": "mean: 50.93127529584081 usec\nrounds: 12423"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 675.4585500203045,
            "unit": "iter/sec",
            "range": "stddev: 0.00017097380389148283",
            "extra": "mean: 1.480475744914236 msec\nrounds: 639"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19069.705810396303,
            "unit": "iter/sec",
            "range": "stddev: 0.00004728669460850541",
            "extra": "mean: 52.43919386815219 usec\nrounds: 11905"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 6047.04622452802,
            "unit": "iter/sec",
            "range": "stddev: 0.00006221066122751532",
            "extra": "mean: 165.36999435258184 usec\nrounds: 4958"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5511.243402998108,
            "unit": "iter/sec",
            "range": "stddev: 0.000036762482459807536",
            "extra": "mean: 181.44725733869808 usec\nrounds: 4667"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 599.4150630212292,
            "unit": "iter/sec",
            "range": "stddev: 0.00022910487224657084",
            "extra": "mean: 1.6682930771871234 msec\nrounds: 583"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5602.14747456088,
            "unit": "iter/sec",
            "range": "stddev: 0.000038642294791921614",
            "extra": "mean: 178.50297667831103 usec\nrounds: 4588"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "d64142860a2782e8df7e12d944b7b98ff22bc718",
          "message": "Add more iterations to quick test cases",
          "timestamp": "2023-07-31T15:32:30-07:00",
          "tree_id": "cd52fda3d93e376124f2ec84de9dbffca6da5351",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/d64142860a2782e8df7e12d944b7b98ff22bc718"
        },
        "date": 1690843083816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 26301.69780075498,
            "unit": "iter/sec",
            "range": "stddev: 0.00004748000760592634",
            "extra": "mean: 38.02035927776857 usec\nrounds: 5152"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18932.88452456523,
            "unit": "iter/sec",
            "range": "stddev: 0.00006565154580371994",
            "extra": "mean: 52.81815344632298 usec\nrounds: 8850"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 630.9540855334336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002733134340337311",
            "extra": "mean: 1.584901378607542 msec\nrounds: 589"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18986.355088598953,
            "unit": "iter/sec",
            "range": "stddev: 0.00002711310788595619",
            "extra": "mean: 52.66940364980777 usec\nrounds: 9699"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 5868.781161471306,
            "unit": "iter/sec",
            "range": "stddev: 0.00007746572844569145",
            "extra": "mean: 170.3931314674033 usec\nrounds: 4252"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5410.6228585571625,
            "unit": "iter/sec",
            "range": "stddev: 0.00008480454913697191",
            "extra": "mean: 184.82160485801583 usec\nrounds: 4158"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 577.8303156393573,
            "unit": "iter/sec",
            "range": "stddev: 0.00028724443702485915",
            "extra": "mean: 1.7306118646501274 msec\nrounds: 628"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5303.490413088529,
            "unit": "iter/sec",
            "range": "stddev: 0.00018701270595321753",
            "extra": "mean: 188.55506885278638 usec\nrounds: 3384"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "ad71952a5fb866af800cbaff1b70cd8e0fd06bbc",
          "message": "Tune reference and each test case to be in tenth of second",
          "timestamp": "2023-07-31T15:55:23-07:00",
          "tree_id": "5a5e1f497308af23a2fad0879108770a240c27c8",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/ad71952a5fb866af800cbaff1b70cd8e0fd06bbc"
        },
        "date": 1690844746585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 26977.075563429742,
            "unit": "iter/sec",
            "range": "stddev: 0.000014072051061985584",
            "extra": "mean: 37.068510174453635 usec\nrounds: 5504"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18513.489913380057,
            "unit": "iter/sec",
            "range": "stddev: 0.000017427825662907298",
            "extra": "mean: 54.01466739543691 usec\nrounds: 10977"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 625.8939510902061,
            "unit": "iter/sec",
            "range": "stddev: 0.00017702738976803923",
            "extra": "mean: 1.5977147538463372 msec\nrounds: 650"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17693.53055063336,
            "unit": "iter/sec",
            "range": "stddev: 0.00004244794929870497",
            "extra": "mean: 56.517832726391845 usec\nrounds: 9882"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 5773.181911272533,
            "unit": "iter/sec",
            "range": "stddev: 0.000039779624851078675",
            "extra": "mean: 173.21470471031435 usec\nrounds: 4267"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5089.533603520415,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125133578460355",
            "extra": "mean: 196.48165782976716 usec\nrounds: 4451"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 560.6422894935089,
            "unit": "iter/sec",
            "range": "stddev: 0.00019484513998278615",
            "extra": "mean: 1.7836685150943792 msec\nrounds: 530"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5162.218549889415,
            "unit": "iter/sec",
            "range": "stddev: 0.00010983498873089825",
            "extra": "mean: 193.71516148254165 usec\nrounds: 3858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "8ad0953c9c26c6a24ee6055a85ec8f179986e1ab",
          "message": "Relax threshold to 20%",
          "timestamp": "2023-07-31T19:47:52-07:00",
          "tree_id": "6eb9ceda2c6ed818ee216ad51aeb054c91ae3f47",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/8ad0953c9c26c6a24ee6055a85ec8f179986e1ab"
        },
        "date": 1690858298672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 34283.85927028126,
            "unit": "iter/sec",
            "range": "stddev: 8.060865395872326e-7",
            "extra": "mean: 29.16824480337438 usec\nrounds: 9285"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23198.22892118688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013292377702727555",
            "extra": "mean: 43.10673902724973 usec\nrounds: 13055"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 669.9069775604553,
            "unit": "iter/sec",
            "range": "stddev: 0.000007828416068843172",
            "extra": "mean: 1.4927445652851938 msec\nrounds: 651"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22986.470340661315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016286873401760719",
            "extra": "mean: 43.503851838926145 usec\nrounds: 14410"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8184.507517338769,
            "unit": "iter/sec",
            "range": "stddev: 0.000018031283763179912",
            "extra": "mean: 122.18206139850363 usec\nrounds: 5277"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7260.6964167722435,
            "unit": "iter/sec",
            "range": "stddev: 0.00001769393894717653",
            "extra": "mean: 137.72783526522267 usec\nrounds: 4917"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 617.4619460912694,
            "unit": "iter/sec",
            "range": "stddev: 0.000023418590252086382",
            "extra": "mean: 1.6195330033378061 msec\nrounds: 599"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7164.307306109335,
            "unit": "iter/sec",
            "range": "stddev: 0.000018609636675179538",
            "extra": "mean: 139.58083556064855 usec\nrounds: 5388"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "6dc6c1d3ccbab99fb8679ff123b676a5b9bda773",
          "message": "One more run",
          "timestamp": "2023-07-31T22:02:23-07:00",
          "tree_id": "dd0857e7942d66703cc63eef8c6bed45c5679c61",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/6dc6c1d3ccbab99fb8679ff123b676a5b9bda773"
        },
        "date": 1690866401918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 29642.4165765132,
            "unit": "iter/sec",
            "range": "stddev: 0.000002123409500359489",
            "extra": "mean: 33.73544115132427 usec\nrounds: 7018"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20088.575534742013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024400113674516615",
            "extra": "mean: 49.7795375421497 usec\nrounds: 11547"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 567.795066186722,
            "unit": "iter/sec",
            "range": "stddev: 0.000040271625630812606",
            "extra": "mean: 1.761198818996334 msec\nrounds: 558"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20239.429516930017,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037481655835021056",
            "extra": "mean: 49.408507248858626 usec\nrounds: 11933"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 6866.955920412181,
            "unit": "iter/sec",
            "range": "stddev: 0.000025277851226139074",
            "extra": "mean: 145.62493360813306 usec\nrounds: 4127"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6277.903874167954,
            "unit": "iter/sec",
            "range": "stddev: 0.00002151878710244725",
            "extra": "mean: 159.28883589867576 usec\nrounds: 4223"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 521.9385454820651,
            "unit": "iter/sec",
            "range": "stddev: 0.00004544843218879679",
            "extra": "mean: 1.9159343732247152 msec\nrounds: 493"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6158.09249121687,
            "unit": "iter/sec",
            "range": "stddev: 0.000022666648549215152",
            "extra": "mean: 162.3879474733896 usec\nrounds: 3008"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "a8ec0a9d56c1df40e417bf2bd2c70ebcb9cce12b",
          "message": "Use 40% threshold",
          "timestamp": "2023-07-31T23:16:23-07:00",
          "tree_id": "de8f1ab796d41ae7ecf165311dd6fe39bb2f66f7",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a8ec0a9d56c1df40e417bf2bd2c70ebcb9cce12b"
        },
        "date": 1690870816842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 33352.99427058098,
            "unit": "iter/sec",
            "range": "stddev: 0.000005089071706462011",
            "extra": "mean: 29.982315587241004 usec\nrounds: 5992"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22754.624549013195,
            "unit": "iter/sec",
            "range": "stddev: 0.000007032019388805663",
            "extra": "mean: 43.947110524544655 usec\nrounds: 14205"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 616.5793646737886,
            "unit": "iter/sec",
            "range": "stddev: 0.00017011942359989294",
            "extra": "mean: 1.6218512283963094 msec\nrounds: 648"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22163.651781844495,
            "unit": "iter/sec",
            "range": "stddev: 0.000007399778137926302",
            "extra": "mean: 45.11891857185542 usec\nrounds: 12772"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 7626.516964202652,
            "unit": "iter/sec",
            "range": "stddev: 0.000026038928715434448",
            "extra": "mean: 131.1214548782623 usec\nrounds: 4643"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6526.7286242344535,
            "unit": "iter/sec",
            "range": "stddev: 0.000024441182677519855",
            "extra": "mean: 153.2161144691831 usec\nrounds: 4202"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 554.6549980534157,
            "unit": "iter/sec",
            "range": "stddev: 0.0001614248477652857",
            "extra": "mean: 1.8029225437606091 msec\nrounds: 537"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6483.185671287098,
            "unit": "iter/sec",
            "range": "stddev: 0.000024258279762075916",
            "extra": "mean: 154.24515827594234 usec\nrounds: 5244"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "c79f5658eedd4d30228d818fa60d35716ca2c7b4",
          "message": "Use larger threshold 0.4 * 3",
          "timestamp": "2023-08-01T19:24:36-07:00",
          "tree_id": "ee764fa314db743028d3a269081e26ac37a4b5c0",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/c79f5658eedd4d30228d818fa60d35716ca2c7b4"
        },
        "date": 1690943311065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 33952.30867086441,
            "unit": "iter/sec",
            "range": "stddev: 8.443951967798981e-7",
            "extra": "mean: 29.45307813068196 usec\nrounds: 8217"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23100.84409937489,
            "unit": "iter/sec",
            "range": "stddev: 0.000001005039462741501",
            "extra": "mean: 43.28846148210921 usec\nrounds: 13643"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 673.710565732449,
            "unit": "iter/sec",
            "range": "stddev: 0.00001052334853680411",
            "extra": "mean: 1.4843169320237892 msec\nrounds: 662"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22959.884080515138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014354985383181812",
            "extra": "mean: 43.55422686339467 usec\nrounds: 14771"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8182.808477677269,
            "unit": "iter/sec",
            "range": "stddev: 0.000018189165588571848",
            "extra": "mean: 122.2074307040185 usec\nrounds: 5426"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7286.176207256383,
            "unit": "iter/sec",
            "range": "stddev: 0.00001793440970699084",
            "extra": "mean: 137.24620041498432 usec\nrounds: 3373"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 620.0000459732515,
            "unit": "iter/sec",
            "range": "stddev: 0.00002491827496172007",
            "extra": "mean: 1.6129031062090322 msec\nrounds: 612"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7230.500082330841,
            "unit": "iter/sec",
            "range": "stddev: 0.000018487027165342717",
            "extra": "mean: 138.30302034622724 usec\nrounds: 5603"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "d1064988353723b58a30e573ee22a960013172c7",
          "message": "repeat=100k",
          "timestamp": "2023-08-02T21:56:06-07:00",
          "tree_id": "fffb2f44b0fc0d7b84d6927c6b2c833ddb4dc3b9",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/d1064988353723b58a30e573ee22a960013172c7"
        },
        "date": 1691039288205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 29685.876217721987,
            "unit": "iter/sec",
            "range": "stddev: 9.71706475773281e-7",
            "extra": "mean: 33.68605301274605 usec\nrounds: 7734"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20005.940378281313,
            "unit": "iter/sec",
            "range": "stddev: 0.000001457428117265506",
            "extra": "mean: 49.985153463998714 usec\nrounds: 10869"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 559.3803863563159,
            "unit": "iter/sec",
            "range": "stddev: 0.000010978833905581382",
            "extra": "mean: 1.787692283088054 msec\nrounds: 544"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19711.99934963887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018944011443931863",
            "extra": "mean: 50.73052115427958 usec\nrounds: 10707"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 7025.0949130855415,
            "unit": "iter/sec",
            "range": "stddev: 0.00002159302991188836",
            "extra": "mean: 142.34683123459507 usec\nrounds: 4527"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6232.092844166519,
            "unit": "iter/sec",
            "range": "stddev: 0.00002114579455127889",
            "extra": "mean: 160.45974041224994 usec\nrounds: 4172"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 518.25926705331,
            "unit": "iter/sec",
            "range": "stddev: 0.000032884290883641114",
            "extra": "mean: 1.9295361676516563 msec\nrounds: 507"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6132.096845053734,
            "unit": "iter/sec",
            "range": "stddev: 0.000022048432287308115",
            "extra": "mean: 163.0763546741143 usec\nrounds: 4311"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "d1064988353723b58a30e573ee22a960013172c7",
          "message": "repeat=100k",
          "timestamp": "2023-08-02T21:56:06-07:00",
          "tree_id": "fffb2f44b0fc0d7b84d6927c6b2c833ddb4dc3b9",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/d1064988353723b58a30e573ee22a960013172c7"
        },
        "date": 1691051723059,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 34014.57358758661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012606236098093235",
            "extra": "mean: 29.399163197651944 usec\nrounds: 7831"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23213.422624718612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015033935896501757",
            "extra": "mean: 43.0785247038564 usec\nrounds: 12407"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 671.5181773914903,
            "unit": "iter/sec",
            "range": "stddev: 0.000014305320562566108",
            "extra": "mean: 1.4891629648574756 msec\nrounds: 626"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23039.993643167018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016337315306143316",
            "extra": "mean: 43.40278975279016 usec\nrounds: 12804"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8180.831922019936,
            "unit": "iter/sec",
            "range": "stddev: 0.000018107935547515455",
            "extra": "mean: 122.23695701513559 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7398.0969497350825,
            "unit": "iter/sec",
            "range": "stddev: 0.000017773200828889215",
            "extra": "mean: 135.1698966361625 usec\nrounds: 4876"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 602.1251072199278,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466713019293554",
            "extra": "mean: 1.6607844250459851 msec\nrounds: 607"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7198.265485329674,
            "unit": "iter/sec",
            "range": "stddev: 0.000018662570211948553",
            "extra": "mean: 138.9223559533941 usec\nrounds: 3124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "d1064988353723b58a30e573ee22a960013172c7",
          "message": "repeat=100k",
          "timestamp": "2023-08-02T21:56:06-07:00",
          "tree_id": "fffb2f44b0fc0d7b84d6927c6b2c833ddb4dc3b9",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/d1064988353723b58a30e573ee22a960013172c7"
        },
        "date": 1691052705738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 25728.108711357978,
            "unit": "iter/sec",
            "range": "stddev: 0.000025071960539706287",
            "extra": "mean: 38.86799497075112 usec\nrounds: 6959"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18054.596707297915,
            "unit": "iter/sec",
            "range": "stddev: 0.00002208748248292989",
            "extra": "mean: 55.38755676529658 usec\nrounds: 12675"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 654.3157125267782,
            "unit": "iter/sec",
            "range": "stddev: 0.00024299846139351716",
            "extra": "mean: 1.5283142080423058 msec\nrounds: 572"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17012.2239098998,
            "unit": "iter/sec",
            "range": "stddev: 0.000028152419662606828",
            "extra": "mean: 58.781262537820076 usec\nrounds: 12821"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 6299.477054560297,
            "unit": "iter/sec",
            "range": "stddev: 0.000047253104942325605",
            "extra": "mean: 158.74333557197153 usec\nrounds: 4020"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5289.652320924244,
            "unit": "iter/sec",
            "range": "stddev: 0.00007371577971761278",
            "extra": "mean: 189.04834180581327 usec\nrounds: 4131"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 594.2467949496745,
            "unit": "iter/sec",
            "range": "stddev: 0.00035402669136404773",
            "extra": "mean: 1.6828025131960331 msec\nrounds: 682"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4798.62531481809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000530708759190915",
            "extra": "mean: 208.39301558136106 usec\nrounds: 4300"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "a9bdb41d38333672034c94c01533a29b2fa60530",
          "message": "Refactor to potentially use PyPerf",
          "timestamp": "2023-08-03T22:57:08-07:00",
          "tree_id": "edcd6fb0167d4df445e1db4a205bcdc459f25774",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a9bdb41d38333672034c94c01533a29b2fa60530"
        },
        "date": 1691128879527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 34197.98902615329,
            "unit": "iter/sec",
            "range": "stddev: 9.682267994873815e-7",
            "extra": "mean: 29.241485493057468 usec\nrounds: 8651"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23161.24843998683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015145738783595286",
            "extra": "mean: 43.175565539616855 usec\nrounds: 12954"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 675.2963263137524,
            "unit": "iter/sec",
            "range": "stddev: 0.00000697456983908661",
            "extra": "mean: 1.4808313936175415 msec\nrounds: 658"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22874.610723302758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015889903664852874",
            "extra": "mean: 43.716590944268304 usec\nrounds: 14245"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8190.622806267874,
            "unit": "iter/sec",
            "range": "stddev: 0.000018090531447745557",
            "extra": "mean: 122.09083773638679 usec\nrounds: 5337"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7320.355200940217,
            "unit": "iter/sec",
            "range": "stddev: 0.000017540262619115803",
            "extra": "mean: 136.60539311966193 usec\nrounds: 5174"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 613.08888350029,
            "unit": "iter/sec",
            "range": "stddev: 0.0000546741996156609",
            "extra": "mean: 1.6310848669947005 msec\nrounds: 609"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7235.100520027215,
            "unit": "iter/sec",
            "range": "stddev: 0.000017437404320276027",
            "extra": "mean: 138.21508038926854 usec\nrounds: 5038"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "795b5e710788b1f493bb6b7631e2dbedeb051e08",
          "message": "Refactor to potentially use PyPerf",
          "timestamp": "2023-08-04T00:07:36-07:00",
          "tree_id": "30b20cbe66fd186a7127715c8092a5b0152a4910",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/795b5e710788b1f493bb6b7631e2dbedeb051e08"
        },
        "date": 1691429108797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 37826.46482773377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011313964622441055",
            "extra": "mean: 26.436517516350502 usec\nrounds: 11161"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25519.92820650936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011802682106134126",
            "extra": "mean: 39.18506321443844 usec\nrounds: 5774"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 704.8555984022996,
            "unit": "iter/sec",
            "range": "stddev: 0.000008914263954491654",
            "extra": "mean: 1.4187303076923925 msec\nrounds: 689"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25107.918803551,
            "unit": "iter/sec",
            "range": "stddev: 0.000001390598190120176",
            "extra": "mean: 39.82807208451584 usec\nrounds: 15898"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8373.9558593468,
            "unit": "iter/sec",
            "range": "stddev: 0.00001669386363882741",
            "extra": "mean: 119.41787332014952 usec\nrounds: 5581"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7542.971067688223,
            "unit": "iter/sec",
            "range": "stddev: 0.00001636537215201396",
            "extra": "mean: 132.57375522540363 usec\nrounds: 6124"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 646.8503035729723,
            "unit": "iter/sec",
            "range": "stddev: 0.00005576398772999583",
            "extra": "mean: 1.5459527412700491 msec\nrounds: 630"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7461.7111866454725,
            "unit": "iter/sec",
            "range": "stddev: 0.00001678734119023276",
            "extra": "mean: 134.01751622198145 usec\nrounds: 5209"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "a5756dfa90b18476310848776c3518dd21e1b575",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-08-15T15:02:40-07:00",
          "tree_id": "87c2a83e1d8fbd5d8acec76d8745eaaea536a2e5",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a5756dfa90b18476310848776c3518dd21e1b575"
        },
        "date": 1692137185900,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 23780.49389387798,
            "unit": "iter/sec",
            "range": "stddev: 0.00006186465576912194",
            "extra": "mean: 42.051271284043374 usec\nrounds: 7118"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 15712.912440052349,
            "unit": "iter/sec",
            "range": "stddev: 0.00007563908453099589",
            "extra": "mean: 63.641925315576216 usec\nrounds: 7525"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 553.5065850522872,
            "unit": "iter/sec",
            "range": "stddev: 0.0004605758392047361",
            "extra": "mean: 1.8066632394365005 msec\nrounds: 568"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16523.075422882313,
            "unit": "iter/sec",
            "range": "stddev: 0.00005605143403997732",
            "extra": "mean: 60.52142076499451 usec\nrounds: 8418"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 4847.195404065669,
            "unit": "iter/sec",
            "range": "stddev: 0.00014752558576324864",
            "extra": "mean: 206.3048663483285 usec\nrounds: 2933"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4627.051876319043,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716422286354363",
            "extra": "mean: 216.12033466016155 usec\nrounds: 4270"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 496.7797567276701,
            "unit": "iter/sec",
            "range": "stddev: 0.00043979388761564815",
            "extra": "mean: 2.0129644705876983 msec\nrounds: 476"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4471.89984426756,
            "unit": "iter/sec",
            "range": "stddev: 0.00010797776052232459",
            "extra": "mean: 223.61860390989753 usec\nrounds: 3325"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "80bbd434fe7562a38691f3148d3222253ff4b68f",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-08-15T15:10:10-07:00",
          "tree_id": "5073172fc097f84ffafadf81b02dcce3ecc119ad",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/80bbd434fe7562a38691f3148d3222253ff4b68f"
        },
        "date": 1692137597701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 33888.45726772381,
            "unit": "iter/sec",
            "range": "stddev: 0.000001104506892619747",
            "extra": "mean: 29.50857255318094 usec\nrounds: 8511"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23158.3804964187,
            "unit": "iter/sec",
            "range": "stddev: 0.000001301835103819576",
            "extra": "mean: 43.18091241978876 usec\nrounds: 11224"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 673.3296526832239,
            "unit": "iter/sec",
            "range": "stddev: 0.000011675163117964756",
            "extra": "mean: 1.485156633181076 msec\nrounds: 657"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22647.31726013807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016556351047646896",
            "extra": "mean: 44.155340277769554 usec\nrounds: 12240"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8210.106622851452,
            "unit": "iter/sec",
            "range": "stddev: 0.000018199571132451245",
            "extra": "mean: 121.80109783430439 usec\nrounds: 5264"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7346.051910656236,
            "unit": "iter/sec",
            "range": "stddev: 0.000017689214596932922",
            "extra": "mean: 136.12754336099815 usec\nrounds: 4820"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 618.9314262152104,
            "unit": "iter/sec",
            "range": "stddev: 0.000026059787017234497",
            "extra": "mean: 1.615687873719773 msec\nrounds: 586"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7240.712478271692,
            "unit": "iter/sec",
            "range": "stddev: 0.000018419296075167727",
            "extra": "mean: 138.10795595058525 usec\nrounds: 5176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "13a88fac3f0ae7378acd03cc5b644ca6c66773cd",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-08-15T15:15:34-07:00",
          "tree_id": "d6c9412ff5ac55efa57df45c4b2fbae1f0a86c65",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/13a88fac3f0ae7378acd03cc5b644ca6c66773cd"
        },
        "date": 1692137952323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 28942.033306739315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012441586611906918",
            "extra": "mean: 34.5518225828019 usec\nrounds: 7457"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20300.863256407953,
            "unit": "iter/sec",
            "range": "stddev: 0.000004345546575307797",
            "extra": "mean: 49.25898900798471 usec\nrounds: 11099"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 560.70141291511,
            "unit": "iter/sec",
            "range": "stddev: 0.000010845411994502574",
            "extra": "mean: 1.7834804353371578 msec\nrounds: 549"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21328.57339808101,
            "unit": "iter/sec",
            "range": "stddev: 0.000006326172767468655",
            "extra": "mean: 46.88546117622535 usec\nrounds: 12531"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 7579.646829527419,
            "unit": "iter/sec",
            "range": "stddev: 0.000025874368433538896",
            "extra": "mean: 131.93226841445707 usec\nrounds: 4806"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6513.665751963499,
            "unit": "iter/sec",
            "range": "stddev: 0.000022702507495631094",
            "extra": "mean: 153.52338269714824 usec\nrounds: 4531"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 547.0047114930504,
            "unit": "iter/sec",
            "range": "stddev: 0.00013094215981264304",
            "extra": "mean: 1.8281378185399868 msec\nrounds: 507"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6679.29258595138,
            "unit": "iter/sec",
            "range": "stddev: 0.00002548492070511033",
            "extra": "mean: 149.71645382076983 usec\nrounds: 4266"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "13a88fac3f0ae7378acd03cc5b644ca6c66773cd",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-08-15T15:15:34-07:00",
          "tree_id": "d6c9412ff5ac55efa57df45c4b2fbae1f0a86c65",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/13a88fac3f0ae7378acd03cc5b644ca6c66773cd"
        },
        "date": 1692138482761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 29572.962677102474,
            "unit": "iter/sec",
            "range": "stddev: 0.000013396982273014506",
            "extra": "mean: 33.814670884303126 usec\nrounds: 7508"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20603.920176994307,
            "unit": "iter/sec",
            "range": "stddev: 0.000018328907176156808",
            "extra": "mean: 48.53445322102192 usec\nrounds: 12837"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 745.0039011130524,
            "unit": "iter/sec",
            "range": "stddev: 0.00023460968741523025",
            "extra": "mean: 1.342274850515518 msec\nrounds: 776"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21162.964319685714,
            "unit": "iter/sec",
            "range": "stddev: 0.000015577153859840335",
            "extra": "mean: 47.25235958885984 usec\nrounds: 12937"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 6721.0077278178305,
            "unit": "iter/sec",
            "range": "stddev: 0.00005207885450335766",
            "extra": "mean: 148.7872117541336 usec\nrounds: 5615"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6272.6083299624115,
            "unit": "iter/sec",
            "range": "stddev: 0.00004232765117530273",
            "extra": "mean: 159.42331282240167 usec\nrounds: 5233"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 692.9164743128263,
            "unit": "iter/sec",
            "range": "stddev: 0.00019306256030752683",
            "extra": "mean: 1.443175385592776 msec\nrounds: 708"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6148.789189713248,
            "unit": "iter/sec",
            "range": "stddev: 0.00003917236573158812",
            "extra": "mean: 162.63364528303754 usec\nrounds: 5300"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "83fc2730446f7cb957c587277d38de0444d70f29",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix\n\nSkip chatty test case discovery during benchmark",
          "timestamp": "2023-08-15T13:43:06-07:00",
          "tree_id": "62d057d7789ca251298590bab1083c92334a581c",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/83fc2730446f7cb957c587277d38de0444d70f29"
        },
        "date": 1692141171347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 29648.386483374292,
            "unit": "iter/sec",
            "range": "stddev: 0.000002111247678530482",
            "extra": "mean: 33.72864828785076 usec\nrounds: 6892"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20243.60227831178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024970275574046906",
            "extra": "mean: 49.398322801044245 usec\nrounds: 17122"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 563.7836734460801,
            "unit": "iter/sec",
            "range": "stddev: 0.000015598971619156847",
            "extra": "mean: 1.7737299732139888 msec\nrounds: 560"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19972.12252158832,
            "unit": "iter/sec",
            "range": "stddev: 0.000002682733343696856",
            "extra": "mean: 50.069790975850324 usec\nrounds: 13209"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 6913.3917804024795,
            "unit": "iter/sec",
            "range": "stddev: 0.0002190556629032415",
            "extra": "mean: 144.6468002630371 usec\nrounds: 5322"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6285.066312621163,
            "unit": "iter/sec",
            "range": "stddev: 0.000021670802735830957",
            "extra": "mean: 159.10731092715454 usec\nrounds: 5921"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 499.8107618849478,
            "unit": "iter/sec",
            "range": "stddev: 0.00029880863564999766",
            "extra": "mean: 2.0007572390571924 msec\nrounds: 297"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5577.415233422301,
            "unit": "iter/sec",
            "range": "stddev: 0.00012590228355991259",
            "extra": "mean: 179.29452230982633 usec\nrounds: 4953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "747b2fdd5bd84966b689c58ad6fcb043383c4f7c",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix\n\nSkip chatty test case discovery during benchmark",
          "timestamp": "2023-08-15T19:21:35-07:00",
          "tree_id": "9b5731602677d10e57c204fdf207ecafb6048635",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/747b2fdd5bd84966b689c58ad6fcb043383c4f7c"
        },
        "date": 1692152673974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23183.771232159535,
            "unit": "iter/sec",
            "range": "stddev: 0.000002224244288669292",
            "extra": "mean: 43.13362092759279 usec\nrounds: 6231"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19761.526386237416,
            "unit": "iter/sec",
            "range": "stddev: 0.000004543578102264194",
            "extra": "mean: 50.60337852730006 usec\nrounds: 15061"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7315.653308765737,
            "unit": "iter/sec",
            "range": "stddev: 0.000019327597528186882",
            "extra": "mean: 136.6931916800627 usec\nrounds: 6803"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6782.1134034621955,
            "unit": "iter/sec",
            "range": "stddev: 0.000017919909701131792",
            "extra": "mean: 147.44666455879533 usec\nrounds: 3953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "b88d4399f7d1207e39834d7bcc19fb28c8254a12",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix\n\nSkip chatty test case discovery during benchmark",
          "timestamp": "2023-08-15T21:06:04-07:00",
          "tree_id": "9440790a97fe47b44d9aa2df773da22e056e76f1",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/b88d4399f7d1207e39834d7bcc19fb28c8254a12"
        },
        "date": 1692158937451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23040.177805513522,
            "unit": "iter/sec",
            "range": "stddev: 0.000001210290233756286",
            "extra": "mean: 43.402442830137346 usec\nrounds: 6883"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21685.076657091853,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021125002697989453",
            "extra": "mean: 46.11466289988704 usec\nrounds: 15221"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7227.34534137822,
            "unit": "iter/sec",
            "range": "stddev: 0.000018613165747465255",
            "extra": "mean: 138.3633897047605 usec\nrounds: 6605"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6886.59957699714,
            "unit": "iter/sec",
            "range": "stddev: 0.000017571488545288878",
            "extra": "mean: 145.20954628177236 usec\nrounds: 6374"
          }
        ]
      }
    ]
  }
}