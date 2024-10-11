import { useState } from 'react'
import './App.css'
import Intro from './components/Intro/Intro.jsx'
import Home from './components/Home/Home.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
    console.log(darkMode);  
  };

  return (
    <div>
      <Intro toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Home darkMode={darkMode} />
    </div>
  )
}

export default App
