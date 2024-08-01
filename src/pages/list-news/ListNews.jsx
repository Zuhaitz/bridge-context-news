import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NewsCard from "../../components/news-card/NewsCard";

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  console.log(news);

  return (
    <div>
      {news.map((n) => (
        <NewsCard key={n.id} {...n} />
      ))}
    </div>
  );
};

export default ListNews;
