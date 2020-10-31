import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundIcon from '../assets/icons/notfoundicon.png'

/**
 * Page not found (404) componenet
 */
const NotFound = () => {
  return (
    <div className="py-30 h-screen flex justify-items-center flex-col items-center">
      <img className="h-1/2" src={NotFoundIcon} alt="logo" />
      <h2 className="py-4">Document not found</h2>
      <p className="text-blue-400"><Link to="/">Return to homepage</Link></p>
    </div>
  )
}

const notFoundStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '50vh',
  alignItems: 'center'
}

export default NotFound
