import React from "react";
import "./Comments.css";
import { getTimeStamp } from "../../utils/helpers";


const Comments = ({ video }) => {
  return (
    <ul className="comment__list">
      {video.comments.sort((a,b) => b.timestamp - a.timestamp).map((comment) => (
        <li key={comment.id} className="comment__item">
          <div className="comment__blank-avatar"></div>
          <div className="comment__info-container">
            <div className="comment__infos">
              <span>{comment.name}</span>
              <span className="comment__infos--date">{getTimeStamp(comment.timestamp)}</span>
            </div>
            <div className="comment__infos">
              <p>{comment.comment}</p>

            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
