import React from 'react'
import { CarouselMovies } from '../CarouselMovies'
import { Categories } from '../Categories'
import { WelcomeView } from '../WelcomeView'

export const Home = () => {
  return (
    <div className='Home'>
      <WelcomeView />  
      <CarouselMovies title='Trendings'/>
      <CarouselMovies title='Popular'/>
      <div className='Home-nowplaying'>
        <CarouselMovies title='Now Playing'/>
      </div>
      <CarouselMovies title='Top Rated'/>
      <Categories />
    </div>
  )
}
