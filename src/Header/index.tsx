import React from 'react'
import logo from '../images/pelisflix_logo.png'
import { TfiMenu } from 'react-icons/tfi'
import './Header.css'

export const Header = () => {
  const [modal, setModal] = React.useState<boolean>(false)

  return (
    <div className='Header'>
      <div className='Header-logo'>
        <img src={logo} alt="Pelisflix logo" />
      </div>
      <ul className={modal ? 'Header-categories --modal-active' : 'Header-categories'}>
        <li>Popular</li>
        <li>Now Playing</li>
        <li>Top Rated</li>
      </ul>
      <div 
        onClick={() => setModal(!modal)}
        className='Header-menu'>
        <TfiMenu />
      </div>
    </div>
  )
}
