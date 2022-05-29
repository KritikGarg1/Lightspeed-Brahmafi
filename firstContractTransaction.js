import axios from "axios";

var chain_id = "137";
var api_key = "ckey_1bef31e1ef9342eeb5569c9a7f1";

var configb = {
  method: "get",
  url:
    "https://api.covalenthq.com/v1/" +
    chain_id +
    "/block_v2/2015-01-01/2022-05-28/?quote-currency=USD&format=JSON&page-number=1&page-size=1&key=" +
    api_key,
  headers: {},
};

axios(configb)
  .then(function (response) {
    var a = response.data["data"]["items"][0]["signed_at"];
    console.log(a);
  })
  .catch(function (error) {
    console.log(error);
  });
