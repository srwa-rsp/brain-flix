import React from "react";
import "./Comment.css";

const Comments = ({ video }) => {
  return (
    <ul className="comment__list">
      {video.comments.map((comment) => (
        <li key={comment.id} className="comment__item">
          <div className="comment__blank-avatar"></div>
          <div className="comment__info-container">
            <div className="comment__info">
              <span>{comment.name}</span>
              <span className="comment__info--date">{comment.timestamp}</span>
            </div>
            <div className="comment__info">
              <p>{comment.comment}</p>

            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
