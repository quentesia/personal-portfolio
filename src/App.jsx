import { useState } from 'react'
import './App.css'
import Intro from './components/Intro/Intro.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Intro></Intro>
      <Home></Home>
    </div>
  )
}

export default App
