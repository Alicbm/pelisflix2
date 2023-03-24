import React from 'react'
import { InputSearch } from '../InputSearch'
import img from '../images/img_test.jpg'
import './Search.css'

export const Search = () => {
  return (
    <div className='Search'>
      <div className='Search-header'>
        <h1>The place of the best movies!</h1>
        <InputSearch />
      </div>
      <div className='Search-container'>
        <div className='Search-container__title'>
          Comedy
        </div>
        <div className='Search-container__movies'>
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
