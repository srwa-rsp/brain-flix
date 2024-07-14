import React from "react";
import "./VideoPlayer.css";
import playIcon from "../../assets/Icons/play.svg";
import volumeIcon from "../../assets/Icons/volume_up.svg";
import fullscreenIcon from "../../assets/Icons/fullscreen.svg";

const VideoPlayer = ({ video }) => {
  return (
    <figure className="video-container">
      <video poster={video.image} className="video-container__player"></video>
      <div className="controls">
        <button type="button" className="controls__play controls__button">
          <img src={playIcon} alt="play" />
        </button>
        <div className="controls__progress-container">
          <progress value="0" min="0" className="controls__progress">
            <div className="controls__scrubber"></div>
          </progress>
          <span className="controls__time">22:14 / 10:11</span>
        </div>
        <div className="controls__buttons">
          <button type="button" className="controls__button controls__button--volume">
            <img src={volumeIcon} alt="volume" />
          </button>
          <button type="button" className="controls__button controls__button--fullscreen">
            <img src={fullscreenIcon} alt="fullscreen" />
          </button>
        </div>
      </div>
    </figure>
  );
};

export default VideoPlayer;
