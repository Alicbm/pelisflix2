import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { categoryId as setCategoryId } from '../features/mainSlices'
import { TypeCategories } from '../types'
import { useNavigate } from 'react-router-dom'
import './Categories.css'

export const Categories = () => {
  const { categories } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div className='Categories'>
      <h2 className='Categories-title'>Categories</h2>
      <ul className='Categories-list'>
        {
          categories.map((category: TypeCategories) => (
            <li 
              onClick={() => { 
                dispatch(setCategoryId(category.id))
                navigate('/search')
              }}
              key={category.id}>
              {category.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
