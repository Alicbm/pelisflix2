import React from 'react'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { BiCameraMovie } from 'react-icons/bi'
import { useAppSelector } from '../store/hooks'
import './Details.css'

export const Details = () => {
  const { movieSelected } = useAppSelector(state => state.mainReducer)
  const url_image = process.env.REACT_APP_URL_IMAGE;

  return (
    <div className='Details'>
      <div className='Details-image'>
        <img src={`${url_image}${movieSelected.poster_path}`} alt="" />
      </div>
      <div className='Details-back'>
        <h1 className='Details-back__title'>{movieSelected.title}</h1>
        <div className='Details-back__items'>
          <div className='Details-back__items-item'>
            <span><BsFillCalendarCheckFill /></span>
            <p>{movieSelected.release_date}</p>
          </div>
          <div className='Details-back__items-item'>
            <span><BiCameraMovie /></span>
            <p>{movieSelected.adult ? 'Suitable for children' : 'Not suitable for children'}</p>
          </div>
          <div className='Details-back__items-popularity'>
            <p>Popularity</p>
            <span>{movieSelected.popularity}</span>
          </div>
        </div>
      </div>
      <div className='Details-description'>
        <p>{movieSelected.overview}</p>
        <ul className='Details-description__category'>
          <li>Comedy</li>
          <li>Comedy</li>
          <li>Comedy</li>
        </ul>
      </div>
    </div>
  )
}
