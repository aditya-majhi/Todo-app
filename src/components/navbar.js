import React from 'react'
import image from '../Assets/logo.png'

console.log(image)

const Navbar = () => {
  return (
    <>
      <nav className='p-2 flex space-x-3 text-center bg-white justify-between'>
        <div className='flex space-x-3'>
          <img className='h-12' src={image} alt="logo" />
          <h1 className='text-black text-xl font-semibold my-auto'>Set <span className='text-[#019097]'>UR</span> Day</h1>
        </div>
        <div className='md:flex items-center pr-6 space-x-4 text-lg hidden'>
          <i className="fa-brands fa-instagram hover:text-orange-500 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:text-sky-400 cursor-pointer"></i>
          <i className="fa-brands fa-facebook hover:text-blue-600 cursor-pointer"></i>
          <i className="fa-brands fa-youtube hover:text-red-500 cursor-pointer"></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar
