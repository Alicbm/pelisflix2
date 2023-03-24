import React from 'react'
import img from '../images/img_test.jpg'
import './CarouselMovies.css'

export const CarouselMovies = (prop: { title: string }) => {
  return (
    <div className='CarouselMovies'>
      <h2 className='CarouselMovies-title'>{prop.title}</h2>
      <div className='CarouselMovies-movies'>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>
  )
}
