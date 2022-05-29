import axios from "axios";
var ticker = "BTC";
var total = 0;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

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
      var percent = (open - low) / low;
      if (percent >= 0.1) {
        var x = getRandomArbitrary(100, 1000);
        total += x * percent;
      }
    }
    console.log(total / 1000);
  })
  .catch(function (error) {
    console.log(error);
  });
