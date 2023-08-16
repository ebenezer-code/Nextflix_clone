import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-12 bg-gray-300">
      <div className="flex-1">
        <p className="text-sm text-gray-500">
          Questions?
          <Link to="https://google.com" className="text-gray-700">
            Contact us.
          </Link>
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex-1 flex flex-col gap-2">
          <Link to="https://google.com" className="text-sm text-gray-700">
            FAQ
          </Link>
          <Link to="https://google.com" className="text-sm text-gray-700">
            Privacy
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Link to="https://google.com" className="text-sm text-gray-700">
            Help Center
          </Link>
          <Link to="https://google.com" className="text-sm text-gray-700">
            Cookie Preferences
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Link to="https://google.com" className="text-sm text-gray-700">
            Netflix Shop
          </Link>
          <Link to="https://google.com" className="text-sm text-gray-700">
            Corporate Information
          </Link>
        </div>
        <Link to="https://google.com" className="flex-1 text-sm text-gray-700">
          Terms of Use
        </Link>
      </div>
    </div>
  )
}

export default Footer
