import React from 'react'
import { Actors } from '../Actors'
import { CarouselMovies } from '../CarouselMovies'
import { Details } from '../Details'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { similarMovies as setSimilarMovies, video as setVideo } from '../features/mainSlices'
import { Video } from '../Video'

export const Description = () => {
  const { movieSelected, similarMovies } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const getPosts = async () => { 
      const mainUrl = process.env.REACT_APP_MAIN_URL  
      const key = process.env.REACT_APP_KEY  
      
      try {
        const similarMoviesFetch = await fetch(`${mainUrl}/movie/${movieSelected.id}/similar?api_key=${key}`);
        const videoFetch = await fetch(`${mainUrl}/movie/${movieSelected.id}/videos?api_key=${key}`);
        
        const dataSimilarMovies = await similarMoviesFetch.json();
        const dataVideo = await videoFetch.json();

        dispatch(setSimilarMovies(dataSimilarMovies.results));        
        dispatch(setVideo(dataVideo.results[1]));        

      } catch (error) {
        console.log(error);
      }
    }
    getPosts()
  }, [movieSelected])

  return (
    <div className='Description'>
      <Details />
      <Actors />  
      <Video />
      <CarouselMovies title='Similar Movies' movies={similarMovies}/>
    </div>
  )
}
