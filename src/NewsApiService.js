import axios from "axios";

const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=9b1c4a33ee024e438fbd870467634c81";

export const fetchNews = async () => {
  const data = await axios.get(url);
  return data;
};

export const searchNews = async (search) => {
  console.log(search);
  const data = await axios.get(
    `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=9b1c4a33ee024e438fbd870467634c81`
  );
  return data;
};
