import React from 'react'
import img from '../images/actor.jpg'

export const Actors = () => {
  return (
    <div className='Actors'>
      <h2>Top Billed Cast</h2>
      <div className='Actors-items'>
        <img src={img} alt="" />
        <h3>Keanu Reeves</h3>
        <p>John Wick</p>
      </div>
      <div className='Actors-items'>
        <img src={img} alt="" />
        <h3>Keanu Reeves</h3>
        <p>John Wick</p>
      </div>
      <div className='Actors-items'>
        <img src={img} alt="" />
        <h3>Keanu Reeves</h3>
        <p>John Wick</p>
      </div>
      <div className='Actors-items'>
        <img src={img} alt="" />
        <h3>Keanu Reeves</h3>
        <p>John Wick</p>
      </div>
      <div className='Actors-items'>
        <img src={img} alt="" />
        <h3>Keanu Reeves</h3>
        <p>John Wick</p>
      </div>
    </div>
  )
}
