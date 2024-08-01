import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NewsCard from "../../components/news-card/NewsCard";

import "./ListNews.scss";

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  console.log(news);

  return (
    <>
      <h1 className="news-title">Most Popular News Of Last Week</h1>
      <div className="news-container">
        {news.map((n) => (
          <NewsCard key={n.id} {...n} />
        ))}
      </div>
    </>
  );
};

export default ListNews;
