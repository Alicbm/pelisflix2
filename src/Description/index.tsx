import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { similarMovies as setSimilarMovies, video as setVideo } from '../features/mainSlices'
import { Actors } from '../Actors'
import { CarouselMovies } from '../CarouselMovies'
import { Details } from '../Details'
import { Video } from '../Video'
import { Reviews } from '../Reviews'
import './Description.css'

export const Description = () => {
  const { movieSelected, similarMovies } = useAppSelector(state => state.mainReducer)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const getVideo = async () => { 
      const mainUrl = process.env.REACT_APP_MAIN_URL  
      const key = process.env.REACT_APP_KEY  
      
      try {
        const similarMoviesFetch = await fetch(`${mainUrl}/movie/${movieSelected.id}/similar?api_key=${key}`);
        const elseIf = await fetch(`${mainUrl}/movie/upcoming?api_key=${key}`);
        const videoFetch = await fetch(`${mainUrl}/movie/${movieSelected.id}/videos?api_key=${key}`);
        
        const dataSimilarMovies = await similarMoviesFetch.json();
        const dataElseIf = await elseIf.json()
        const dataVideo = await videoFetch.json();

        if(!dataSimilarMovies.results[0]){
          dispatch(setSimilarMovies(dataElseIf.results));        
        }else {
          dispatch(setSimilarMovies(dataSimilarMovies.results));        
        }

        dispatch(setVideo(dataVideo.results[1])); 

      } catch (error) {
        console.log(error);
      }
    }
    getVideo()
  }, [movieSelected])

  return (
    <div className='Description'>
      <Details />
      <Actors />  
      <Video />
      <CarouselMovies title='Similar Movies' movies={similarMovies}/>
      <Reviews />
    </div>
  )
}
