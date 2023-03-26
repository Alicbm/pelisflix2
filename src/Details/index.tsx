import React from 'react'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { BiCameraMovie } from 'react-icons/bi'
import { useAppSelector } from '../store/hooks'
import { TypeCategories } from '../types'
import './Details.css'

export const Details = () => {
  const { movieSelected, categories } = useAppSelector(state => state.mainReducer)
  const url_image = process.env.REACT_APP_URL_IMAGE;
  const categoriesReleted: string[] = []

  const styleBack = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${movieSelected.backdrop_path})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }

  if(categories.length > 0){
    movieSelected.genre_ids.filter((category) => {
      categories.filter((category2: TypeCategories) => {
        if(category === category2.id){
          categoriesReleted.push(category2.name)
        }
      })
    })
  }  

  return (
    <div className='Details' key={movieSelected.id}>
      <div className='Details-image'>
        <img src={`${url_image}${movieSelected.poster_path}`} alt="" />
      </div>
      <div className='Details-back' style={styleBack}>
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
          {
            categoriesReleted.map((category: string) => (
              <li key={category}>{category}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
