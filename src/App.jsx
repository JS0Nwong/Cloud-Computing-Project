import { Routes, Route } from "react-router-dom"
import { 
  ChatContainer
} from './containers/'
import './App.css'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ChatContainer />} />
      </Routes>
    </div>
  )
}

export default App
