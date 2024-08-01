import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import NewsCard from "../../components/news-card/NewsCard";

import "./Home.scss";

const Home = () => {
  const { news, getNews } = useContext(GlobalContext);

  useEffect(() => {
    getNews();
  }, []);

  const top = news.slice(0, 3);

  return (
    <>
      <h1 className="home__title">Welcome to the News Page</h1>
      <p className="home__subtitle">
        See the most popular news from the New York Times
      </p>

      <h2 className="home__section">This week most viewed</h2>
      <div className="home__top">
        {top.map((n) => (
          <NewsCard key={n.id} {...n} />
        ))}
      </div>
    </>
  );
};

export default Home;
