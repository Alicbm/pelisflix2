import React from "react";
import { useNavigate } from "react-router-dom";
import {
  section as setSection,
  nameSection as setNameSection,
} from "../features/mainSlices";
import { useAppDispatch } from "../store/hooks";
import { Trending } from "../types";
import "./InputSearch.css";

export const InputSearch = () => {
  const [movie, setMovie] = React.useState<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMovie(value);
  };

  const searchMovie = async () => {
    const mainUrl = process.env.REACT_APP_MAIN_URL;
    const key = process.env.REACT_APP_KEY;
    const allMovies: Trending[] = [];

    try {
      const movieSearch = await fetch(
        `${mainUrl}/search/movie?api_key=${key}&query=${movie}`
      );
      const trendingFetch = await fetch(
        `${mainUrl}/trending/movie/day?api_key=${key}`
      );

      const dataMovieSearch = await movieSearch.json();
      const dataTrending = await trendingFetch.json();

      allMovies.push(...dataMovieSearch.results);
      allMovies.push(...dataTrending.results);

      dispatch(setNameSection(movie?.toUpperCase()));
      dispatch(setSection(allMovies));
      navigate("/sections");

      const input = document.querySelector(
        ".InputSearch-input"
      ) as HTMLInputElement;
      input.value = "";
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="InputSearch">
      <input
        onChange={handleSearch}
        type="text"
        className="InputSearch-input"
        placeholder="Search for a movie, tv, etc"
      />
      <button onClick={searchMovie} className="InputSearch-button">
        Search
      </button>
    </div>
  );
};
