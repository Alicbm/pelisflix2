import React from 'react'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { BiCameraMovie } from 'react-icons/bi'
import img from '../images/img_test.jpg'

export const Details = () => {
  return (
    <div className='Details'>
      <div className='Details-image'>
        <img src={img} alt="" />
      </div>
      <div className='Details-back'>
        <h1 className='Details-back__title'>John Wick: Chapter 4</h1>
        <div className='Details-back__items'>
          <div className='Details-back__items-item'>
            <p>08/12/2003</p>
            <span><BsFillCalendarCheckFill /></span>
          </div>
          <div className='Details-back__items-item'>
            <p>Suitable for children</p>
            <span><BiCameraMovie /></span>
          </div>
          <div className='Details-back__items-item'>
            <p>Popularity</p>
            <span>678.912</span>
          </div>
        </div>
      </div>
      <div className='Details-description'>
        <p>With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.</p>
        <ul className='Details-description__category'>
          <li>Comedy</li>
          <li>Comedy</li>
          <li>Comedy</li>
        </ul>
      </div>
    </div>
  )
}
