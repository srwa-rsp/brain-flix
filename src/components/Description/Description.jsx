import React from "react";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import './Description.css'
import { getCurrentDate } from "../../utils/helpers";
const Description = ({ video }) => {
  return (
    <div>
      <h1>{video.title}</h1>
      <div className="info">
        <div className="info__detail">
          <strong>{video.channel}</strong> <span>{getCurrentDate(video.timestamp)}</span>
        </div>
        <div className="info__detail">
          <div>
            <img src={viewsIcon} alt="views" />
            <span>{video.views}</span>
          </div>
          <div>
            <img src={likesIcon} alt="views" />
            <span>{video.likes}</span>
          </div>
        </div>
      </div>
      <p>{video.description}</p>
      <strong>{video.comments.length} Comments</strong>
    </div>
  );
};

export default Description;
