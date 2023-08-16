import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ text, href }) => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 bg-transparent">
      <h1 className="text-4xl text-red-600 cursor-pointer font-bold uppercase">
        Netflix
      </h1>
      <Link to={href} className="text-xl text-red-600 hover:text-red-800">
        {text}
      </Link>
    </div>
  )
}

export default Navbar
