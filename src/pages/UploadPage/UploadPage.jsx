import React, { useState } from "react";
import "./UploadPage.css";
import Button from "../../components/Button/Button";
import publishIcon from "../../assets/Icons/publish.svg";
import videoPreview from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  
  const handlePublish = (e) => {
    toast.success(`Video uploaded successfully!`);
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };
  
  return (
    <main className="upload-main">
      <h2>Upload Video</h2>
      <form className="upload-form">
        <ul className="upload-form__list">
          <li className="upload-form__item upload-form__item--preview">
            <label htmlFor="image" className="label">
              video thumbnail
            </label>
            <img
              src={videoPreview}
              alt="video-preview"
              className="upload-form__image"
              name="image"
            />
          </li>
          <div className="upload-form__inputs">
            <li className="upload-form__item">
              <label htmlFor="title" className="label">
                title your video
              </label>
              <input
                type="text"
                className="upload-form__input"
                name="title"
                placeholder="Add a title to your video"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
              />
            </li>
            <li className="upload-form__item">
              <label htmlFor="description" className="label">
                add a video description
              </label>
              <textarea
                rows="4"
                cols="50"
                className="upload-form__input"
                type="textarea"
                name="description"
                placeholder="Add a description to your video"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                required
              ></textarea>
            </li>
          </div>
          <div className="upload-form__buttons">
            <Button
              title="publish"
              type="button"
              icon={publishIcon}
              onClick={handlePublish}
            />
            <Button title="cancel" color="secondary" />
          </div>
        </ul>
      </form>
    </main>
  );
};

export default UploadPage;
