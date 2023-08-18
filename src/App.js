
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

function Home() {
  const [toggleColor, setToggleColor] = useState(true)

  const handleToggle = () => setToggleColor(!toggleColor)

  useEffect(() => {
    AOS.init()
  }, [toggleColor])

  return (
    <div
      className={`${
        toggleColor ? 'bg-black text-white' : 'bg-white text-black'
      } min-h-[100vh] flex items-center justify-center space-x-6`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h1 className="italic text-[15px]">I Love React</h1>
      <p className="text-[pink] text-[10px]">I Must always code</p>
      <button onClick={handleToggle} className="text-[15px] border p-[10px]">
        {' '}
        {toggleColor ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}
