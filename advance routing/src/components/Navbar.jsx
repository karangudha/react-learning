import React from 'react'
import { Link } from 'react-router-dom'
import Theam from '../pages/Theam'
const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-blue-900'>
        <h2 className='text-xl font-bold'>Karan</h2>
        <div className='flex gap-8'>
            <Link className='text-lg font-bold' to='/'>Home</Link>
            <Link className='text-lg font-bold' to='/about'>About</Link>
            <Link className='text-lg font-bold' to='/courses'>Courses</Link>
            <Link className='text-lg font-bold' to='/contact'>Contact</Link>
            <Theam />
        </div>
    </div>
  )
}

export default Navbar