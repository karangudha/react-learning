import React from 'react'
import { Link } from 'react-router-dom'

const Navbare = () => {
  return (
     <div className="nav">
        <h3>Karan</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link> 
          <Link to='/product'>Product</Link>
        </div>
      </div>  
  )
}

export default Navbare