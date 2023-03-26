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
import './Home.css'

export const Home = () => {
  const { trending, nowPlaying, topRated, popular } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const getPosts = async () => { 
      const mainUrl = process.env.REACT_APP_MAIN_URL  
      const key = process.env.REACT_APP_KEY  
      
      try {
        const trendingFetch = await fetch(`${mainUrl}/trending/movie/day?api_key=${key}`);
        const nowPLayingFetch = await fetch(`${mainUrl}/movie/now_playing?api_key=${key}`);
        const topRatedFetch = await fetch(`${mainUrl}/movie/top_rated?api_key=${key}`);
        const popularFetch = await fetch(`${mainUrl}/movie/popular?api_key=${key}`);
        const categoriesFetch = await fetch(`${mainUrl}/genre/movie/list?api_key=${key}`);

        const dataTrending = await trendingFetch.json();
        const dataNowPlaying = await nowPLayingFetch.json();
        const dataTopRated = await topRatedFetch.json();
        const dataPopular = await popularFetch.json();
        const dataCategories = await categoriesFetch.json();
    
        dispatch(setTrending(dataTrending.results));
        dispatch(setNowPlaying(dataNowPlaying.results));
        dispatch(setTopRated(dataTopRated.results));
        dispatch(setPopular(dataPopular.results));
        dispatch(setCategories(dataCategories.genres));

      } catch (error) {
        console.log(error);
      }
    }
    getPosts()
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
