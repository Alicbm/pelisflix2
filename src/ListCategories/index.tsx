import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { categoryId as setCategoryId } from '../features/mainSlices'
import { TypeCategories } from '../types'
import { useNavigate } from 'react-router-dom'
import './ListCategories.css'

export const ListCategories = () => {
  const { categories } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div className='ListCategories'>
      <h2 className='ListCategories-title'>Categories</h2>
      <ul className='ListCategories-list'>
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
