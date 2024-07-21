import React from 'react'
import Video from '../Video/Video'
import './NextVideo.css'

const NextVideos = ({videos}) => {

  return (
    <div className='next-video-container'>
      <h3 className='subtitle'>next videos</h3>
      {videos.map(video => (
        <Video key={video.id} video={video}  />
    ))}</div>
  )
}

export default NextVideos