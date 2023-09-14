window.BENCHMARK_DATA = {
  "lastUpdate": 1694735395766,
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
          "id": "40af0dc859d30bff9cfa1aa4c1155a42e40eef8c",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix\n\nSkip chatty test case discovery during benchmark",
          "timestamp": "2023-08-15T21:07:29-07:00",
          "tree_id": "641d064ce490c0fc0cda8d595cbcc31b4b85f6fc",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/40af0dc859d30bff9cfa1aa4c1155a42e40eef8c"
        },
        "date": 1692159030760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22899.91921752813,
            "unit": "iter/sec",
            "range": "stddev: 0.000002248855697656891",
            "extra": "mean: 43.668276315777426 usec\nrounds: 5168"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19107.73329650251,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037628785354923952",
            "extra": "mean: 52.33483137338119 usec\nrounds: 14286"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7269.997579922885,
            "unit": "iter/sec",
            "range": "stddev: 0.000019455958419800967",
            "extra": "mean: 137.55162763212465 usec\nrounds: 6601"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6690.311060423759,
            "unit": "iter/sec",
            "range": "stddev: 0.000018817191251473903",
            "extra": "mean: 149.46988129079017 usec\nrounds: 5981"
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
          "id": "f1854d7efc6cb14be0fe3d67444e400f10f27128",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix\n\nSkip chatty test case discovery during benchmark",
          "timestamp": "2023-08-15T21:11:05-07:00",
          "tree_id": "8ea5e4a71a55e80b0d71ca583521093824ed1414",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/f1854d7efc6cb14be0fe3d67444e400f10f27128"
        },
        "date": 1692159249655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16764.85585903964,
            "unit": "iter/sec",
            "range": "stddev: 0.00003533776187406666",
            "extra": "mean: 59.648589192062644 usec\nrounds: 5718"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 13755.65448203474,
            "unit": "iter/sec",
            "range": "stddev: 0.00007418971599544275",
            "extra": "mean: 72.69737701728603 usec\nrounds: 12392"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4688.892372377032,
            "unit": "iter/sec",
            "range": "stddev: 0.00011194801390358167",
            "extra": "mean: 213.26998373670293 usec\nrounds: 5534"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4395.5740942707835,
            "unit": "iter/sec",
            "range": "stddev: 0.00017115062450224122",
            "extra": "mean: 227.50156829420888 usec\nrounds: 4649"
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
          "id": "4a4be7b0a405ca801e2b65e4aef1b44408d643ef",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix\n\nSkip chatty test case discovery during benchmark",
          "timestamp": "2023-09-05T23:35:30-07:00",
          "tree_id": "1a42c5b49ebae54d0943c91736fc939a489df162",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/4a4be7b0a405ca801e2b65e4aef1b44408d643ef"
        },
        "date": 1693982327615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16060.181656030722,
            "unit": "iter/sec",
            "range": "stddev: 0.000026263299066465907",
            "extra": "mean: 62.26579632892835 usec\nrounds: 5121"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 14230.22598299882,
            "unit": "iter/sec",
            "range": "stddev: 0.000018862772715882196",
            "extra": "mean: 70.27295288175488 usec\nrounds: 6940"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4769.738179515426,
            "unit": "iter/sec",
            "range": "stddev: 0.00004338144372408393",
            "extra": "mean: 209.65511362755626 usec\nrounds: 2693"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4485.319581212909,
            "unit": "iter/sec",
            "range": "stddev: 0.00005446481495066099",
            "extra": "mean: 222.9495539601177 usec\nrounds: 4457"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cedea47735ffe32a4a082ce66063ccabc326c234",
          "message": "Merge pull request #580 from AzureAD/benchmark\n\nGuarding against perf regression for acquire_token_for_client()",
          "timestamp": "2023-09-05T23:43:17-07:00",
          "tree_id": "1a42c5b49ebae54d0943c91736fc939a489df162",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/cedea47735ffe32a4a082ce66063ccabc326c234"
        },
        "date": 1693982761968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25739.415163464026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012612490953367176",
            "extra": "mean: 38.85092157880325 usec\nrounds: 9653"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23968.946622725456,
            "unit": "iter/sec",
            "range": "stddev: 0.000001934258110103356",
            "extra": "mean: 41.72064862674771 usec\nrounds: 17332"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7577.039714042531,
            "unit": "iter/sec",
            "range": "stddev: 0.00002149261004037377",
            "extra": "mean: 131.9776638027513 usec\nrounds: 7216"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7343.463917045938,
            "unit": "iter/sec",
            "range": "stddev: 0.00001601534264534414",
            "extra": "mean: 136.175517616252 usec\nrounds: 6897"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694017170247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21285.962954605788,
            "unit": "iter/sec",
            "range": "stddev: 0.000005007255934088807",
            "extra": "mean: 46.97931693917673 usec\nrounds: 6730"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19658.554867504405,
            "unit": "iter/sec",
            "range": "stddev: 0.000005925161939277876",
            "extra": "mean: 50.86843904548651 usec\nrounds: 8170"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6540.36030693754,
            "unit": "iter/sec",
            "range": "stddev: 0.000022640755797196793",
            "extra": "mean: 152.896775264701 usec\nrounds: 4156"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5999.74889938508,
            "unit": "iter/sec",
            "range": "stddev: 0.000022525274405209667",
            "extra": "mean: 166.67364197566516 usec\nrounds: 3726"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694018496774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25513.359277294996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010262981343086688",
            "extra": "mean: 39.19515219973115 usec\nrounds: 8272"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 24710.110257049757,
            "unit": "iter/sec",
            "range": "stddev: 0.000008067614878312241",
            "extra": "mean: 40.46926499304881 usec\nrounds: 13423"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7564.153622848799,
            "unit": "iter/sec",
            "range": "stddev: 0.00001581262757822548",
            "extra": "mean: 132.2024974452306 usec\nrounds: 5090"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7406.409777048539,
            "unit": "iter/sec",
            "range": "stddev: 0.0000171602333841524",
            "extra": "mean: 135.01818426234863 usec\nrounds: 5134"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694018717173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19896.659826452957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015351602960776675",
            "extra": "mean: 50.25969226605978 usec\nrounds: 5547"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17722.173852688873,
            "unit": "iter/sec",
            "range": "stddev: 0.000002755535896266426",
            "extra": "mean: 56.42648629407709 usec\nrounds: 11236"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6317.054871918201,
            "unit": "iter/sec",
            "range": "stddev: 0.000020896325127283956",
            "extra": "mean: 158.30161685715194 usec\nrounds: 3761"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5998.954714716568,
            "unit": "iter/sec",
            "range": "stddev: 0.000021109560580881655",
            "extra": "mean: 166.6957074282977 usec\nrounds: 3729"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694018927112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19753.504544641528,
            "unit": "iter/sec",
            "range": "stddev: 0.000008529414415628527",
            "extra": "mean: 50.6239284143262 usec\nrounds: 4093"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16663.524163930695,
            "unit": "iter/sec",
            "range": "stddev: 0.00007300309792743537",
            "extra": "mean: 60.01131514332163 usec\nrounds: 11160"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5785.567807692871,
            "unit": "iter/sec",
            "range": "stddev: 0.00009911726234734177",
            "extra": "mean: 172.84388209405037 usec\nrounds: 4546"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5608.40729641389,
            "unit": "iter/sec",
            "range": "stddev: 0.00007708354472801109",
            "extra": "mean: 178.30374064298374 usec\nrounds: 3794"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694019110791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16437.788220273345,
            "unit": "iter/sec",
            "range": "stddev: 0.00006342348789270203",
            "extra": "mean: 60.8354351935659 usec\nrounds: 5501"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 15589.33571633221,
            "unit": "iter/sec",
            "range": "stddev: 0.00004271764985813535",
            "extra": "mean: 64.1464151004425 usec\nrounds: 9311"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5054.7136735581535,
            "unit": "iter/sec",
            "range": "stddev: 0.00010822103518947748",
            "extra": "mean: 197.83514251877935 usec\nrounds: 2112"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4569.125568019687,
            "unit": "iter/sec",
            "range": "stddev: 0.00015043817847830023",
            "extra": "mean: 218.8602578574814 usec\nrounds: 2959"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694042675880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23170.683644734818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012453786308248728",
            "extra": "mean: 43.1579842585799 usec\nrounds: 6035"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20499.615366217648,
            "unit": "iter/sec",
            "range": "stddev: 0.000002823682175498339",
            "extra": "mean: 48.78140307197913 usec\nrounds: 11849"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7311.759679624107,
            "unit": "iter/sec",
            "range": "stddev: 0.000017486606774692725",
            "extra": "mean: 136.76598299404301 usec\nrounds: 3881"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6756.980174195074,
            "unit": "iter/sec",
            "range": "stddev: 0.000017736679597842835",
            "extra": "mean: 147.9951064262409 usec\nrounds: 3937"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694042964172,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23100.96000563381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010822571183726743",
            "extra": "mean: 43.288244287515425 usec\nrounds: 7221"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21541.588832421898,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021975886657883134",
            "extra": "mean: 46.42183117407367 usec\nrounds: 12196"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7403.385743552572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719340518653599",
            "extra": "mean: 135.07333463893536 usec\nrounds: 4596"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7052.796214554318,
            "unit": "iter/sec",
            "range": "stddev: 0.00001736610771801051",
            "extra": "mean: 141.7877349038352 usec\nrounds: 5051"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694043038531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23193.580139563357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015661635226004046",
            "extra": "mean: 43.11537908260273 usec\nrounds: 7716"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21529.921558523598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022495918644630434",
            "extra": "mean: 46.44698761589795 usec\nrounds: 12516"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7273.346738152124,
            "unit": "iter/sec",
            "range": "stddev: 0.000018244263963464222",
            "extra": "mean: 137.48828922929383 usec\nrounds: 3983"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6938.801901018031,
            "unit": "iter/sec",
            "range": "stddev: 0.00001734225151935563",
            "extra": "mean: 144.1170989264421 usec\nrounds: 4751"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694069780359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23084.128862018566,
            "unit": "iter/sec",
            "range": "stddev: 0.000010458318771590603",
            "extra": "mean: 43.319806693912035 usec\nrounds: 6394"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22045.171805204376,
            "unit": "iter/sec",
            "range": "stddev: 0.000001998944654004265",
            "extra": "mean: 45.36140651731832 usec\nrounds: 13441"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7401.207388307789,
            "unit": "iter/sec",
            "range": "stddev: 0.00001769976754873693",
            "extra": "mean: 135.1130900047161 usec\nrounds: 4322"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7095.391970944958,
            "unit": "iter/sec",
            "range": "stddev: 0.00001782749599996664",
            "extra": "mean: 140.93654079928453 usec\nrounds: 4804"
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
          "id": "805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-05T23:44:18-07:00",
          "tree_id": "1aaf6d21febdd7c53ba82a34789f536fb9017ffe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/805d0f999b6f5a0f1d4b1b9a658fe2d0e0493643"
        },
        "date": 1694070115275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23136.83307689037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011665927443941896",
            "extra": "mean: 43.221126965679 usec\nrounds: 6868"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20508.145804146046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022706740777081018",
            "extra": "mean: 48.76111226973207 usec\nrounds: 11508"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7420.162367246808,
            "unit": "iter/sec",
            "range": "stddev: 0.000017413294427288662",
            "extra": "mean: 134.76794044481835 usec\nrounds: 4181"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6976.075173141685,
            "unit": "iter/sec",
            "range": "stddev: 0.000017381589547925816",
            "extra": "mean: 143.34707914990096 usec\nrounds: 4283"
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
          "id": "07740cd06d386de4f2539b07da76f4a388bd354b",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-07T18:53:28-07:00",
          "tree_id": "a05fa570341e106ac7cdbea6135c3823ae6c2d2f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/07740cd06d386de4f2539b07da76f4a388bd354b"
        },
        "date": 1694138211427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17947.547563089865,
            "unit": "iter/sec",
            "range": "stddev: 0.00002538928962047887",
            "extra": "mean: 55.717918923728384 usec\nrounds: 5612"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16799.223904188657,
            "unit": "iter/sec",
            "range": "stddev: 0.00004373137031765107",
            "extra": "mean: 59.52655942341858 usec\nrounds: 13387"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5034.905582677747,
            "unit": "iter/sec",
            "range": "stddev: 0.000060838035947278793",
            "extra": "mean: 198.61345631593025 usec\nrounds: 3594"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5185.332547129857,
            "unit": "iter/sec",
            "range": "stddev: 0.00004372141351940556",
            "extra": "mean: 192.8516620507805 usec\nrounds: 3394"
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
          "id": "1dd4a22f280bbc32b3c156228aac4e009abb6c88",
          "message": "Automatically check cryptography version",
          "timestamp": "2023-09-07T19:40:07-07:00",
          "tree_id": "18c0f14b0f8a50909ac95534bf1a8244f2f7fd2d",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/1dd4a22f280bbc32b3c156228aac4e009abb6c88"
        },
        "date": 1694141024593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19936.3079200076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014419227580743872",
            "extra": "mean: 50.159738905137196 usec\nrounds: 7143"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18352.50583860889,
            "unit": "iter/sec",
            "range": "stddev: 0.000008719301608006357",
            "extra": "mean: 54.488471971836155 usec\nrounds: 12755"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5912.508969183485,
            "unit": "iter/sec",
            "range": "stddev: 0.00008264653293004723",
            "extra": "mean: 169.132935816603 usec\nrounds: 5718"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5537.919791561373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000892290886642484",
            "extra": "mean: 180.57321839940514 usec\nrounds: 5348"
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
          "id": "dc0fa2257d7d1adc85a464ae4a64c9c42d7b773c",
          "message": "Merge branch 'cryptography-ceiling' into dev",
          "timestamp": "2023-09-07T19:45:41-07:00",
          "tree_id": "18c0f14b0f8a50909ac95534bf1a8244f2f7fd2d",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/dc0fa2257d7d1adc85a464ae4a64c9c42d7b773c"
        },
        "date": 1694141332386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23210.841636135818,
            "unit": "iter/sec",
            "range": "stddev: 0.000001110757226814762",
            "extra": "mean: 43.08331493000018 usec\nrounds: 7716"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21856.82745953305,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022226730960896497",
            "extra": "mean: 45.75229419052037 usec\nrounds: 15337"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7281.356130821097,
            "unit": "iter/sec",
            "range": "stddev: 0.00001812161310458029",
            "extra": "mean: 137.33705398189787 usec\nrounds: 6743"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7026.6337120401095,
            "unit": "iter/sec",
            "range": "stddev: 0.000017466502746016826",
            "extra": "mean: 142.31565796385598 usec\nrounds: 6473"
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
          "id": "bbde57695be9dcd9350679402e934d39fa147e49",
          "message": "Placeholders in some error will use curly brackets\n\nThis way, it will remain visible even if it is rendered on web.\n\nThe choice of curly brackets is influenced by URL Template RFC 6570.",
          "timestamp": "2023-09-07T21:16:24-07:00",
          "tree_id": "70d7f06831bbdbca92bc995c15079b85e02542a2",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/bbde57695be9dcd9350679402e934d39fa147e49"
        },
        "date": 1694146812833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25925.595439179775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018684477799922294",
            "extra": "mean: 38.571920261039054 usec\nrounds: 9042"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23500.247462361625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022218723029324604",
            "extra": "mean: 42.552743395643645 usec\nrounds: 14006"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7580.79990484609,
            "unit": "iter/sec",
            "range": "stddev: 0.00001691109976914507",
            "extra": "mean: 131.9122008959426 usec\nrounds: 7143"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7311.037258350612,
            "unit": "iter/sec",
            "range": "stddev: 0.00001638371137308715",
            "extra": "mean: 136.77949717159592 usec\nrounds: 6541"
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
          "id": "a720fa56a7b3d2ffa95bc2f22e38b771ef6186cc",
          "message": "Merge branch 'improve-error-message' into dev",
          "timestamp": "2023-09-07T21:20:44-07:00",
          "tree_id": "70d7f06831bbdbca92bc995c15079b85e02542a2",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a720fa56a7b3d2ffa95bc2f22e38b771ef6186cc"
        },
        "date": 1694147046813,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16087.382178159729,
            "unit": "iter/sec",
            "range": "stddev: 0.000024059725862874806",
            "extra": "mean: 62.16051741206239 usec\nrounds: 5255"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 14189.7757035783,
            "unit": "iter/sec",
            "range": "stddev: 0.00005154691206042311",
            "extra": "mean: 70.47327744213923 usec\nrounds: 11588"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4760.1091981955715,
            "unit": "iter/sec",
            "range": "stddev: 0.00005163850223345775",
            "extra": "mean: 210.07921422875614 usec\nrounds: 5018"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4511.536203514768,
            "unit": "iter/sec",
            "range": "stddev: 0.00004601504008448036",
            "extra": "mean: 221.65398988063922 usec\nrounds: 3854"
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
          "id": "6d8f13cf8a10c85ef2cd5deb6631c4e1e67380c0",
          "message": "Bumping version number",
          "timestamp": "2023-09-07T23:46:25-07:00",
          "tree_id": "b47ad618c831443137a052302e086fbe9e4f9109",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/6d8f13cf8a10c85ef2cd5deb6631c4e1e67380c0"
        },
        "date": 1694155798467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16351.968543332,
            "unit": "iter/sec",
            "range": "stddev: 0.00007370635548986864",
            "extra": "mean: 61.15471647037749 usec\nrounds: 5100"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 13606.585514571854,
            "unit": "iter/sec",
            "range": "stddev: 0.00006681738736665547",
            "extra": "mean: 73.49382392291282 usec\nrounds: 11211"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4695.185075514702,
            "unit": "iter/sec",
            "range": "stddev: 0.00015538676031145814",
            "extra": "mean: 212.98414948858576 usec\nrounds: 5084"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4517.0331097345725,
            "unit": "iter/sec",
            "range": "stddev: 0.00023010273861480147",
            "extra": "mean: 221.3842528284592 usec\nrounds: 4331"
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
          "id": "237bd8aa1ababfde1c79aad2cdd40c98ae776a02",
          "message": "Provide guidance on how to DIY the pkcs12-to-pem",
          "timestamp": "2023-09-08T09:39:42-07:00",
          "tree_id": "f2e6be524a0650fa3bf5998972cb45a591cdc906",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/237bd8aa1ababfde1c79aad2cdd40c98ae776a02"
        },
        "date": 1694191356840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25680.01771102598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012029336055304129",
            "extra": "mean: 38.94078311210197 usec\nrounds: 8124"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23886.43970726722,
            "unit": "iter/sec",
            "range": "stddev: 0.000002023071141568966",
            "extra": "mean: 41.8647572537049 usec\nrounds: 16474"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7572.5896373894575,
            "unit": "iter/sec",
            "range": "stddev: 0.00003512595662288471",
            "extra": "mean: 132.05522124987823 usec\nrounds: 7200"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7321.729517098008,
            "unit": "iter/sec",
            "range": "stddev: 0.000016057018312370523",
            "extra": "mean: 136.57975177377946 usec\nrounds: 6623"
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
          "id": "140fb88d6c058faaebad0ff40c5ee272652add0e",
          "message": "Merge branch 'docs-staging' into dev",
          "timestamp": "2023-09-08T09:46:57-07:00",
          "tree_id": "f2e6be524a0650fa3bf5998972cb45a591cdc906",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/140fb88d6c058faaebad0ff40c5ee272652add0e"
        },
        "date": 1694191759941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17349.427483286334,
            "unit": "iter/sec",
            "range": "stddev: 0.000019535357043023353",
            "extra": "mean: 57.638789577544 usec\nrounds: 5066"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16226.247389576389,
            "unit": "iter/sec",
            "range": "stddev: 0.00002442454141470369",
            "extra": "mean: 61.62854392583661 usec\nrounds: 9277"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5108.177945625688,
            "unit": "iter/sec",
            "range": "stddev: 0.00013148624579944657",
            "extra": "mean: 195.76451929524796 usec\nrounds: 5960"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4796.519164194442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000586887897044091",
            "extra": "mean: 208.4845209136043 usec\nrounds: 3634"
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
          "id": "7819dada86a16d55234add4d0e06d9ee471892bc",
          "message": "Experimental: More precise regression detection",
          "timestamp": "2023-09-08T10:17:26-07:00",
          "tree_id": "c1a443d4ab4e0cf9895bef5108065e8cc92e94bb",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/7819dada86a16d55234add4d0e06d9ee471892bc"
        },
        "date": 1694197598623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23503.167541100727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013676408362402888",
            "extra": "mean: 42.547456560962196 usec\nrounds: 7758"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20983.405015658165,
            "unit": "iter/sec",
            "range": "stddev: 0.000026269230548611613",
            "extra": "mean: 47.656707729454936 usec\nrounds: 13662"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7321.541987143721,
            "unit": "iter/sec",
            "range": "stddev: 0.000017162336763495944",
            "extra": "mean: 136.58325005250978 usec\nrounds: 4771"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6962.329452570743,
            "unit": "iter/sec",
            "range": "stddev: 0.000016919220825808348",
            "extra": "mean: 143.63008915511227 usec\nrounds: 4509"
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
          "id": "4dd6ce4b9b12a34f34861c251b6f24315f67903a",
          "message": "Merge branch 'perf-baseline' into dev",
          "timestamp": "2023-09-08T11:28:20-07:00",
          "tree_id": "c1a443d4ab4e0cf9895bef5108065e8cc92e94bb",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/4dd6ce4b9b12a34f34861c251b6f24315f67903a"
        },
        "date": 1694197907228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16482.32761116088,
            "unit": "iter/sec",
            "range": "stddev: 0.00011709184041153535",
            "extra": "mean: 60.67104256093404 usec\nrounds: 5498"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 14852.055608175348,
            "unit": "iter/sec",
            "range": "stddev: 0.00003171186376747972",
            "extra": "mean: 67.33074709534131 usec\nrounds: 9209"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5182.4115315188365,
            "unit": "iter/sec",
            "range": "stddev: 0.00003476436894573057",
            "extra": "mean: 192.96036100531848 usec\nrounds: 2626"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4815.188224533843,
            "unit": "iter/sec",
            "range": "stddev: 0.00009010768905378772",
            "extra": "mean: 207.67620150441985 usec\nrounds: 3722"
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
          "id": "ede22de3505dcad792269abd7fc7b61d57ff9390",
          "message": "Add POP test function",
          "timestamp": "2023-09-09T13:55:42-07:00",
          "tree_id": "e0a980b99165eaefda7abeb2ea9d36cb4a923c08",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/ede22de3505dcad792269abd7fc7b61d57ff9390"
        },
        "date": 1694443849070,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23035.67788024918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012308694997406589",
            "extra": "mean: 43.410921319463384 usec\nrounds: 7397"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19810.3932490935,
            "unit": "iter/sec",
            "range": "stddev: 0.000002824745954887334",
            "extra": "mean: 50.47855372814261 usec\nrounds: 10823"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7399.79703344351,
            "unit": "iter/sec",
            "range": "stddev: 0.000017507024413445895",
            "extra": "mean: 135.13884171153381 usec\nrounds: 3342"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6800.091134756978,
            "unit": "iter/sec",
            "range": "stddev: 0.000017586166738271343",
            "extra": "mean: 147.05685264845175 usec\nrounds: 3115"
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
          "id": "26d56d05eb0f972672eb2113776cec3eaddc48d2",
          "message": "Merge branch 'at-pop-with-external-key' into dev",
          "timestamp": "2023-09-11T07:58:41-07:00",
          "tree_id": "e0a980b99165eaefda7abeb2ea9d36cb4a923c08",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/26d56d05eb0f972672eb2113776cec3eaddc48d2"
        },
        "date": 1694444544427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17411.73180725269,
            "unit": "iter/sec",
            "range": "stddev: 0.000012112407691229462",
            "extra": "mean: 57.43254094825073 usec\nrounds: 5568"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 15779.008949860996,
            "unit": "iter/sec",
            "range": "stddev: 0.000025517952458308044",
            "extra": "mean: 63.375336383772655 usec\nrounds: 6775"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5196.133570250812,
            "unit": "iter/sec",
            "range": "stddev: 0.00005733272624434376",
            "extra": "mean: 192.450787971513 usec\nrounds: 2943"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4953.895170384085,
            "unit": "iter/sec",
            "range": "stddev: 0.00005479456165408019",
            "extra": "mean: 201.86135669125755 usec\nrounds: 3639"
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
          "id": "147cad283d7ba13cee5bd7787131248f9067e7f4",
          "message": "Bumping version number",
          "timestamp": "2023-09-11T08:01:31-07:00",
          "tree_id": "dea9fa6731cc63550cb31838bd6ca8e9636d3df4",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/147cad283d7ba13cee5bd7787131248f9067e7f4"
        },
        "date": 1694444745873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 16929.15070212695,
            "unit": "iter/sec",
            "range": "stddev: 0.00008485824920133759",
            "extra": "mean: 59.06970866969491 usec\nrounds: 5873"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 15696.261377118059,
            "unit": "iter/sec",
            "range": "stddev: 0.000036003696749521076",
            "extra": "mean: 63.70943857100874 usec\nrounds: 8286"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5092.846082651387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007568796177290829",
            "extra": "mean: 196.35386260866338 usec\nrounds: 4600"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4731.0631794302135,
            "unit": "iter/sec",
            "range": "stddev: 0.00011971853568965188",
            "extra": "mean: 211.36898030612122 usec\nrounds: 3402"
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
          "id": "ee2b6fd99f707ab6221bd13e17afeb67e060114c",
          "message": "Bumping version number",
          "timestamp": "2023-09-11T08:17:26-07:00",
          "tree_id": "5ace9e914a0d11fe7dc4c5f497cd7f475c9deeb1",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/ee2b6fd99f707ab6221bd13e17afeb67e060114c"
        },
        "date": 1694445648510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23387.713025510002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010625531598431519",
            "extra": "mean: 42.75749402728074 usec\nrounds: 8204"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21924.21195139332,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023949718438541476",
            "extra": "mean: 45.61167362444005 usec\nrounds: 14085"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7477.637255427326,
            "unit": "iter/sec",
            "range": "stddev: 0.000017057738872098145",
            "extra": "mean: 133.73208218601303 usec\nrounds: 4794"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7201.687579134146,
            "unit": "iter/sec",
            "range": "stddev: 0.00001656283840621064",
            "extra": "mean: 138.85634290737022 usec\nrounds: 5118"
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
          "id": "c89490f708cce1e86573c35fae8b169e016e88cc",
          "message": "Bumping version number",
          "timestamp": "2023-09-11T12:46:50-07:00",
          "tree_id": "2220ddb74fb71b45343a1eae54488e77489f1bc8",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/c89490f708cce1e86573c35fae8b169e016e88cc"
        },
        "date": 1694461806821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22991.148491420918,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684122341019096",
            "extra": "mean: 43.49499984192382 usec\nrounds: 6325"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20961.12687782167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028925184616351335",
            "extra": "mean: 47.70735876123481 usec\nrounds: 12270"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7229.261409426722,
            "unit": "iter/sec",
            "range": "stddev: 0.000017466588504140465",
            "extra": "mean: 138.32671740103802 usec\nrounds: 4402"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6809.363706107749,
            "unit": "iter/sec",
            "range": "stddev: 0.000017331141823720808",
            "extra": "mean: 146.85659970006256 usec\nrounds: 4669"
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
          "id": "e1b2b34ad9951b80848465feb4c5deaad3c61cb0",
          "message": "Bumping version number",
          "timestamp": "2023-09-11T13:17:03-07:00",
          "tree_id": "12713d5bd2850d3e51cfe58819d5ee04b7125250",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/e1b2b34ad9951b80848465feb4c5deaad3c61cb0"
        },
        "date": 1694463625832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20014.513112744917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019166888898987914",
            "extra": "mean: 49.96374352785111 usec\nrounds: 6219"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18031.246598018424,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030683135693853614",
            "extra": "mean: 55.45928256063542 usec\nrounds: 11325"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6348.408202536362,
            "unit": "iter/sec",
            "range": "stddev: 0.0000209509267324544",
            "extra": "mean: 157.5198015150432 usec\nrounds: 3300"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6021.935047718194,
            "unit": "iter/sec",
            "range": "stddev: 0.00002218209604736033",
            "extra": "mean: 166.05957920102705 usec\nrounds: 3529"
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
          "id": "66fc6ebdb4c25609bfb918eb90528402f5963e41",
          "message": "Bumping version number",
          "timestamp": "2023-09-12T09:35:03-07:00",
          "tree_id": "d59fb246b6167f63af20b4bfc7f39438b068b7d3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/66fc6ebdb4c25609bfb918eb90528402f5963e41"
        },
        "date": 1694536726767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20047.17985608997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015626407511723322",
            "extra": "mean: 49.88232794730069 usec\nrounds: 6498"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17603.53305040217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029932847510360273",
            "extra": "mean: 56.806778340280616 usec\nrounds: 10471"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6362.855641371859,
            "unit": "iter/sec",
            "range": "stddev: 0.00002065407934697425",
            "extra": "mean: 157.1621385683985 usec\nrounds: 3031"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5889.189975349602,
            "unit": "iter/sec",
            "range": "stddev: 0.000022896912094577673",
            "extra": "mean: 169.80263910413873 usec\nrounds: 3350"
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
          "id": "66fc6ebdb4c25609bfb918eb90528402f5963e41",
          "message": "Bumping version number",
          "timestamp": "2023-09-12T09:35:03-07:00",
          "tree_id": "d59fb246b6167f63af20b4bfc7f39438b068b7d3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/66fc6ebdb4c25609bfb918eb90528402f5963e41"
        },
        "date": 1694537076554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25555.58177302503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011568000735738606",
            "extra": "mean: 39.13039463869851 usec\nrounds: 10184"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 24078.341117731667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018137163329704965",
            "extra": "mean: 41.53110029924712 usec\nrounds: 13699"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7549.554857587808,
            "unit": "iter/sec",
            "range": "stddev: 0.000015794615685195028",
            "extra": "mean: 132.4581407597738 usec\nrounds: 5108"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7323.176791474426,
            "unit": "iter/sec",
            "range": "stddev: 0.000015262735500858877",
            "extra": "mean: 136.55275961167436 usec\nrounds: 5150"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb6c0bcbc38343fccb33e3233c788d8e7157896",
          "message": "Merge pull request #592 from AzureAD/release-1.24.0\n\nMSAL Python 1.24.0",
          "timestamp": "2023-09-12T09:46:20-07:00",
          "tree_id": "ca8add6278833915d526692d81c4eb510f0fd0c2",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/edb6c0bcbc38343fccb33e3233c788d8e7157896"
        },
        "date": 1694537352867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23411.2626625222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011391856513034775",
            "extra": "mean: 42.71448381128305 usec\nrounds: 6486"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20464.779822600973,
            "unit": "iter/sec",
            "range": "stddev: 0.000002941282678550444",
            "extra": "mean: 48.864439718800014 usec\nrounds: 11521"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7303.435586465725,
            "unit": "iter/sec",
            "range": "stddev: 0.000017536450585935736",
            "extra": "mean: 136.9218620690156 usec\nrounds: 4031"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6866.937371845473,
            "unit": "iter/sec",
            "range": "stddev: 0.00001845481718558602",
            "extra": "mean: 145.62532696162518 usec\nrounds: 4499"
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
          "id": "fa174579292e6f215c49865b6c0e3499b3ccf73a",
          "message": "Merge branch 'release-1.24.0' into dev",
          "timestamp": "2023-09-12T09:46:53-07:00",
          "tree_id": "d59fb246b6167f63af20b4bfc7f39438b068b7d3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/fa174579292e6f215c49865b6c0e3499b3ccf73a"
        },
        "date": 1694537432809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23191.40207002149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016725778011584726",
            "extra": "mean: 43.11942835455629 usec\nrounds: 6588"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20345.3429427617,
            "unit": "iter/sec",
            "range": "stddev: 0.000002629569533421125",
            "extra": "mean: 49.15129731719621 usec\nrounds: 9579"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7178.30760430341,
            "unit": "iter/sec",
            "range": "stddev: 0.000017857883970319674",
            "extra": "mean: 139.30860240657532 usec\nrounds: 3823"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6777.725502076576,
            "unit": "iter/sec",
            "range": "stddev: 0.00001713123506408433",
            "extra": "mean: 147.54212157066814 usec\nrounds: 3718"
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
          "id": "a0d1b48838b2d55c788b5a0211d2cbd40cb0572e",
          "message": "CLI tester will be shipped with msal library",
          "timestamp": "2023-09-13T19:16:02-07:00",
          "tree_id": "09bb04226ed6e996dd0e8a99d06b462a1754b3ac",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a0d1b48838b2d55c788b5a0211d2cbd40cb0572e"
        },
        "date": 1694701784166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23295.755054492613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017942255783318742",
            "extra": "mean: 42.92627552362373 usec\nrounds: 7542"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21287.700696267664,
            "unit": "iter/sec",
            "range": "stddev: 0.000002500930211016889",
            "extra": "mean: 46.97548195871282 usec\nrounds: 12804"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7297.500316200673,
            "unit": "iter/sec",
            "range": "stddev: 0.00003719717500274125",
            "extra": "mean: 137.03322462076082 usec\nrounds: 4354"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7004.24511387137,
            "unit": "iter/sec",
            "range": "stddev: 0.000018286320962498408",
            "extra": "mean: 142.77056038766784 usec\nrounds: 4645"
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
          "id": "e3963c9b6dc06b7ad3b4f9e60395a1f6d86c7614",
          "message": "CLI tester will be shipped with msal library",
          "timestamp": "2023-09-14T16:25:43-07:00",
          "tree_id": "fa120847f226fcc9f9e94fe41c8ddd2efe01a5ad",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/e3963c9b6dc06b7ad3b4f9e60395a1f6d86c7614"
        },
        "date": 1694735395271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22978.386067337997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010726009279070154",
            "extra": "mean: 43.519157397282264 usec\nrounds: 7300"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22101.513510220735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018630475123357124",
            "extra": "mean: 45.2457701386629 usec\nrounds: 14065"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7336.103013773169,
            "unit": "iter/sec",
            "range": "stddev: 0.000017210632462344262",
            "extra": "mean: 136.3121534856517 usec\nrounds: 5121"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7122.966467975878,
            "unit": "iter/sec",
            "range": "stddev: 0.000016833519567924125",
            "extra": "mean: 140.39094589254307 usec\nrounds: 5064"
          }
        ]
      }
    ]
  }
}