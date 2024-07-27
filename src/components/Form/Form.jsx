import React, { useState } from "react";
import avatar from '../../assets/Images/Mohan-muruge.jpg'
import './Form.css'
import Button from "../Button/Button";
import addCommentIcon from '../../assets/Icons/add_comment.svg'

const Form = ({onPostComment }) => {
  const [comment, setComment] = useState({name: "Serwa", comment:""})

  const handleCommentChange = (e) => {
    setComment((prevComment) => ({
      ...prevComment,
      comment: e.target.value,
    }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    onPostComment(comment);
    setComment(prev => ({...prev, comment:""}))
  }

  return (
    <form className="form" onSubmit={ handleSubmit } >
      <img
        src={avatar}
        alt="Avatar"
        className="form__avatar"
      />
      <ul className="form__list">
        <li className="form__item">
          <label htmlFor="comment" className="label">
            join the conversation
          </label>
          <textarea
            rows="4"
            cols="50"
            className="form__input"
            type="textarea"
            id="comment"
            name="comment"
            placeholder="Add a new comment"
            value={comment.comment}
            onChange={handleCommentChange}
            required
          ></textarea>
        </li>
          <Button title="comment" icon={addCommentIcon}/>
      </ul>
    </form>
  );
};

export default Form;
