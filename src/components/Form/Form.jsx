import React from "react";
import avatar from '../../assets/Images/Mohan-muruge.jpg'
import './Form.css'
import Button from "../Button/Button";

const Form = () => {
  return (
    <form action="" className="form">
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
            required
          ></textarea>
        </li>
          <Button title="comment" />
      </ul>
    </form>
  );
};

export default Form;
