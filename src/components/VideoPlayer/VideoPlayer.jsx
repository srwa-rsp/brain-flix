import React from 'react'

const VideoPlayer = ({video}) => {
  return (
    <div>
        <video controls type="video/webm" src={`${video}?api_key=serwa`} style={{width: "100%"}}></video>
    </div>
  )
}

export default VideoPlayer