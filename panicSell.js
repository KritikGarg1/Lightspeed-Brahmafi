import axios from "axios";
var ticker = "BTC";

const percent = [];
var config = {
  method: "get",
  url:
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=" +
    ticker +
    "&tsym=USD&limit=300&api_key=851b462c94fcfd3f43a3fc8f50c8c96c8b05113559a9b08052055467aa21b3f8",
  headers: {},
};

axios(config)
  .then(function (response) {
    for (var i = 0; i < response.data["Data"]["Data"].length; i++) {
      var open = response.data["Data"]["Data"][i]["open"];
      var low = response.data["Data"]["Data"][i]["low"];
      var ts = response.data["Data"]["Data"]["time"];
      percent.push((open - low) / low);
      console.log((open - low) / low);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
