import React from "react";
import "./UploadPage.css";
import Button from "../../components/Button/Button";
import publishIcon from "../../assets/Icons/publish.svg";
import videoPreview from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

const UploadPage = () => {
  return (
    <main className="upload-main">
      <h2>Upload Video</h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <ul className="form__list">
          <li  className="form__item form__item--preview">
            <label htmlFor="comment" className="label">
              video thumbnail
            </label>
            <img
              src={videoPreview}
              alt="video-preview"
              className="form__image"
            />
          </li>
          <div className="form__inputs">

          <li className="form__item">
            <label htmlFor="comment" className="label">
              title your video
            </label>
            <input
              type="text"
              className="form__input"
              name="title"
              placeholder="Add a title to your video"
            />
          </li>
          <li className="form__item">
            <label htmlFor="comment" className="label">
              add a video description
            </label>
            <textarea
              rows="4"
              cols="50"
              className="form__input"
              type="textarea"
              name="description"
              placeholder="Add a description to your video"
              required
            ></textarea>
          </li>
          </div>
          <div className="form__buttons">
          <Button title="publish" icon={publishIcon} />
          <Button title="cancel" />
          

          </div>
        </ul>
      </form>
    </main>
  );
};

export default UploadPage;
