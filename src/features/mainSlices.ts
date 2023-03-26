import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Initial, Trending } from "../types";

const initialState: Initial = {
  trending: [],
  nowPlaying: [],
  topRated: [],
  popular: [],
  movieSelected: {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    popularity: 0,
  },
  categories: [],
  actors: [],
  similarMovies: [],
  video: {
    iso_639_1: '',
    iso_3166_1: '',
    name: '',
    key: '',
    site: '',
    size: 0,
    type: '',
    official: false,
    published_at: '',
    id: '',
  },
  categorySelected: [],
  categoryId: 0,
}

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    trending: (state, action) => {
      state.trending = action.payload
    },
    nowPlaying: (state, action) => {
      state.nowPlaying = action.payload
    },
    topRated: (state, action) => {
      state.topRated = action.payload
    },
    popular: (state, action) => {
      state.popular = action.payload
    },
    movieSelected: (state, action: PayloadAction<Trending>) => {
      state.movieSelected = action.payload
    },
    categories: (state, action) => {
      state.categories = action.payload;
    },
    actors: (state, action) => {
      state.actors = action.payload;
    },
    similarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
    video: (state, action) => {
      state.video = action.payload;
    },
    categorySelected: (state, action) => {
      state.categorySelected = action.payload
    },
    categoryId: (state, action) => {
      state.categoryId = action.payload
    },
  }
})

export const {
  trending,
  nowPlaying,
  topRated,
  popular,
  movieSelected,
  categories,
  actors,
  similarMovies,
  video,
  categorySelected,
  categoryId
} = mainSlice.actions

export default mainSlice.reducer;