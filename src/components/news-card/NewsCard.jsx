import "./NewsCard.scss";

const NewsCard = ({ title, published_date, media }) => {
  const photos = media.length > 0 ? media[0]["media-metadata"] : null;

  console.log(photos);

  return (
    <div className="news-card">
      {photos && (
        <img src={photos[2].url} alt="" className="news-card__thumbnail" />
      )}

      <div className="news-card__container">
        <p
          className={`news-card__title ${
            title.length > 40 ? "news-card__title--hover-anim" : ""
          }`}
        >
          {title}
        </p>
        <p className="news-card__date">{published_date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
