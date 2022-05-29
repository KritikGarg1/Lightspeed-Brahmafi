import axios from "axios";

var chain_id = "137";
var api_key = "ckey_1bef31e1ef9342eeb5569c9a7f1";

var configa = {
  method: "get",
  url:
    "https://api.covalenthq.com/v1/" +
    chain_id +
    "/address/0xa79E63e78Eec28741e711f89A672A4C40876Ebf3/transactions_v2/?key=" +
    api_key,
  headers: {},
};

axios(configa)
  .then(function (response) {
    var n = response.data["data"]["items"].length;
    var a = response.data["data"]["items"][n - 1]["block_signed_at"];
    console.log(a);
  })
  .catch(function (error) {
    console.log(error);
  });
