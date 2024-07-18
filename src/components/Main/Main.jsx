import React from "react";
import { useState,useEffect } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";
import videosList from "../../Data/video-details.json";
import NextVideos from "../NextVideos/NextVideos";
import './Main.css'
import { useParams } from 'react-router-dom';
import {useGetVideos,useGetVideoById} from '../../utils//services'

const Main = () => {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(videosList[0]);
  const { id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videosData = await useGetVideos();
        setVideos(videosData);
        if (!id) {
          const firstVideoResponse = await useGetVideoById(videosData[0].id);
          console.log('first video', firstVideoResponse);
          setSelectedVideo(firstVideoResponse);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  useEffect(() => {
    const getVideoById = async (id) => {
      try {
        const videoResponse = await useGetVideoById(id);
        console.log('selected video', videoResponse);
        setSelectedVideo(videoResponse);
      } catch (error) {
        console.error("error getting video by id", error);
      }
    };

    if (id) {
      getVideoById(id);
    }
  }, [id]);

  return (
    <main className="main">
      <VideoPlayer video={selectedVideo} />
      <div className="main__content">
        <VideoDetails video={selectedVideo} />
        <NextVideos
          videos={videos.filter(video => video.id !== (selectedVideo ? selectedVideo.id : null))}
        />
      </div>
    </main>
  );
};

export default Main;
