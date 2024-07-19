import React from "react";
import { useState, useEffect } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import NextVideos from "../../components/NextVideos/NextVideos";
import Description from "../../components/Description/Description";
import Form from "../../components/Form/Form";
import Comments from "../../components/Comments/Comments";
import "./HomePage.css";
import { useParams } from "react-router-dom";
import { useGetVideos, useGetVideoById } from "../../utils/services";

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videosData = await useGetVideos();
        setVideos(videosData);
        if (!id) {
          const firstVideoResponse = await useGetVideoById(videosData[0].id);
          setSelectedVideo(firstVideoResponse);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getVideos();
  }, []);

  useEffect(() => {
    const getVideoById = async (id) => {
      try {
        const videoResponse = await useGetVideoById(id);
        setSelectedVideo(videoResponse);
      } catch (error) {
        console.error("error getting video by id", error);
      }
    };

    if (id) {
      getVideoById(id);
    }
  }, [id]);

  if (!videos || !selectedVideo) {
    return (
      <div className="loading-overlay">
        <div className="loading-overlay__spinner"></div>
      </div>
    );
  }

  return (
    <main className="main">
      <VideoPlayer video={selectedVideo} />
      <div className="main__content">
        <div>
          <Description video={selectedVideo} />
          <Form />
          <Comments video={selectedVideo} />
        </div>
        {/* <VideoDetails video={selectedVideo} /> */}
        <NextVideos
          videos={videos.filter(
            (video) => video.id !== (selectedVideo ? selectedVideo.id : null)
          )}
        />
      </div>
    </main>
  );
};

export default HomePage;
