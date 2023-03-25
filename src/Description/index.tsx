import React from 'react'
import { Actors } from '../Actors'
import { CarouselMovies } from '../CarouselMovies'
import { Details } from '../Details'
import { Video } from '../Video'

export const Description = () => {
  return (
    <div className='Description'>
      <Details />
      <Actors />  
      <Video />
      {/* <CarouselMovies title='Similar Movies'/> */}
    </div>
  )
}
