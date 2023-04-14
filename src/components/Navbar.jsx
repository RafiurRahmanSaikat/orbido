import React from 'react'
import { ORBIDO } from '../assets'

const Navbar = () => {
  return (
    <nav className='flex  p-[26px] items-center justify-between'>
      <img src={ORBIDO} alt={ORBIDO} />
      <ul className='flex gap-16'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About Us</li>
        <li className='cursor-pointer'>Features</li>
        <li className='cursor-pointer'>Solution</li>
      </ul>

    </nav>
  )
}

export default Navbar