import React from 'react'
import './Video.css'
import { Link } from 'react-router-dom'

const Video = ({video}) => {
  return (
    <Link to={`/videos/${video.id}`} className='video-item' >
       {video.image ? <img className='video-item__image' src={video.image} alt={video.title}/> : <div className='video-item__image--placeholder'></div>}  
        <div className='video-item__info'>
            <strong>{video.title}</strong>
            <span>{video.channel}</span>
        </div>
    </Link>
  )
}

export default Video