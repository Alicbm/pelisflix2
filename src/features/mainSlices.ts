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
  categories: []
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
    }
  }
})

export const {
  trending,
  nowPlaying,
  topRated,
  popular,
  movieSelected,
  categories,
  
} = mainSlice.actions

export default mainSlice.reducer;