import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchNews, searchNews } from "./NewsApiService";
import { NewsComponent } from "./components/NewsComponent";

function App() {
  const [articles, setArticles] = useState([]);

  const fecthData = async () => {
    const data = await fetchNews();
    console.log(data);
    setArticles(data.data.articles);
  };

  useEffect(() => {
    fecthData();
  }, articles);

  const searchTopic = async (e) => {
    if (e.target.value) {
      const data = await searchNews(e.target.value);
      console.log(data);
      setArticles(data.data.articles);
    } else {
      fecthData();
    }
  };

  return (
    <div className="App">
      <h1>Top Headlines</h1>
      <div
        className="form-inline"
        style={{ fontSize: "18px" }}
        onChange={(e) => searchTopic(e)}
      >
        <input type="text" className="input" placeholder="Enter to search" />
        <NewsComponent articles={articles} />
      </div>
    </div>
  );
}

export default App;
