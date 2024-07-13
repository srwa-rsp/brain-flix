import React from 'react'
import Video from '../Video/Video'
import './NextVideo.css'

const NextVideos = ({videos, handelSelectVideo}) => {

  return (
    <div className='next-video-container'>
      <h3 className='subtitle'>next videos</h3>
      {videos.map(video => (
        <Video key={video.id} video={video} handelSelectVideo={handelSelectVideo} />
    ))}</div>
  )
}

export default NextVideos