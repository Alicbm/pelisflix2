import React from 'react'
import { CarouselMovies } from '../CarouselMovies'
import { ListCategories } from '../ListCategories'
import { WelcomeView } from '../WelcomeView'
import {
  trending as setTrending,
  nowPlaying as setNowPlaying,
  topRated as setTopRated,
  popular as setPopular,
  categories as setCategories,
} from "../features/mainSlices";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getSections, getCategoriesGenres } from '../functions';
import './Home.css'

export const Home = () => {
  window.scrollTo(0, 0);

  const { trending, nowPlaying, topRated, popular } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()
  const mainUrl = process.env.REACT_APP_MAIN_URL  
  const key = process.env.REACT_APP_KEY  

  React.useEffect(() => {
    getSections(`${mainUrl}/trending/movie/day?api_key=${key}`, dispatch, setTrending)
    getSections(`${mainUrl}/movie/now_playing?api_key=${key}`, dispatch, setNowPlaying)
    getSections(`${mainUrl}/movie/top_rated?api_key=${key}`, dispatch, setTopRated)
    getSections(`${mainUrl}/movie/popular?api_key=${key}`, dispatch, setPopular)
    getCategoriesGenres(`${mainUrl}/genre/movie/list?api_key=${key}`, dispatch, setCategories)
  }, [])
  
  return (
    <div className='Home'>
      <WelcomeView />  
      <CarouselMovies title='Trendings' movies={trending}/>
      <CarouselMovies title='Popular' movies={popular}/>
      <div className='Home-nowplaying'>
        <CarouselMovies title='Now Playing' movies={nowPlaying}/>
      </div>
      <CarouselMovies title='Top Rated' movies={topRated}/>
      <ListCategories />
    </div>
  )
}
