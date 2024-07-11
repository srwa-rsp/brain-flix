
import './App.css'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import VideoDetails from './components/VideoDetails'
import videos from './Data/video-details.json'

function App() {
  const videosList = videos
  return (
    <>
    <Header />
    <VideoPlayer video={videosList[0].video} />
    <VideoDetails />
    </>
  )
}

export default App
