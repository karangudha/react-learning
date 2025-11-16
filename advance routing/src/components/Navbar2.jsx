import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const nevigate = useNavigate();
  return (
    <div className='py-2 px-5 bg-cyan-800'>
        <button 
          onClick={() => nevigate('/')}
          className='bg-blue-500 font font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
            Home
        </button>
        <button 
          onClick={() => {
            nevigate(-1);
          }} 
          className='bg-blue-500 font font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
           Back
        </button>
    </div>
  )
}

export default Navbar2