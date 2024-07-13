import React from 'react'
import Description from '../Description/Description'
import Form from '../Form/Form'
import Comments from '../Comments/Comments'

const VideoDetails = ({video}) => {
  return (
    <div>
        <Description video={video} />
        <Form />
        <Comments video={video} />
    </div>
  )
}

export default VideoDetails