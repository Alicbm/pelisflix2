import React from 'react'
import { InputSearch } from '../InputSearch'
import { movieSelected as setMoviSelected } from '../features/mainSlices'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { Trending } from '../types'
import { useNavigate } from 'react-router-dom'
import unknown from '../images/incognito.jpg'
import './Section.css'

export const Section = () => {
  const { section, nameSection } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const url_img = process.env.REACT_APP_URL_IMAGE;

  return (
    <div className='Section'>
      <div className='Section-header'>
        <h1>The place of the best movies!</h1>
        <InputSearch />
      </div>
      <div className='Section-container'>
        <div className='Section-container__title'>
          {nameSection}
        </div>
        <div className='Section-container__movies'>
          {
            section.map((movie: Trending) => (
              <img 
                onClick={() =>{
                  dispatch(setMoviSelected(movie))
                  navigate('/description')
                }}
                src={
                  movie.poster_path ?
                  `${url_img}${movie.poster_path}`
                  : unknown
                } 
                alt={movie.title} 
                key={movie.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
