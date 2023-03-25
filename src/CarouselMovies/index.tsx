import React from "react";
import { Trending } from "../types";
import "./CarouselMovies.css";

export const CarouselMovies = (prop: { title: string; movies: Trending[] }) => {
  const url_image = process.env.REACT_APP_URL_IMAGE;

  return (
    <div className="CarouselMovies">
      <h2 className="CarouselMovies-title">{prop.title}</h2>
      <div className="CarouselMovies-movies">
        {prop.movies.map((movie: Trending) => (
          <img src={`${url_image}${movie.poster_path}`} alt={movie.title} key={movie.id}/>
        ))}
      </div>
    </div>
  );
};
