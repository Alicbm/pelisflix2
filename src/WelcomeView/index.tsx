import React from 'react'
import { InputSearch } from '../InputSearch';
import './WelcomeView.css'

export const WelcomeView = () => {
  return (
    <div className='WelcomeView'>
      <h1 className='WelcomeView-title'>Welcome!</h1>
      <p className='WelcomeView-text'>Come on, this is a place to know the new and the best movies.</p>
      <InputSearch />
    </div>
  );
}
