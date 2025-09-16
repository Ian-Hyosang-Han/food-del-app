import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>make my flavour</h1>
      <p className='status'>Admin Panel</p>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
