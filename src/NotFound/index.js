import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './notfound.css'

const NotFound = () => {
  
  useEffect(() => {
    document.title = "Page Not Found | Eat Wind";
  }, [])

  return (
    <div className='content flex-center-center error'>
      <p className='default-text'>Page Is Not Found</p>
      <Link className='default-button' to="/">Return Home</Link>
    </div>
  )
}

export default NotFound