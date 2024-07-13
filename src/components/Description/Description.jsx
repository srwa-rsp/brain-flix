import React from 'react'
import viewsIcon from '../../assets/Icons/views.svg'
import likesIcon from '../../assets/Icons/likes.svg'

const Description = ({video}) => {
  return (
    <div>
      <h2>
        {video.title}
      </h2>
      <div>
        <div><strong>{video.channel}</strong> <span>{video.timestamp}</span></div>
        <div><div><span>{video.views}</span><img src={viewsIcon} alt="views" /></div><div><span>{video.likes}</span><img src={likesIcon} alt="views" /></div></div>
      </div>
      <p>
      {video.description}
      </p>
      <strong>{video.comments.length} Comments</strong>
    </div>
  )
}

export default Description