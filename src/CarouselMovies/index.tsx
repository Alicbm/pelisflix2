import React from "react";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { Trending } from "../types";
import { movieSelected as setMoviSelected } from '../features/mainSlices'
import "./CarouselMovies.css";

export const CarouselMovies = (prop: { title: string; movies: Trending[] }) => {
  const url_image = process.env.REACT_APP_URL_IMAGE;
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleMovieSelected = (movie: Trending) => {
    dispatch(setMoviSelected(movie))
    navigate('/description')

    localStorage.setItem('PELISFLIX2_MOVIE_SELECTED', JSON.stringify(movie));
  }

  return (
    <div className="CarouselMovies">
      <h2 className="CarouselMovies-title">{prop.title}</h2>
      <div className="CarouselMovies-movies">
        {prop.movies.map((movie: Trending) => (
          <img 
            onClick={() => handleMovieSelected(movie)}
            src={`${url_image}${movie.poster_path}`} 
            alt={movie.title} 
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
