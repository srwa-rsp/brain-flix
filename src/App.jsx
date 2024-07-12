import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import videos from "./Data/video-details.json";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  const videosList = videos;

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [nextVideoList, setNextVideoList] = useState(videosList.slice(1));

  const handelSelectVideo = (id) => {
    const selected = videosList.filter((video) => video.id === id);
    console.log(selected[0])
    setSelectedVideo(selected[0]);
    const notSelected = videosList.filter((video) => video.id !== id);
    setNextVideoList(notSelected)
  };

  return (
    <>
      <Header />
      <VideoPlayer video={selectedVideo.video} />
      <VideoDetails video={selectedVideo} />
      <NextVideos
        videos={nextVideoList}
        handelSelectVideo={handelSelectVideo}
      />
    </>
  );
}

export default App;
