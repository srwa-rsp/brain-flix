import React from 'react'
import './Video.css'

const Video = ({video,handelSelectVideo}) => {
  // console.log("video", video.id)
  return (
    <div className='video-item' onClick={() => handelSelectVideo(video?.id)}>
       {video.image ? <img className='video-item__image' src={video.image} alt={video.title}/> : <div className='video-item__image--placeholder'></div>}  
        <div className='video-item__info'>
            <strong>{video.title}</strong>
            <p>{video.channel}</p>
        </div>
    </div>
  )
}

export default Video