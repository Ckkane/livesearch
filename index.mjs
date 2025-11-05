import WebSocket from "ws";
import axios from "axios";
// import { SocksProxyAgent } from 'socks-proxy-agent';

// const agent = new SocksProxyAgent(
//   'socks://162.43.73.18:8080'
// );

let x = Date.now();

const ws = new WebSocket(
  "wss://www.pathofexile.com/api/trade/live/Keepers/bGkE7LV2uL",
  // { agent },
  {
    headers: {
      host: "www.pathofexile.com",
      origin: "https://www.pathofexile.com",
      cookie:
        "cf_clearance=9KqsSRdr.f6RsrGpFEAKpBFZ4wqj6bhbrwVEzAsMrms-1761568939-1.2.1.1-tqXuj5osA.w7o2iN3AjoD2fI5eFa8a69YmPR.WlHKR7iLXXRPyOC6uarHY8iCFYcW8yx.mUxXncJrDiyxPQSA_ro7ObY6qN9X6SNTrr.TBkg9UgU5t68_FRUfZFy_dsUWxXbEAanehypKKl.g3TSPm_7sDtvkut1sDgyBuR.y49sET1ySGQud1myRIH1KLju6rvbR48ttR_uhTExgq9o4CQOd9En1D.HpVSUjbZY3Y0; POESESSID=9649153598df5a3f1dd0df127bb77568",
      "user-agent":
        "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 Edg/141.0.0.0",
    },
  }
);

ws.on("open", function () {
  console.log("opened");
  console.log(Date.now() - x)
});

ws.on("message", function (data) {
  if (data.toString() === '{"auth":true}') {
    return;
  }

  axios.defaults.headers.get["User-Agent"] =
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 Edg/141.0.0.0";
  axios.defaults.headers.get["Cookie"] =
    "cf_clearance=9KqsSRdr.f6RsrGpFEAKpBFZ4wqj6bhbrwVEzAsMrms-1761568939-1.2.1.1-tqXuj5osA.w7o2iN3AjoD2fI5eFa8a69YmPR.WlHKR7iLXXRPyOC6uarHY8iCFYcW8yx.mUxXncJrDiyxPQSA_ro7ObY6qN9X6SNTrr.TBkg9UgU5t68_FRUfZFy_dsUWxXbEAanehypKKl.g3TSPm_7sDtvkut1sDgyBuR.y49sET1ySGQud1myRIH1KLju6rvbR48ttR_uhTExgq9o4CQOd9En1D.HpVSUjbZY3Y0; POESESSID=9649153598df5a3f1dd0df127bb77568";

  let response1 = axios.get(
    `https://www.pathofexile.com/api/trade/fetch/${
      JSON.parse(data).result
    }?query=7nZgjZVlS5`
  );

  response1.then((data1) => {
    // console.log(data1.data.result[0].listing.hideout_token);

    let token = {
      continue: true,
      token: data1.data.result[0].listing.hideout_token,
    };
      const { data } = axios.post("https://www.pathofexile.com/api/trade/whisper", JSON.stringify(token), {
      headers: {
        "Content-Type": "application/json",
        "Origin":"https://www.pathofexile.com",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Mobile Safari/537.36 Edg/141.0.0.0",
        "Cookie": "cf_clearance=9KqsSRdr.f6RsrGpFEAKpBFZ4wqj6bhbrwVEzAsMrms-1761568939-1.2.1.1-tqXuj5osA.w7o2iN3AjoD2fI5eFa8a69YmPR.WlHKR7iLXXRPyOC6uarHY8iCFYcW8yx.mUxXncJrDiyxPQSA_ro7ObY6qN9X6SNTrr.TBkg9UgU5t68_FRUfZFy_dsUWxXbEAanehypKKl.g3TSPm_7sDtvkut1sDgyBuR.y49sET1ySGQud1myRIH1KLju6rvbR48ttR_uhTExgq9o4CQOd9En1D.HpVSUjbZY3Y0; POESESSID=9649153598df5a3f1dd0df127bb77568",
        "Referer": "https://www.pathofexile.com/trade/search/Keepers/4mMXvWqQf9/live",
        "Accept":'*/*',
        "X-Requested-With": "XMLHttpRequest"
      },
    }).catch((err)=>{
      
    })
  });
});
