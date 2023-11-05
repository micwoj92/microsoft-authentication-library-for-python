window.BENCHMARK_DATA = {
  "lastUpdate": 1699171215076,
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
          "id": "05a80f5c16bea37932f6f3fb9fdd88dd175d4455",
          "message": "Merge branch 'tester' into dev",
          "timestamp": "2023-09-15T23:44:05-07:00",
          "tree_id": "fa120847f226fcc9f9e94fe41c8ddd2efe01a5ad",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/05a80f5c16bea37932f6f3fb9fdd88dd175d4455"
        },
        "date": 1694846854186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 26104.718187093076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013653106575685684",
            "extra": "mean: 38.307251311160634 usec\nrounds: 8961"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 24303.84841723946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019888927399097707",
            "extra": "mean: 41.14574707809111 usec\nrounds: 13775"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7640.491784361407,
            "unit": "iter/sec",
            "range": "stddev: 0.000015610211098291735",
            "extra": "mean: 130.88162754743152 usec\nrounds: 5300"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7390.288025654496,
            "unit": "iter/sec",
            "range": "stddev: 0.000015393322807445206",
            "extra": "mean: 135.31272347283627 usec\nrounds: 4976"
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
          "id": "65a288986dd2deaa0a54a18aba442fb55f2bc908",
          "message": "Support path in acquire_token_interactive",
          "timestamp": "2023-09-15T23:45:56-07:00",
          "tree_id": "8cc3a4549bf48ecbcbf3c921e09da214e7b1c5ed",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/65a288986dd2deaa0a54a18aba442fb55f2bc908"
        },
        "date": 1694847066062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20204.731576525748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020473007537254227",
            "extra": "mean: 49.49335734614854 usec\nrounds: 6330"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17793.60158848845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031191928547819192",
            "extra": "mean: 56.199976998863946 usec\nrounds: 4565"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6212.422192360401,
            "unit": "iter/sec",
            "range": "stddev: 0.00002079878265927012",
            "extra": "mean: 160.96781078879823 usec\nrounds: 3689"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5936.7350647414705,
            "unit": "iter/sec",
            "range": "stddev: 0.000020252553983718218",
            "extra": "mean: 168.44275331386166 usec\nrounds: 3470"
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
          "id": "f9ddc9d17fe0f062e28fbe0d295cc4ae755e3025",
          "message": "Fix regression on input order for interactive test",
          "timestamp": "2023-09-16T09:55:47-07:00",
          "tree_id": "18ff463863a88d39c6b4b20da73d408fb0c378d3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/f9ddc9d17fe0f062e28fbe0d295cc4ae755e3025"
        },
        "date": 1694883608593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23095.33540483931,
            "unit": "iter/sec",
            "range": "stddev: 0.000002656052054957137",
            "extra": "mean: 43.29878663682294 usec\nrounds: 7663"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19601.850164483385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037335411249772927",
            "extra": "mean: 51.01559248789184 usec\nrounds: 12034"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7317.878551063499,
            "unit": "iter/sec",
            "range": "stddev: 0.000018940554909222262",
            "extra": "mean: 136.6516256073519 usec\nrounds: 3499"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6826.003274945344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001811477118406846",
            "extra": "mean: 146.49861122546957 usec\nrounds: 3385"
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
          "id": "3a83efc0c1aca8d2f4f18f152e4f5ce2999b4894",
          "message": "Merge branch 'tester' into dev",
          "timestamp": "2023-09-16T09:57:39-07:00",
          "tree_id": "18ff463863a88d39c6b4b20da73d408fb0c378d3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/3a83efc0c1aca8d2f4f18f152e4f5ce2999b4894"
        },
        "date": 1694883939072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19934.90215550967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018323150959049567",
            "extra": "mean: 50.163276057194835 usec\nrounds: 6716"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18657.85061489612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027428728106258907",
            "extra": "mean: 53.59674169551001 usec\nrounds: 11560"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6037.087400069624,
            "unit": "iter/sec",
            "range": "stddev: 0.00002359250247237525",
            "extra": "mean: 165.64278993020164 usec\nrounds: 4151"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5945.206601028044,
            "unit": "iter/sec",
            "range": "stddev: 0.000020785123018861274",
            "extra": "mean: 168.2027332451458 usec\nrounds: 3775"
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
          "id": "48b3c8471a94f3594df11680d90737b568a5a0e1",
          "message": "Support path in acquire_token_interactive",
          "timestamp": "2023-09-16T12:33:03-07:00",
          "tree_id": "4ac9191aa6478f00ef3625755455aeaba8815ca2",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/48b3c8471a94f3594df11680d90737b568a5a0e1"
        },
        "date": 1694893007860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23008.866550472714,
            "unit": "iter/sec",
            "range": "stddev: 0.000003039020895496277",
            "extra": "mean: 43.4615063634873 usec\nrounds: 6993"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21027.20558790668,
            "unit": "iter/sec",
            "range": "stddev: 0.000002538872315924097",
            "extra": "mean: 47.557436760647235 usec\nrounds: 12595"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7349.804964364786,
            "unit": "iter/sec",
            "range": "stddev: 0.00001722201117049349",
            "extra": "mean: 136.05803213125475 usec\nrounds: 4575"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7005.356997584187,
            "unit": "iter/sec",
            "range": "stddev: 0.000016853509696444535",
            "extra": "mean: 142.74789997781016 usec\nrounds: 4489"
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
          "id": "a8476fbe665356aae60e65296337d9eff86d0d66",
          "message": "Merge remote-tracking branch 'oauth2cli/dev' into wip",
          "timestamp": "2023-09-16T13:45:07-07:00",
          "tree_id": "71943e4dafa9947f84c935f7a90b1bca6612b5ca",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a8476fbe665356aae60e65296337d9eff86d0d66"
        },
        "date": 1694897311740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20080.533562807574,
            "unit": "iter/sec",
            "range": "stddev: 0.000001502809270449874",
            "extra": "mean: 49.79947354846005 usec\nrounds: 6597"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17799.81615018949,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031370294557152774",
            "extra": "mean: 56.18035554762481 usec\nrounds: 11149"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6198.427452429146,
            "unit": "iter/sec",
            "range": "stddev: 0.000022819532127398717",
            "extra": "mean: 161.33124210530252 usec\nrounds: 3420"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5907.564411812292,
            "unit": "iter/sec",
            "range": "stddev: 0.000021170020283799602",
            "extra": "mean: 169.2744979640815 usec\nrounds: 3193"
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
          "distinct": false,
          "id": "a8476fbe665356aae60e65296337d9eff86d0d66",
          "message": "Merge remote-tracking branch 'oauth2cli/dev' into wip",
          "timestamp": "2023-09-16T13:45:07-07:00",
          "tree_id": "71943e4dafa9947f84c935f7a90b1bca6612b5ca",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a8476fbe665356aae60e65296337d9eff86d0d66"
        },
        "date": 1694897552615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23059.49618350674,
            "unit": "iter/sec",
            "range": "stddev: 0.00000895478428817053",
            "extra": "mean: 43.36608189710788 usec\nrounds: 7485"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20418.193794801435,
            "unit": "iter/sec",
            "range": "stddev: 0.000029154545360591738",
            "extra": "mean: 48.9759285297118 usec\nrounds: 12005"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7193.413519202629,
            "unit": "iter/sec",
            "range": "stddev: 0.000018403495868743666",
            "extra": "mean: 139.016059250664 usec\nrounds: 4270"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6950.253011346125,
            "unit": "iter/sec",
            "range": "stddev: 0.000017232765468396744",
            "extra": "mean: 143.8796542179865 usec\nrounds: 4552"
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
          "id": "f22cd60d4a8247d8cbc87f9e6b9954b0a1e30e5f",
          "message": "Support path in acquire_token_interactive",
          "timestamp": "2023-09-16T13:49:38-07:00",
          "tree_id": "4ac9191aa6478f00ef3625755455aeaba8815ca2",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/f22cd60d4a8247d8cbc87f9e6b9954b0a1e30e5f"
        },
        "date": 1694897920851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 14868.260004437745,
            "unit": "iter/sec",
            "range": "stddev: 0.00005304032812245034",
            "extra": "mean: 67.25736567032921 usec\nrounds: 5185"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 12727.537132217572,
            "unit": "iter/sec",
            "range": "stddev: 0.00006414608704518339",
            "extra": "mean: 78.5697963095053 usec\nrounds: 8454"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4727.155999599369,
            "unit": "iter/sec",
            "range": "stddev: 0.00011171019990247641",
            "extra": "mean: 211.54368505815145 usec\nrounds: 3353"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4111.172296084803,
            "unit": "iter/sec",
            "range": "stddev: 0.00009748800649660099",
            "extra": "mean: 243.23962314893276 usec\nrounds: 4052"
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
          "id": "a8476fbe665356aae60e65296337d9eff86d0d66",
          "message": "Merge remote-tracking branch 'oauth2cli/dev' into wip",
          "timestamp": "2023-09-16T13:45:07-07:00",
          "tree_id": "71943e4dafa9947f84c935f7a90b1bca6612b5ca",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/a8476fbe665356aae60e65296337d9eff86d0d66"
        },
        "date": 1695020122567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 26073.38793080492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015205470972560269",
            "extra": "mean: 38.353281999786844 usec\nrounds: 8961"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22955.229604535685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023769638708414932",
            "extra": "mean: 43.56305805812596 usec\nrounds: 14451"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7594.893773450088,
            "unit": "iter/sec",
            "range": "stddev: 0.000016184850733180072",
            "extra": "mean: 131.6674110039245 usec\nrounds: 5798"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7345.155864024343,
            "unit": "iter/sec",
            "range": "stddev: 0.00001532171371601224",
            "extra": "mean: 136.1441497651364 usec\nrounds: 5108"
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
          "id": "7f88f1c33583666ff90b00a43f7089f989e56c2f",
          "message": "Support path in acquire_token_interactive",
          "timestamp": "2023-09-18T00:51:01-07:00",
          "tree_id": "cf4c65608a4183107c6b61fa2259bde88b5c4a42",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/7f88f1c33583666ff90b00a43f7089f989e56c2f"
        },
        "date": 1695023635763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17556.643394781164,
            "unit": "iter/sec",
            "range": "stddev: 0.00004271557390799724",
            "extra": "mean: 56.958495853327925 usec\nrounds: 6270"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 14765.12059322142,
            "unit": "iter/sec",
            "range": "stddev: 0.00007572237268649736",
            "extra": "mean: 67.72718134514216 usec\nrounds: 7687"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5231.033359343803,
            "unit": "iter/sec",
            "range": "stddev: 0.00007944817284105775",
            "extra": "mean: 191.16681758753742 usec\nrounds: 4128"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4918.4604030416895,
            "unit": "iter/sec",
            "range": "stddev: 0.00008226754072925956",
            "extra": "mean: 203.3156553179887 usec\nrounds: 3319"
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
          "id": "87a336671fd31332900ccd56a516f07826f87833",
          "message": "Support path in acquire_token_interactive",
          "timestamp": "2023-09-19T12:47:48-07:00",
          "tree_id": "a7104d3041401db13cf352040b72aba6cdca65cd",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/87a336671fd31332900ccd56a516f07826f87833"
        },
        "date": 1695153033456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23240.85910066427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012127440108878276",
            "extra": "mean: 43.02766931586526 usec\nrounds: 7424"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20824.874795241496,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026186154142422053",
            "extra": "mean: 48.01949638748853 usec\nrounds: 12595"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7361.0544219914345,
            "unit": "iter/sec",
            "range": "stddev: 0.000017561914643935053",
            "extra": "mean: 135.850102807617 usec\nrounds: 4523"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6871.293403891194,
            "unit": "iter/sec",
            "range": "stddev: 0.00001679083957108775",
            "extra": "mean: 145.53300830287685 usec\nrounds: 3854"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@Users-MacBook-Pro.local",
            "name": "Ray Luo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "51b6ec1b82347acc6a29a0a0fbd40a662dca3853",
          "message": "WIP: Testing configuration",
          "timestamp": "2023-09-19T15:18:21-07:00",
          "tree_id": "0a9182d5be1e8699f44cd0b8e41c8aa397c15fc7",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/51b6ec1b82347acc6a29a0a0fbd40a662dca3853"
        },
        "date": 1695162221531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25575.376815038777,
            "unit": "iter/sec",
            "range": "stddev: 0.000002272574895310822",
            "extra": "mean: 39.10010817169983 usec\nrounds: 8921"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23425.67969214175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020960041805396627",
            "extra": "mean: 42.68819573826302 usec\nrounds: 14642"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7570.969833821557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000168617989065472",
            "extra": "mean: 132.08347436978698 usec\nrounds: 4760"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7390.375919554538,
            "unit": "iter/sec",
            "range": "stddev: 0.000015249877238961654",
            "extra": "mean: 135.3111141957006 usec\nrounds: 5079"
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
          "id": "2e255b73df7cc181270ddea56f6efbcbedda158d",
          "message": "Bumping version number",
          "timestamp": "2023-09-26T20:44:57-07:00",
          "tree_id": "80a670d6457b8991e2b454e56a42f4358fab990c",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/2e255b73df7cc181270ddea56f6efbcbedda158d"
        },
        "date": 1695791278318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25342.867773060883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014873772637000149",
            "extra": "mean: 39.45883350514049 usec\nrounds: 9700"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23942.53104630173,
            "unit": "iter/sec",
            "range": "stddev: 0.00000195530497482917",
            "extra": "mean: 41.76667863836662 usec\nrounds: 15481"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7544.486064374103,
            "unit": "iter/sec",
            "range": "stddev: 0.000016266752763156974",
            "extra": "mean: 132.54713329276473 usec\nrounds: 4929"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7353.064340868715,
            "unit": "iter/sec",
            "range": "stddev: 0.00001532246859151341",
            "extra": "mean: 135.99772198944976 usec\nrounds: 5489"
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
          "id": "36e0ee8aa569e9fdd99ba9738d57daf18d1e3c96",
          "message": "Use 2 flags, one per supported platform",
          "timestamp": "2023-09-26T23:28:15-07:00",
          "tree_id": "bcabbac623baa834d58bb8723f3c8190d5fce25a",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/36e0ee8aa569e9fdd99ba9738d57daf18d1e3c96"
        },
        "date": 1695796260557,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23011.319062664723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015612101209553274",
            "extra": "mean: 43.45687430072074 usec\nrounds: 6794"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20427.051769915204,
            "unit": "iter/sec",
            "range": "stddev: 0.000002690500043785897",
            "extra": "mean: 48.954690635914076 usec\nrounds: 12516"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7432.847051291068,
            "unit": "iter/sec",
            "range": "stddev: 0.000017687011623378375",
            "extra": "mean: 134.5379493348114 usec\nrounds: 3908"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6928.000049628509,
            "unit": "iter/sec",
            "range": "stddev: 0.000017326034774425076",
            "extra": "mean: 144.34180035169337 usec\nrounds: 3411"
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
          "id": "4a88b63309d5c3c825e54c7580e267d1b7931d50",
          "message": "Bumping version number",
          "timestamp": "2023-09-29T00:42:24-07:00",
          "tree_id": "6f7de6448cca4f0a7d5e6175a532dc3de2d860c3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/4a88b63309d5c3c825e54c7580e267d1b7931d50"
        },
        "date": 1695973577952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18103.13044969071,
            "unit": "iter/sec",
            "range": "stddev: 0.00003198210209532426",
            "extra": "mean: 55.23906502132535 usec\nrounds: 3768"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 14519.70629975239,
            "unit": "iter/sec",
            "range": "stddev: 0.00012319486982687847",
            "extra": "mean: 68.87191650819089 usec\nrounds: 10516"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5103.780061413234,
            "unit": "iter/sec",
            "range": "stddev: 0.00007220550246512366",
            "extra": "mean: 195.9332079296341 usec\nrounds: 4540"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4793.281251909461,
            "unit": "iter/sec",
            "range": "stddev: 0.0001201408099641134",
            "extra": "mean: 208.62535441700567 usec\nrounds: 3747"
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
          "id": "4a88b63309d5c3c825e54c7580e267d1b7931d50",
          "message": "Bumping version number",
          "timestamp": "2023-09-29T00:42:24-07:00",
          "tree_id": "6f7de6448cca4f0a7d5e6175a532dc3de2d860c3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/4a88b63309d5c3c825e54c7580e267d1b7931d50"
        },
        "date": 1695974065806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25581.530386793263,
            "unit": "iter/sec",
            "range": "stddev: 0.000001211528078867357",
            "extra": "mean: 39.090702740609316 usec\nrounds: 9268"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 24061.09927216849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018562227091127854",
            "extra": "mean: 41.56086090200798 usec\nrounds: 13681"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7565.666093695882,
            "unit": "iter/sec",
            "range": "stddev: 0.00001629891454668114",
            "extra": "mean: 132.17606852002808 usec\nrounds: 5108"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7446.582738590322,
            "unit": "iter/sec",
            "range": "stddev: 0.000015092066690963841",
            "extra": "mean: 134.28978567816267 usec\nrounds: 5921"
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
          "id": "db74e80df6f37509977be6946ffdbf0df8b2176c",
          "message": "Merge pull request #601 from AzureAD/release-1.24.1\n\nMSAL Python 1.24.1",
          "timestamp": "2023-09-29T00:55:09-07:00",
          "tree_id": "af4c69e247219dca8db6ad7ea5e9bd737edb6428",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/db74e80df6f37509977be6946ffdbf0df8b2176c"
        },
        "date": 1695974261206,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23439.867498837128,
            "unit": "iter/sec",
            "range": "stddev: 0.000001047094897069951",
            "extra": "mean: 42.66235720187458 usec\nrounds: 7262"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22374.30474230351,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018331861387653879",
            "extra": "mean: 44.694126209395975 usec\nrounds: 13850"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7379.915684208738,
            "unit": "iter/sec",
            "range": "stddev: 0.000018389872405402344",
            "extra": "mean: 135.5029031212053 usec\nrounds: 4934"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7138.504704426348,
            "unit": "iter/sec",
            "range": "stddev: 0.0000170904199711912",
            "extra": "mean: 140.0853598065059 usec\nrounds: 4961"
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
          "id": "ccfb2c82ddc047955694f5c99607f61ed9cec097",
          "message": "Merge branch 'release-1.24.1' into dev",
          "timestamp": "2023-09-29T00:55:17-07:00",
          "tree_id": "6f7de6448cca4f0a7d5e6175a532dc3de2d860c3",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/ccfb2c82ddc047955694f5c99607f61ed9cec097"
        },
        "date": 1695974349407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19648.076909174855,
            "unit": "iter/sec",
            "range": "stddev: 0.00000994040099506125",
            "extra": "mean: 50.895566249185464 usec\nrounds: 6068"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18134.485466631202,
            "unit": "iter/sec",
            "range": "stddev: 0.00000337445007923263",
            "extra": "mean: 55.143555180546706 usec\nrounds: 10964"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6222.759411326466,
            "unit": "iter/sec",
            "range": "stddev: 0.00002145600099974097",
            "extra": "mean: 160.7004118108491 usec\nrounds: 3827"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5960.996814517426,
            "unit": "iter/sec",
            "range": "stddev: 0.000020439377848862162",
            "extra": "mean: 167.75717738425854 usec\nrounds: 3670"
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
          "id": "bf014eb56a4e9b460444fc9df4fda3b28201bf88",
          "message": "Demonstrate how to use persisted token cache",
          "timestamp": "2023-10-03T08:58:50-07:00",
          "tree_id": "ebf9258ae6f2e1d8df3385e62f8e2d5ab6766e20",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/bf014eb56a4e9b460444fc9df4fda3b28201bf88"
        },
        "date": 1696349205091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25871.942899604677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011948018347891658",
            "extra": "mean: 38.65190967220634 usec\nrounds: 9853"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23890.17397238919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018522505951928642",
            "extra": "mean: 41.85821338746796 usec\nrounds: 15268"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7605.932027006878,
            "unit": "iter/sec",
            "range": "stddev: 0.000016039962586537663",
            "extra": "mean: 131.4763261687371 usec\nrounds: 4513"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7369.214358615844,
            "unit": "iter/sec",
            "range": "stddev: 0.000015050335500403441",
            "extra": "mean: 135.69967588618627 usec\nrounds: 4881"
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
          "id": "91802b52c256a649789819d065b8bb667e02e3f4",
          "message": "Demonstrate how to use persisted token cache",
          "timestamp": "2023-10-03T09:11:29-07:00",
          "tree_id": "836712f4b9cdd9fec11fc9f1878d2c00ed7fc9fe",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/91802b52c256a649789819d065b8bb667e02e3f4"
        },
        "date": 1696349711152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23130.11615657286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018397323986934103",
            "extra": "mean: 43.233678258716004 usec\nrounds: 8224"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20634.740679283237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023706441038867717",
            "extra": "mean: 48.461961094765535 usec\nrounds: 13263"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7227.641992502667,
            "unit": "iter/sec",
            "range": "stddev: 0.00001951212816561313",
            "extra": "mean: 138.35771072188052 usec\nrounds: 3768"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7016.448069472552,
            "unit": "iter/sec",
            "range": "stddev: 0.00001708607149884233",
            "extra": "mean: 142.5222548643723 usec\nrounds: 3649"
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
          "id": "df20487bebee7a523ef4c125c6c9b461ff3fa750",
          "message": "Demonstrate how to use persisted token cache",
          "timestamp": "2023-10-03T09:19:12-07:00",
          "tree_id": "209b179c323ab13681b87052bf0d8087e3402ade",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/df20487bebee7a523ef4c125c6c9b461ff3fa750"
        },
        "date": 1696350261202,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 26000.543898844535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012131186707979637",
            "extra": "mean: 38.460733894279805 usec\nrounds: 9034"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23157.860952741168,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032958182798391604",
            "extra": "mean: 43.18188117809004 usec\nrounds: 13718"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7598.1696472820495,
            "unit": "iter/sec",
            "range": "stddev: 0.00001603373481400298",
            "extra": "mean: 131.61064393418897 usec\nrounds: 4443"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7308.697711486498,
            "unit": "iter/sec",
            "range": "stddev: 0.000015480143771020294",
            "extra": "mean: 136.8232809011077 usec\nrounds: 5016"
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
          "id": "1019bfbbde509b9fbde9559cb71b3c252e91049c",
          "message": "Merge pull request #604 from tonybaloney/flag_312\n\nMark package as supporting Python 3.12",
          "timestamp": "2023-10-06T14:43:52-07:00",
          "tree_id": "22779628e262e1002ca1832fc7877f76db38a2ed",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/1019bfbbde509b9fbde9559cb71b3c252e91049c"
        },
        "date": 1696628780257,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22911.911558359297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012237344044885518",
            "extra": "mean: 43.645419870484574 usec\nrounds: 7257"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20941.245413399232,
            "unit": "iter/sec",
            "range": "stddev: 0.000002402920568785118",
            "extra": "mean: 47.75265177686859 usec\nrounds: 13141"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7383.214920603655,
            "unit": "iter/sec",
            "range": "stddev: 0.000017803174911362445",
            "extra": "mean: 135.44235278989274 usec\nrounds: 3889"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6983.7570806012245,
            "unit": "iter/sec",
            "range": "stddev: 0.000018380635045597465",
            "extra": "mean: 143.1894019878926 usec\nrounds: 3622"
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
          "id": "ad0682da3d304194dca216b56f63217e0250658e",
          "message": "PoC",
          "timestamp": "2023-10-09T09:17:49-07:00",
          "tree_id": "35eb26a31c806d7a33b8bf340a51b6a7d586e444",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/ad0682da3d304194dca216b56f63217e0250658e"
        },
        "date": 1696868439776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25764.171769115026,
            "unit": "iter/sec",
            "range": "stddev: 0.000001134574506827026",
            "extra": "mean: 38.81359001024658 usec\nrounds: 8749"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 24051.87572074241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019218590848128137",
            "extra": "mean: 41.576798899621664 usec\nrounds: 14903"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7609.642158825571,
            "unit": "iter/sec",
            "range": "stddev: 0.00001604698485792882",
            "extra": "mean: 131.41222400848537 usec\nrounds: 4790"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7353.217357384861,
            "unit": "iter/sec",
            "range": "stddev: 0.00001514843294992975",
            "extra": "mean: 135.99489194967106 usec\nrounds: 5155"
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
          "id": "9332891dda409bf0aa03d8944e11f79647233e5d",
          "message": "PoC",
          "timestamp": "2023-10-09T12:33:39-07:00",
          "tree_id": "e27a240af02976520592c1b893de3bcf6050d90d",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/9332891dda409bf0aa03d8944e11f79647233e5d"
        },
        "date": 1696880187287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19282.643677226886,
            "unit": "iter/sec",
            "range": "stddev: 0.000013214617472125542",
            "extra": "mean: 51.86010884913131 usec\nrounds: 6238"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18104.180288375013,
            "unit": "iter/sec",
            "range": "stddev: 0.000013148190930117943",
            "extra": "mean: 55.23586177729992 usec\nrounds: 11467"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6377.379619885888,
            "unit": "iter/sec",
            "range": "stddev: 0.000022531152319437365",
            "extra": "mean: 156.80421420763614 usec\nrounds: 3646"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6002.703342932994,
            "unit": "iter/sec",
            "range": "stddev: 0.000020439765033881434",
            "extra": "mean: 166.59160762580478 usec\nrounds: 3698"
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
          "id": "fc6ffefaac3cd7bc8e3b7b86303e5d7a68d02d0d",
          "message": "Explain how to use global token cache and app",
          "timestamp": "2023-10-09T23:22:35-07:00",
          "tree_id": "c9007d06725b8a38ac50e3cfc3d245224af50b22",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/fc6ffefaac3cd7bc8e3b7b86303e5d7a68d02d0d"
        },
        "date": 1696919191101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23117.8972068264,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018040069458131198",
            "extra": "mean: 43.256529391640065 usec\nrounds: 5852"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19767.157152120773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032244958418074437",
            "extra": "mean: 50.58896392153751 usec\nrounds: 11669"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7198.702561329795,
            "unit": "iter/sec",
            "range": "stddev: 0.000019443921243128992",
            "extra": "mean: 138.91392115182393 usec\nrounds: 2917"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6860.185541826224,
            "unit": "iter/sec",
            "range": "stddev: 0.00001733780331710311",
            "extra": "mean: 145.76865216006883 usec\nrounds: 3171"
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
          "id": "bd3ed48b1d774dd88a01c1441b37ee9728b66c79",
          "message": "Explain how to use global token cache and app",
          "timestamp": "2023-10-09T23:47:51-07:00",
          "tree_id": "39a73b27294c3c47194db006c682d5f8cfe718c2",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/bd3ed48b1d774dd88a01c1441b37ee9728b66c79"
        },
        "date": 1696920689578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23058.868282756725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012825161079908885",
            "extra": "mean: 43.36726277012448 usec\nrounds: 8144"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20747.288702228514,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023333131831384457",
            "extra": "mean: 48.19906901341705 usec\nrounds: 12954"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7336.522899726221,
            "unit": "iter/sec",
            "range": "stddev: 0.000019370760631346814",
            "extra": "mean: 136.30435202994013 usec\nrounds: 4261"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6905.265061189999,
            "unit": "iter/sec",
            "range": "stddev: 0.000016572084416689516",
            "extra": "mean: 144.81703325486365 usec\nrounds: 3819"
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
          "id": "2e119d98a206342a32cb0ec6fa249b349b45d3fa",
          "message": "Remove x-client-cpu",
          "timestamp": "2023-10-10T20:55:30-07:00",
          "tree_id": "8c115ef8720e88e19036c62ce5a93223a2bcca17",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/2e119d98a206342a32cb0ec6fa249b349b45d3fa"
        },
        "date": 1696996753777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23031.392267868552,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014452210019724186",
            "extra": "mean: 43.41899909347275 usec\nrounds: 6618"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19941.8514147376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028562646455624464",
            "extra": "mean: 50.14579535283125 usec\nrounds: 12954"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7372.887605194703,
            "unit": "iter/sec",
            "range": "stddev: 0.000017567540048158794",
            "extra": "mean: 135.63206894615237 usec\nrounds: 3568"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6755.842007086499,
            "unit": "iter/sec",
            "range": "stddev: 0.000019187209778914215",
            "extra": "mean: 148.02003938976907 usec\nrounds: 3605"
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
          "id": "39752ee79a3bac244600d1a450d21eba9e715f96",
          "message": "Merge pull request #605 from AzureAD/remove-x-client-cpu\n\nRemove x-client-cpu",
          "timestamp": "2023-10-11T08:52:28-07:00",
          "tree_id": "8c115ef8720e88e19036c62ce5a93223a2bcca17",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/39752ee79a3bac244600d1a450d21eba9e715f96"
        },
        "date": 1697039720139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22774.169153065715,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012149595616446621",
            "extra": "mean: 43.909395476909694 usec\nrounds: 7252"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20842.084960588556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025061815301906688",
            "extra": "mean: 47.97984471759686 usec\nrounds: 12854"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6895.396714965316,
            "unit": "iter/sec",
            "range": "stddev: 0.000020482857381877668",
            "extra": "mean: 145.02428813554204 usec\nrounds: 4307"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6869.456132531666,
            "unit": "iter/sec",
            "range": "stddev: 0.000017793920860608626",
            "extra": "mean: 145.571931854154 usec\nrounds: 4373"
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
          "id": "882b1c05b903b6c0f9f3708f6d2802923e712e3e",
          "message": "Use 2 flags, one per supported platform",
          "timestamp": "2023-10-12T12:19:02-07:00",
          "tree_id": "625bcd6a5d661f53b01592466224a9970d254697",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/882b1c05b903b6c0f9f3708f6d2802923e712e3e"
        },
        "date": 1697138552389,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25716.6853947338,
            "unit": "iter/sec",
            "range": "stddev: 0.000006554945780140619",
            "extra": "mean: 38.885260081175836 usec\nrounds: 6671"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25239.11207433508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066369694959269456",
            "extra": "mean: 39.62104518791178 usec\nrounds: 13123"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 8235.428189787504,
            "unit": "iter/sec",
            "range": "stddev: 0.00002495553423893923",
            "extra": "mean: 121.42659458072484 usec\nrounds: 5794"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7788.1067983982,
            "unit": "iter/sec",
            "range": "stddev: 0.000025707768805924304",
            "extra": "mean: 128.40090998824934 usec\nrounds: 5977"
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
          "id": "98f4579ef1394c249b64621ce4cc838b8c9dcdb1",
          "message": "Documents the requirement on parent_window_handle",
          "timestamp": "2023-10-13T10:22:17-07:00",
          "tree_id": "94c21e7e00e672929c41536ca64b581a1a636b5f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/98f4579ef1394c249b64621ce4cc838b8c9dcdb1"
        },
        "date": 1697217964298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20001.945355840213,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017675208668711403",
            "extra": "mean: 49.99513708340463 usec\nrounds: 5938"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17666.141277041308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031548946544190475",
            "extra": "mean: 56.60545697659439 usec\nrounds: 10320"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6226.146850128704,
            "unit": "iter/sec",
            "range": "stddev: 0.000021791307318281153",
            "extra": "mean: 160.61298007761067 usec\nrounds: 3313"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5766.935762612086,
            "unit": "iter/sec",
            "range": "stddev: 0.000021554912216747727",
            "extra": "mean: 173.40231297236753 usec\nrounds: 3176"
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
          "id": "c46c29ca6a7cdacfe8085f0acd6eceb0303bcb25",
          "message": "acquire_token_interactive() supports docker",
          "timestamp": "2023-10-14T00:43:28-07:00",
          "tree_id": "f8d6dbde45e1bc9328b036a60c009e788c350830",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/c46c29ca6a7cdacfe8085f0acd6eceb0303bcb25"
        },
        "date": 1697269729855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25336.018628645405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012279418581247512",
            "extra": "mean: 39.46950050271041 usec\nrounds: 8953"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23745.585929291672,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018684053094313984",
            "extra": "mean: 42.11309011189474 usec\nrounds: 13228"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7562.366564685404,
            "unit": "iter/sec",
            "range": "stddev: 0.000016235134824942605",
            "extra": "mean: 132.23373813559647 usec\nrounds: 5900"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7336.76599848256,
            "unit": "iter/sec",
            "range": "stddev: 0.00001565312401423487",
            "extra": "mean: 136.29983567784865 usec\nrounds: 4905"
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
          "id": "91546e00cd4acc41621149c95fc4bfd2bad7e5ad",
          "message": "acquire_token_interactive() supports docker",
          "timestamp": "2023-10-16T13:23:22-07:00",
          "tree_id": "c6d34056de68150db0a346e826e00021baa43ccf",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/91546e00cd4acc41621149c95fc4bfd2bad7e5ad"
        },
        "date": 1697488062950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17530.47029419887,
            "unit": "iter/sec",
            "range": "stddev: 0.000023603787518102705",
            "extra": "mean: 57.043535239948305 usec\nrounds: 5420"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 14904.271896722725,
            "unit": "iter/sec",
            "range": "stddev: 0.000018814056209937227",
            "extra": "mean: 67.09485756361492 usec\nrounds: 9506"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4839.982690407434,
            "unit": "iter/sec",
            "range": "stddev: 0.00008370439413243532",
            "extra": "mean: 206.61230916836587 usec\nrounds: 2814"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4689.206802054773,
            "unit": "iter/sec",
            "range": "stddev: 0.000043198682916075234",
            "extra": "mean: 213.2556831491859 usec\nrounds: 3074"
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
          "id": "acd2e357c55728b34d7fd30d4c2ea85aebf15503",
          "message": "Resolve warnings node12 deprecation warnings\n\nhttps://github.blog/changelog/2023-06-13-github-actions-all-actions-will-run-on-node16-instead-of-node12-by-default/",
          "timestamp": "2023-10-16T14:39:57-07:00",
          "tree_id": "f1db5b03a5f673fe199cbd733c2b03211d34f87d",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/acd2e357c55728b34d7fd30d4c2ea85aebf15503"
        },
        "date": 1697492634110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23093.518780937062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010832779694187634",
            "extra": "mean: 43.30219268383938 usec\nrounds: 7053"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21924.54579673032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019499813876512535",
            "extra": "mean: 45.6109790949071 usec\nrounds: 12772"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7262.5142612851905,
            "unit": "iter/sec",
            "range": "stddev: 0.000017559845496755385",
            "extra": "mean: 137.6933612827134 usec\nrounds: 5021"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7084.814059226526,
            "unit": "iter/sec",
            "range": "stddev: 0.000016675160427868732",
            "extra": "mean: 141.14696471076806 usec\nrounds: 5129"
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
          "id": "b07337f1bd1d7fc0fad0613ec8f7d5240d629267",
          "message": "Merge branch 'upgrade-github-actions' into dev",
          "timestamp": "2023-10-16T14:46:21-07:00",
          "tree_id": "f1db5b03a5f673fe199cbd733c2b03211d34f87d",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/b07337f1bd1d7fc0fad0613ec8f7d5240d629267"
        },
        "date": 1697493004896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19532.982434404043,
            "unit": "iter/sec",
            "range": "stddev: 0.00003477777719926019",
            "extra": "mean: 51.19545892995169 usec\nrounds: 3981"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17810.50273141172,
            "unit": "iter/sec",
            "range": "stddev: 0.00003374128270647276",
            "extra": "mean: 56.146646452395586 usec\nrounds: 13967"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5822.4576366650335,
            "unit": "iter/sec",
            "range": "stddev: 0.00007892555034517101",
            "extra": "mean: 171.74878073870818 usec\nrounds: 4278"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5387.390804291447,
            "unit": "iter/sec",
            "range": "stddev: 0.00008448639461993709",
            "extra": "mean: 185.61861136998405 usec\nrounds: 4292"
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
          "id": "dff27f91696630191606d2930bc4ce6f5fb3ec21",
          "message": "Support path in acquire_token_interactive",
          "timestamp": "2023-10-20T16:45:10-07:00",
          "tree_id": "9f21151ae4e5522ad7253f9bd2f50ee28c8bdb56",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/dff27f91696630191606d2930bc4ce6f5fb3ec21"
        },
        "date": 1697845741910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23157.228161479663,
            "unit": "iter/sec",
            "range": "stddev: 0.000001274802864109776",
            "extra": "mean: 43.18306116029146 usec\nrounds: 7652"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20402.80388937193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024309097971344527",
            "extra": "mean: 49.01287124172733 usec\nrounds: 12240"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7253.511909469211,
            "unit": "iter/sec",
            "range": "stddev: 0.000017014958484547705",
            "extra": "mean: 137.86425285860966 usec\nrounds: 3848"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6709.985224552472,
            "unit": "iter/sec",
            "range": "stddev: 0.000017910513685145798",
            "extra": "mean: 149.03162474052925 usec\nrounds: 3856"
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
          "id": "32d987bd2d5c05a7d06be98a3fb3c2e0ee2f71d5",
          "message": "Switch to ReadTheDocs configuration file v2\n\nSee also https://blog.readthedocs.com/migrate-configuration-v2/",
          "timestamp": "2023-10-23T13:15:08-07:00",
          "tree_id": "3125b0df8addb0976479de824350f2e80a5b880f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/32d987bd2d5c05a7d06be98a3fb3c2e0ee2f71d5"
        },
        "date": 1698092384066,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20597.741899195615,
            "unit": "iter/sec",
            "range": "stddev: 0.00000467691839403955",
            "extra": "mean: 48.54901109519448 usec\nrounds: 6940"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18304.093059926683,
            "unit": "iter/sec",
            "range": "stddev: 0.000004851295505391099",
            "extra": "mean: 54.63258937364721 usec\nrounds: 11161"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6412.79045223654,
            "unit": "iter/sec",
            "range": "stddev: 0.000022625511260158955",
            "extra": "mean: 155.93835592292552 usec\nrounds: 3689"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6086.934950991749,
            "unit": "iter/sec",
            "range": "stddev: 0.000020899381773045446",
            "extra": "mean: 164.28629647784706 usec\nrounds: 3265"
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
          "id": "f7a25f4de121dafaab0d6bc56ce1f4ee1f787b59",
          "message": "Merge branch 'docs-staging' into dev",
          "timestamp": "2023-10-23T13:43:40-07:00",
          "tree_id": "3125b0df8addb0976479de824350f2e80a5b880f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/f7a25f4de121dafaab0d6bc56ce1f4ee1f787b59"
        },
        "date": 1698094070131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22925.737564379568,
            "unit": "iter/sec",
            "range": "stddev: 0.000001221045007106988",
            "extra": "mean: 43.61909828165054 usec\nrounds: 6227"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21060.698275232902,
            "unit": "iter/sec",
            "range": "stddev: 0.000002824181554583246",
            "extra": "mean: 47.48180648767883 usec\nrounds: 12547"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7308.535872501181,
            "unit": "iter/sec",
            "range": "stddev: 0.000017471121254435477",
            "extra": "mean: 136.8263106927561 usec\nrounds: 4461"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6833.796032725546,
            "unit": "iter/sec",
            "range": "stddev: 0.00001722444448892584",
            "extra": "mean: 146.33155499684509 usec\nrounds: 4573"
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
          "id": "18d3473fff94da6a2fd95d6ac1e3ef436d2c1d3e",
          "message": "Merge branch 'docker-support' into dev",
          "timestamp": "2023-10-23T19:15:15-07:00",
          "tree_id": "7d158255ebf94fdef440c58f218e72bc3746a07f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/18d3473fff94da6a2fd95d6ac1e3ef436d2c1d3e"
        },
        "date": 1698113960016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21883.274527972524,
            "unit": "iter/sec",
            "range": "stddev: 0.000015555707983414295",
            "extra": "mean: 45.69700017800076 usec\nrounds: 5612"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19655.080726098713,
            "unit": "iter/sec",
            "range": "stddev: 0.000053300767854535836",
            "extra": "mean: 50.87743031613015 usec\nrounds: 12937"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6060.355342046964,
            "unit": "iter/sec",
            "range": "stddev: 0.000050029683879249466",
            "extra": "mean: 165.00682609515712 usec\nrounds: 5342"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5897.820953556079,
            "unit": "iter/sec",
            "range": "stddev: 0.000056783015751464574",
            "extra": "mean: 169.5541468408009 usec\nrounds: 4590"
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
          "id": "8bab1dd6fea2aa6beb922eeae6c5c183c685cb4e",
          "message": "Explain how to use global token cache and app",
          "timestamp": "2023-10-24T22:19:41-07:00",
          "tree_id": "b0d7ac9d5844ff52703f859cad043e80dd9bd469",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/8bab1dd6fea2aa6beb922eeae6c5c183c685cb4e"
        },
        "date": 1698211449682,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20026.852346236927,
            "unit": "iter/sec",
            "range": "stddev: 0.000002014927651239712",
            "extra": "mean: 49.93295914462072 usec\nrounds: 6780"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17951.646428707765,
            "unit": "iter/sec",
            "range": "stddev: 0.000002824769982775607",
            "extra": "mean: 55.70519695624288 usec\nrounds: 11236"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6324.874582123849,
            "unit": "iter/sec",
            "range": "stddev: 0.000020757057640324816",
            "extra": "mean: 158.1059018666275 usec\nrounds: 3536"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5974.193492302009,
            "unit": "iter/sec",
            "range": "stddev: 0.00002034101976242752",
            "extra": "mean: 167.38661064268186 usec\nrounds: 3439"
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
          "id": "fde612987ce38609cf19dc7e42d541cb635d0c9c",
          "message": "Merge branch 'demo-global-token-cache' into dev",
          "timestamp": "2023-10-24T23:36:47-07:00",
          "tree_id": "b0d7ac9d5844ff52703f859cad043e80dd9bd469",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/fde612987ce38609cf19dc7e42d541cb635d0c9c"
        },
        "date": 1698216083258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21737.017376716052,
            "unit": "iter/sec",
            "range": "stddev: 0.000005643501197625527",
            "extra": "mean: 46.00447166551772 usec\nrounds: 6935"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22343.497586548565,
            "unit": "iter/sec",
            "range": "stddev: 0.000007319254122609592",
            "extra": "mean: 44.755750353159975 usec\nrounds: 14164"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7826.030540630991,
            "unit": "iter/sec",
            "range": "stddev: 0.000026176335451853132",
            "extra": "mean: 127.77869889572048 usec\nrounds: 4437"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7206.908145957771,
            "unit": "iter/sec",
            "range": "stddev: 0.000027619557895688723",
            "extra": "mean: 138.75575763524648 usec\nrounds: 5108"
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
          "id": "b0dbf3c3a8b6defddf7d3c2f8d9627f372e25bca",
          "message": "Expose token_source for observability",
          "timestamp": "2023-10-25T01:38:19-07:00",
          "tree_id": "0e1d8ad8bbd98076f51189a73c3f7200768628d2",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/b0dbf3c3a8b6defddf7d3c2f8d9627f372e25bca"
        },
        "date": 1698223376225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20620.70402365023,
            "unit": "iter/sec",
            "range": "stddev: 0.00000561426457063838",
            "extra": "mean: 48.49494948635523 usec\nrounds: 7008"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18691.71628525022,
            "unit": "iter/sec",
            "range": "stddev: 0.000005516057853759052",
            "extra": "mean: 53.49963506503187 usec\nrounds: 10010"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6423.874309820866,
            "unit": "iter/sec",
            "range": "stddev: 0.00002452981693685376",
            "extra": "mean: 155.6692973383979 usec\nrounds: 3945"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6142.675067418762,
            "unit": "iter/sec",
            "range": "stddev: 0.000023937658232498785",
            "extra": "mean: 162.79552296426675 usec\nrounds: 4507"
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
          "id": "b836f04b2af41947c15be4da799847d83e0972a2",
          "message": "Expose token_source for observability",
          "timestamp": "2023-10-26T11:03:39-07:00",
          "tree_id": "e96b1af37c4d39c445c97dc9c751f954704c0340",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/b836f04b2af41947c15be4da799847d83e0972a2"
        },
        "date": 1698343677510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17374.746187019828,
            "unit": "iter/sec",
            "range": "stddev: 0.00002737225555661585",
            "extra": "mean: 57.55479759163742 usec\nrounds: 3488"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 13557.006668889557,
            "unit": "iter/sec",
            "range": "stddev: 0.00010510678534285633",
            "extra": "mean: 73.76259556578866 usec\nrounds: 4285"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4806.370462357422,
            "unit": "iter/sec",
            "range": "stddev: 0.00009038765492194548",
            "extra": "mean: 208.05720404446754 usec\nrounds: 3857"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4334.540092956152,
            "unit": "iter/sec",
            "range": "stddev: 0.0001472034118488653",
            "extra": "mean: 230.70498335568539 usec\nrounds: 3725"
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
          "id": "0ca81d82bc0d96004fa3a673bfb400bbfee93388",
          "message": "Expose token_source for observability",
          "timestamp": "2023-10-26T16:45:20-07:00",
          "tree_id": "f7670b3905ddd27679ea84e958a11350ea97b42f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/0ca81d82bc0d96004fa3a673bfb400bbfee93388"
        },
        "date": 1698364164208,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19833.53596570393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027142374074187054",
            "extra": "mean: 50.41965294182519 usec\nrounds: 7189"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17825.631239638602,
            "unit": "iter/sec",
            "range": "stddev: 0.000003922539303875195",
            "extra": "mean: 56.09899512429688 usec\nrounds: 10870"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6186.622319163888,
            "unit": "iter/sec",
            "range": "stddev: 0.000020461077978281123",
            "extra": "mean: 161.63908970204412 usec\nrounds: 3088"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5833.912766298293,
            "unit": "iter/sec",
            "range": "stddev: 0.00002025421126544038",
            "extra": "mean: 171.4115448857689 usec\nrounds: 3197"
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
          "id": "b3b2195ff66e14f15f7b50fcd7e2e01d87b202f2",
          "message": "Merge branch 'token-source' into dev",
          "timestamp": "2023-10-26T16:54:33-07:00",
          "tree_id": "f7670b3905ddd27679ea84e958a11350ea97b42f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/b3b2195ff66e14f15f7b50fcd7e2e01d87b202f2"
        },
        "date": 1698364714573,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17821.08612299581,
            "unit": "iter/sec",
            "range": "stddev: 0.00002633776181705525",
            "extra": "mean: 56.11330269649665 usec\nrounds: 5266"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 15845.470609034573,
            "unit": "iter/sec",
            "range": "stddev: 0.00004091344252000799",
            "extra": "mean: 63.109517203599644 usec\nrounds: 10870"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5104.914504232834,
            "unit": "iter/sec",
            "range": "stddev: 0.00006612710156396365",
            "extra": "mean: 195.8896665499161 usec\nrounds: 2858"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4965.329523625684,
            "unit": "iter/sec",
            "range": "stddev: 0.00006030169578751481",
            "extra": "mean: 201.3965025366131 usec\nrounds: 4139"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeferrie@microsoft.com",
            "name": "jennyf19",
            "username": "jennyf19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "395cd7ed74e377f8f560b0a0e8307329d1067037",
          "message": "add triage labels to bug report",
          "timestamp": "2023-10-26T21:01:48-07:00",
          "tree_id": "174b096cea180979b5e339056756e83e02fbc098",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/395cd7ed74e377f8f560b0a0e8307329d1067037"
        },
        "date": 1698379472176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25601.739440543915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012207593842946991",
            "extra": "mean: 39.059846004696105 usec\nrounds: 9286"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23549.488979991937,
            "unit": "iter/sec",
            "range": "stddev: 0.000002094231749619511",
            "extra": "mean: 42.46376644731517 usec\nrounds: 13072"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7565.607952108839,
            "unit": "iter/sec",
            "range": "stddev: 0.000015625038935626154",
            "extra": "mean: 132.17708429119168 usec\nrounds: 5220"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7239.856309668414,
            "unit": "iter/sec",
            "range": "stddev: 0.00001523031115431208",
            "extra": "mean: 138.12428827690368 usec\nrounds: 4794"
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
          "id": "754627b044a7193d0a947a3a7db061a7a8ff54bc",
          "message": "Use token source during e2e tests",
          "timestamp": "2023-10-27T01:37:59-07:00",
          "tree_id": "24a2e9bb027065babeaac63f20ca84aafcaf9042",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/754627b044a7193d0a947a3a7db061a7a8ff54bc"
        },
        "date": 1698396029029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22837.4451155334,
            "unit": "iter/sec",
            "range": "stddev: 0.000001394381452490995",
            "extra": "mean: 43.78773522787046 usec\nrounds: 7108"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21121.026308766854,
            "unit": "iter/sec",
            "range": "stddev: 0.000002396453877729455",
            "extra": "mean: 47.34618410019795 usec\nrounds: 12151"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7328.235555335424,
            "unit": "iter/sec",
            "range": "stddev: 0.000017425197855450878",
            "extra": "mean: 136.45849569777215 usec\nrounds: 4765"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6965.633333275917,
            "unit": "iter/sec",
            "range": "stddev: 0.00001760291131359938",
            "extra": "mean: 143.5619637374313 usec\nrounds: 4302"
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
          "id": "3d3d02f5a86f668a4662a9cbd7125d70e759a8da",
          "message": "Deprecate allow_broker, use enable_broker_on_windows",
          "timestamp": "2023-10-27T14:46:43-07:00",
          "tree_id": "ae21432827bc51c0525ca2d9de7ea739e7266a13",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/3d3d02f5a86f668a4662a9cbd7125d70e759a8da"
        },
        "date": 1698443390821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19713.950141641857,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035287950413917706",
            "extra": "mean: 50.72550112053372 usec\nrounds: 6246"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17753.425030287526,
            "unit": "iter/sec",
            "range": "stddev: 0.000003926527893831183",
            "extra": "mean: 56.32715931117458 usec\nrounds: 11148"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6185.130478691403,
            "unit": "iter/sec",
            "range": "stddev: 0.000022201273488262947",
            "extra": "mean: 161.67807671077156 usec\nrounds: 3624"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5904.875695580023,
            "unit": "iter/sec",
            "range": "stddev: 0.00002124776593487664",
            "extra": "mean: 169.35157513112935 usec\nrounds: 3241"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeferrie@microsoft.com",
            "name": "jennyf19",
            "username": "jennyf19"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e90f6cf2f514179f4f4553dc23bc4e40a3d540ce",
          "message": "add triage labels to bug report (#612)",
          "timestamp": "2023-10-30T15:29:03Z",
          "tree_id": "174b096cea180979b5e339056756e83e02fbc098",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/e90f6cf2f514179f4f4553dc23bc4e40a3d540ce"
        },
        "date": 1698679908986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25454.465496376375,
            "unit": "iter/sec",
            "range": "stddev: 0.000001193347854712295",
            "extra": "mean: 39.28583769092921 usec\nrounds: 8644"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23753.75009967849,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020212629293775972",
            "extra": "mean: 42.098615831339195 usec\nrounds: 13606"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7624.364676475635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001574615476805901",
            "extra": "mean: 131.15846925389334 usec\nrounds: 5334"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7371.280453188037,
            "unit": "iter/sec",
            "range": "stddev: 0.000015150291000417592",
            "extra": "mean: 135.66164065396612 usec\nrounds: 4895"
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
          "id": "bd24f2334eff6af641af1beb935511cd2c89b0ea",
          "message": "ROPC also bypass broker, for now",
          "timestamp": "2023-11-01T23:36:24-07:00",
          "tree_id": "eb8021b4284d68f30da9697ab751bac8c40263e1",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/bd24f2334eff6af641af1beb935511cd2c89b0ea"
        },
        "date": 1698907173802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20294.953947350336,
            "unit": "iter/sec",
            "range": "stddev: 0.00000436364136285364",
            "extra": "mean: 49.27333181411618 usec\nrounds: 6579"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 17902.440388565454,
            "unit": "iter/sec",
            "range": "stddev: 0.000004106357669527461",
            "extra": "mean: 55.85830637027086 usec\nrounds: 10941"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6226.84006532534,
            "unit": "iter/sec",
            "range": "stddev: 0.000021279544250332197",
            "extra": "mean: 160.5950995222409 usec\nrounds: 3567"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5870.579667610594,
            "unit": "iter/sec",
            "range": "stddev: 0.00002115949775576066",
            "extra": "mean: 170.34092996254552 usec\nrounds: 3798"
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
          "id": "88c4bf8e7dffded5b39afd801dc703ee75edf098",
          "message": "Merge branch 'broker-new-param' into dev",
          "timestamp": "2023-11-02T09:40:01-07:00",
          "tree_id": "59e6403325eb4be74533807e995994fb83612dbb",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/88c4bf8e7dffded5b39afd801dc703ee75edf098"
        },
        "date": 1698943356038,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23006.170538927465,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015555824252072906",
            "extra": "mean: 43.46659946330292 usec\nrounds: 5967"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20951.18750257013,
            "unit": "iter/sec",
            "range": "stddev: 0.000002594181467038327",
            "extra": "mean: 47.72999143257764 usec\nrounds: 13423"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7276.4734103417895,
            "unit": "iter/sec",
            "range": "stddev: 0.000017535057934823972",
            "extra": "mean: 137.42921104868412 usec\nrounds: 4634"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6938.888059794538,
            "unit": "iter/sec",
            "range": "stddev: 0.000017150784570608646",
            "extra": "mean: 144.11530945342994 usec\nrounds: 4062"
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
          "id": "775d11082a5694b8e4dcafd11ea2b46b72b74afe",
          "message": "ROPC also bypass broker, for now",
          "timestamp": "2023-11-02T09:42:24-07:00",
          "tree_id": "5e030f23481cb12316e92fd6a271685e267b931f",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/775d11082a5694b8e4dcafd11ea2b46b72b74afe"
        },
        "date": 1698945195045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22978.47152644611,
            "unit": "iter/sec",
            "range": "stddev: 0.000001333859030158097",
            "extra": "mean: 43.518995545421376 usec\nrounds: 6959"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20636.44875842547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025021267828426353",
            "extra": "mean: 48.4579498975917 usec\nrounds: 12674"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7212.654038480878,
            "unit": "iter/sec",
            "range": "stddev: 0.000017857553890134966",
            "extra": "mean: 138.6452191751899 usec\nrounds: 4485"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6877.730630028022,
            "unit": "iter/sec",
            "range": "stddev: 0.00001928317791051866",
            "extra": "mean: 145.39679638426398 usec\nrounds: 4204"
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
          "id": "e828fcd4013bca8103e5df28818bb0f878109263",
          "message": "ROPC also bypass broker, for now",
          "timestamp": "2023-11-02T11:50:28-07:00",
          "tree_id": "c41062fb715b72334e26b794a47fc6b357da627c",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/e828fcd4013bca8103e5df28818bb0f878109263"
        },
        "date": 1698951269037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 15975.38049356626,
            "unit": "iter/sec",
            "range": "stddev: 0.00008487062119549049",
            "extra": "mean: 62.59631815359443 usec\nrounds: 4831"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 13879.329404108415,
            "unit": "iter/sec",
            "range": "stddev: 0.00002270258380805169",
            "extra": "mean: 72.04959050139631 usec\nrounds: 8696"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4758.373801908412,
            "unit": "iter/sec",
            "range": "stddev: 0.00006435766543864191",
            "extra": "mean: 210.15583088468924 usec\nrounds: 3335"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 4658.919849903881,
            "unit": "iter/sec",
            "range": "stddev: 0.00003627553868209202",
            "extra": "mean: 214.64202695408704 usec\nrounds: 2968"
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
          "id": "08c7e63dcc3795ee797c9557a604b12daf2f45b4",
          "message": "Unit tests",
          "timestamp": "2023-11-02T22:45:22-07:00",
          "tree_id": "a38955e0ff71725f4cba43a2a2cdd5ddca80fecd",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/08c7e63dcc3795ee797c9557a604b12daf2f45b4"
        },
        "date": 1698990497412,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 32256.23565620637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022133593069875466",
            "extra": "mean: 31.00175763403414 usec\nrounds: 7270"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 28970.91736428039,
            "unit": "iter/sec",
            "range": "stddev: 0.000003318916118411451",
            "extra": "mean: 34.51737435256182 usec\nrounds: 11970"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 9116.388253467612,
            "unit": "iter/sec",
            "range": "stddev: 0.000014867019431062894",
            "extra": "mean: 109.69256378693927 usec\nrounds: 4711"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 8638.038622588498,
            "unit": "iter/sec",
            "range": "stddev: 0.000013906174545661203",
            "extra": "mean: 115.76702115975691 usec\nrounds: 3828"
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
          "id": "6973a99e6bac932845c57eaee84bdbed366e5b40",
          "message": "Only invoke broker for selected flows (grants)\n\nROPC also bypass broker, for now\n\nUnit tests",
          "timestamp": "2023-11-03T13:25:02-07:00",
          "tree_id": "a38955e0ff71725f4cba43a2a2cdd5ddca80fecd",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/6973a99e6bac932845c57eaee84bdbed366e5b40"
        },
        "date": 1699043586797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 31497.992618732165,
            "unit": "iter/sec",
            "range": "stddev: 0.000002070554212390569",
            "extra": "mean: 31.748054934944967 usec\nrounds: 7609"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 29772.39692351127,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029356343693914744",
            "extra": "mean: 33.58815894363882 usec\nrounds: 12042"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 9136.5398626773,
            "unit": "iter/sec",
            "range": "stddev: 0.000014215250127880875",
            "extra": "mean: 109.45062518525123 usec\nrounds: 6067"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 9041.540425680756,
            "unit": "iter/sec",
            "range": "stddev: 0.000013515070973919352",
            "extra": "mean: 110.6006225620241 usec\nrounds: 4512"
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
          "id": "9c124b5ef4ab51296960da37f02b05934991f087",
          "message": "Merge pull request #569 from AzureAD/device-flow-and-msal-runtime\n\nacquire_token_silent() shall not invoke broker if the account was not established by broker",
          "timestamp": "2023-11-03T13:49:40-07:00",
          "tree_id": "a38955e0ff71725f4cba43a2a2cdd5ddca80fecd",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/9c124b5ef4ab51296960da37f02b05934991f087"
        },
        "date": 1699044739577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22889.269321293265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017382757257028742",
            "extra": "mean: 43.688594247511745 usec\nrounds: 5841"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 19640.02988859419,
            "unit": "iter/sec",
            "range": "stddev: 0.000002973214971025363",
            "extra": "mean: 50.91641945925669 usec\nrounds: 11696"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7342.486091117227,
            "unit": "iter/sec",
            "range": "stddev: 0.000017550486862453496",
            "extra": "mean: 136.19365261171924 usec\nrounds: 3676"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6888.139684297021,
            "unit": "iter/sec",
            "range": "stddev: 0.00001758400619312282",
            "extra": "mean: 145.17707912917513 usec\nrounds: 3905"
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
          "id": "bcff60f44dcfa29adb87c0696be43919c43a3b8d",
          "message": "MSAL Python 1.25",
          "timestamp": "2023-11-03T16:47:00-07:00",
          "tree_id": "d147c7d9c5901b06f609fe0dc2c99bd218e7fd32",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/bcff60f44dcfa29adb87c0696be43919c43a3b8d"
        },
        "date": 1699055755527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 31458.575797251367,
            "unit": "iter/sec",
            "range": "stddev: 0.000001891895546541842",
            "extra": "mean: 31.787834466663078 usec\nrounds: 8089"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 28052.677570930075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033385594659155866",
            "extra": "mean: 35.64722110648938 usec\nrounds: 15635"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 9296.267773462207,
            "unit": "iter/sec",
            "range": "stddev: 0.000014999675178113712",
            "extra": "mean: 107.570051161249 usec\nrounds: 5727"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 8766.848781898389,
            "unit": "iter/sec",
            "range": "stddev: 0.000014706707314634427",
            "extra": "mean: 114.06607150163006 usec\nrounds: 3916"
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
          "id": "bcff60f44dcfa29adb87c0696be43919c43a3b8d",
          "message": "MSAL Python 1.25",
          "timestamp": "2023-11-03T16:47:00-07:00",
          "tree_id": "d147c7d9c5901b06f609fe0dc2c99bd218e7fd32",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/bcff60f44dcfa29adb87c0696be43919c43a3b8d"
        },
        "date": 1699056873819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 22754.955141967675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016031045354183057",
            "extra": "mean: 43.94647204360639 usec\nrounds: 7118"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 20205.47791249689,
            "unit": "iter/sec",
            "range": "stddev: 0.000002663155993294599",
            "extra": "mean: 49.4915291947393 usec\nrounds: 12485"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7363.996129010232,
            "unit": "iter/sec",
            "range": "stddev: 0.000017728659626036",
            "extra": "mean: 135.79583455517192 usec\nrounds: 4092"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6919.773861520553,
            "unit": "iter/sec",
            "range": "stddev: 0.00001733173723296692",
            "extra": "mean: 144.51339306921508 usec\nrounds: 3722"
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
          "id": "642c19c3ed04e14510dd0e0e7fbf33821f1f486c",
          "message": "Github Action seems to have 4 types of test runners",
          "timestamp": "2023-11-05T00:57:10-07:00",
          "tree_id": "49fd54701e46092a007caf3b669311038378c712",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/642c19c3ed04e14510dd0e0e7fbf33821f1f486c"
        },
        "date": 1699171213868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23162.67367984677,
            "unit": "iter/sec",
            "range": "stddev: 0.00002747327333797698",
            "extra": "mean: 43.17290887148636 usec\nrounds: 5794"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 21135.03092878744,
            "unit": "iter/sec",
            "range": "stddev: 0.000007298053189126967",
            "extra": "mean: 47.31481128981589 usec\nrounds: 12755"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6879.556441643478,
            "unit": "iter/sec",
            "range": "stddev: 0.000026130747832793133",
            "extra": "mean: 145.3582085535019 usec\nrounds: 3975"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6415.897256793143,
            "unit": "iter/sec",
            "range": "stddev: 0.000023823941721553876",
            "extra": "mean: 155.86284505120483 usec\nrounds: 5163"
          }
        ]
      }
    ]
  }
}