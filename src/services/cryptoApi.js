const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-9EYguTTRpcJPyomb7TNNY1KB';

const getCoinList = async (page, currency) => {
  const response = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&x_cg_demo_api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

const searchCoin = async ( query) => {
  const response = await fetch(
    `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

const getCoinDetails = async (coin) => {
  const response = await fetch(
    `${BASE_URL}/coins/${coin}?x_cg_demo_api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};


const getCoinChart = async (coin, currency = "usd", days = 7) => {
  const response = await fetch(
    `${BASE_URL}/coins/${coin}/market_chart/?vs_currency=${currency}&days=${days}&x_cg_demo_api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export { getCoinList , searchCoin, getCoinDetails , getCoinChart };