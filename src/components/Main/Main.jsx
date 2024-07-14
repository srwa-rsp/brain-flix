import React from "react";
import { useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";
import videosList from "../../Data/video-details.json";
import NextVideos from "../NextVideos/NextVideos";
import './Main.css'

const Main = () => {
  const [selectedVideo, setSelectedVideo] = useState(videosList[0]);
  const [nextVideoList, setNextVideoList] = useState(videosList.slice(1));

  const handelSelectVideo = (id) => {
    const selected = videosList.filter((video) => video.id === id);
    setSelectedVideo(selected[0]);
    const notSelected = videosList.filter((video) => video.id !== id);
    setNextVideoList(notSelected);
  };

  return (
    <main className="main">
      <VideoPlayer video={selectedVideo} />
      <div className="main__content">
        <VideoDetails video={selectedVideo} />
        <NextVideos
          videos={nextVideoList}
          handelSelectVideo={handelSelectVideo}
        />
      </div>
    </main>
  );
};

export default Main;
