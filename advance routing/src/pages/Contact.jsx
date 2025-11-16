import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>    
      <div className='mt-8 px-8 flex justify-center items-center gap-10'>
          <Link to='/contact/men'>Men</Link>
          <Link to='/contact/women'>Women</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Contact