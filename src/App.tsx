import './App.css'
import { RonFlixApp } from './components/RonFlixApp'
import {fetchEpisode} from './api/api'

function App() {

      fetchEpisode(1)
  
  return (
    <RonFlixApp />
  )
}

export default App
