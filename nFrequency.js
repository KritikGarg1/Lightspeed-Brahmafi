import axios from "axios";

var chain_id = "137";
var api_key = "ckey_1bef31e1ef9342eeb5569c9a7f1";

var mx = 0;

function gaussian(x) {
  x = (x / mx) * 2;
  return 2.311 * Math.log(1 + x ** 2 / Math.exp(x));
}

export const nFrequency = async (address) => {
  var total = 0;
  const arr = [];
  var config = {
    method: "get",
    url:
      "https://api.covalenthq.com/v1/" +
      chain_id +
      `/address/${address}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=true&no-logs=false&page-number=0&page-size=100&key=` +
      api_key,
    headers: {},
    address,
  };

  return await axios(config)
    .then(function (response) {
      var n = response.data["data"]["items"].length;

      for (var i = 0; i < n; i++) {
        var x = response.data["data"]["items"][i]["value"];

        x = parseInt(x);
        if (x > mx) mx = x;
        arr.push(x);
      }
      for (var i = 0; i < n; i++) {
        if (arr[i] != 0) {
          // console.log(arr[i]);
          // console.log(gaussian(arr[i]));
          total += gaussian(arr[i]);
        }
      }
      return (total / n) * 50;
    })
    .catch(function (error) {
      console.log(error);
    });
};
