import React from 'react'
import logo from '../images/pelisflix_logo.png'
import {TfiMenu} from 'react-icons/tfi'

export const Header = () => {
  return (
    <div className='Header'>
      <div className='Header-logo'>
        <img src={logo} alt="Pelisflix logo" />
      </div>
      <ul className='Header-categories'>
        <li>Popular</li>
        <li>Now Playing</li>
        <li>Top Rated</li>
      </ul>
      <div className='Header-menu'>
        <TfiMenu />
      </div>
    </div>
  )
}
