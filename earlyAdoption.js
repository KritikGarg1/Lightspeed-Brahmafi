import axios from "axios";

const chain_id = "137";
const api_key = "ckey_1bef31e1ef9342eeb5569c9a7f1";

const getA = async () => {
  const config = {
    method: "get",
    url:
      "https://api.covalenthq.com/v1/" +
      chain_id +
      "/block_v2/2017-01-01/2021-01-01/?quote-currency=USD&format=JSON&page-number=0&page-size=100&key=" +
      api_key,
    headers: {},
  };

  return await axios(config)
    .then(function (response) {
      var a = response.data["data"]["items"][0]["signed_at"];
      return a;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getB = async () => {
  const config = {
    method: "get",
    url:
      "https://api.covalenthq.com/v1/" +
      chain_id +
      "/address/0xa79E63e78Eec28741e711f89A672A4C40876Ebf3/transactions_v2/?key=" +
      api_key,
    headers: {},
  };

  return await axios(config)
    .then(function (response) {
      var n = response.data["data"]["items"].length;
      var b = response.data["data"]["items"][n - 1]["block_signed_at"];
      return b;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Score = async () => {
  const a = await getA();
  const b = await getB();

  const aTime = new Date(a).getTime();
  const bTime = new Date(b).getTime();
  const currentTime = new Date().getTime();
  console.log((bTime - aTime) / (currentTime - aTime));
  return (bTime - aTime) / (currentTime - aTime);
};
Score();
