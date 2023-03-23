import React from 'react'

export const InputSearch = () => {
  return (
    <div className='InputSearch'>
      <input 
        type="text" 
        className='InputSearch-input'
        placeholder='Search for a movie, tv, etc'
      />
      <button className='InputSearch-button'>Search</button>
    </div>
  )
}