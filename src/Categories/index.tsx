import React from 'react'
import { useAppSelector } from '../store/hooks'
import { TypeCategories } from '../types'
import './Categories.css'

export const Categories = () => {
  const { categories } = useAppSelector(state => state.mainReducer)

  return (
    <div className='Categories'>
      <h2 className='Categories-title'>Categories</h2>
      <ul className='Categories-list'>
        {
          categories.map((category: TypeCategories) => (
            <li>{category.name}</li>
          ))
        }
      </ul>
    </div>
  )
}
