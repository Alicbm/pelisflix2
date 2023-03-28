import React from "react";
import { InputSearch } from "../InputSearch";
import {
  categorySelected as setCategorySelected,
  movieSelected as setMoviSelected,
} from "../features/mainSlices";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Trending, TypeCategories } from "../types";
import { useNavigate } from "react-router-dom";
import logo from '../images/pelisflix_logo.png'
import "./Categories.css";

export const Categories = () => {
  const { categories, categoryId, categorySelected } = useAppSelector(
    (state) => state.mainReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const url_img = process.env.REACT_APP_URL_IMAGE;

  const nameCategory = categories.find(
    (category: TypeCategories) => category.id === categoryId
  );

  React.useEffect(() => {
    const getPosts = async () => {
      const mainUrl = process.env.REACT_APP_MAIN_URL;
      const key = process.env.REACT_APP_KEY;
      const allMovies: Trending[] = [];

      try {
        for (let i = 1; i <= 2; i++) {
          const similarMoviesFetch = await fetch(
            `${mainUrl}/discover/movie?api_key=${key}&page=${i}&with_genres=${categoryId}`
          );
          const dataSimilarMovies = await similarMoviesFetch.json();

          allMovies.push(...dataSimilarMovies.results);
        }

        if(allMovies.length > 0){
          dispatch(setCategorySelected(allMovies));
          localStorage.setItem('PELISFLIX2_CATEGORY_SELECTED', JSON.stringify(allMovies));
        }

      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [categories]);

  return (
    <div className="Categories">
      <div className="Categories-header">
        <img src={logo} alt="Pelisflix" />
        <InputSearch />
      </div>
      <div className="Categories-container">
        <div className="Categories-container__title">{nameCategory?.name}</div>
        <div className="Categories-container__movies">
          {categorySelected.map((movie: Trending) => (
            <img
              onClick={() => {
                dispatch(setMoviSelected(movie));
                navigate("/description");
              }}
              src={`${url_img}${movie.poster_path}`}
              alt={movie.title}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
