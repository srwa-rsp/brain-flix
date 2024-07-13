import React from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({video}) => {
  return (
    <div className='video-container'>
        <video  controls poster={video.image} className='video-container__player'></video>
    </div>
  )
}

export default VideoPlayer