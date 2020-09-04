import axios from "axios";

const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=add_your_api_key_here";

export const fetchNews = async () => {
  const data = await axios.get(url);
  return data;
};

export const searchNews = async (search) => {
  console.log(search);
  const data = await axios.get(
    `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=add_your_api_key_here"`
  );
  return data;
};
