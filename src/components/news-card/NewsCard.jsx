import React from "react";

const NewsCard = ({ title, media }) => {
  if (media.length > 0) {
    const photos = media[0]["media-metadata"];
  }
  console.log(photos);

  return (
    <div>
      <p>{title}</p>
      {/* <img src={} alt="" /> */}
    </div>
  );
};

export default NewsCard;
