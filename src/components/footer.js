import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-slate-600 flex flex-col absolute w-full bottom-0 items-center space-y-1 p-1 text-slate-400'>
        <div className=''>
          <h4>Copyright © 2022 Aditya Majhi</h4>
        </div>
        <div className='flex items-center space-x-4 md:hidden'>
          <i className="fa-brands fa-instagram cursor-pointer"></i>
          <i className="fa-brands fa-twitter cursor-pointer"></i>
          <i className="fa-brands fa-facebook cursor-pointer"></i>
          <i className="fa-brands fa-youtube cursor-pointer"></i>
        </div>
      </footer>
  )
}

export default Footer
