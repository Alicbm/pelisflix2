import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storage } from "../functions";
import { Initial, Trending, TypeCategories } from "../types";

const dataSection: Trending[] = storage('PELISFLIX2_SECTION')
const dataSectionName: string = storage('PELISFLIX2_SECTION_NAME')
const dataCategorySelected: Trending[] = storage('PELISFLIX2_CATEGORY_SELECTED')
const dataCategory: TypeCategories[] = storage('PELISFLIX2_CATEGORY')
const dataCategoryId: number = storage('PELISFLIX2_CATEGORY_ID')
const dataMovieSelected: Trending = storage('PELISFLIX2_MOVIE_SELECTED')

const initialState: Initial = {
  trending: [],
  nowPlaying: [],
  topRated: [],
  popular: [],
  movieSelected: dataMovieSelected,
  categories: dataCategory,
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
  categorySelected: dataCategorySelected,
  section: dataSection,
  categoryId: dataCategoryId,
  nameSection: dataSectionName,
  reviews: [],
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
    section: (state, action) => {
      state.section = action.payload
    },
    categoryId: (state, action) => {
      state.categoryId = action.payload
    },
    nameSection: (state, action) => {
      state.nameSection = action.payload
    },
    reviews: (state, action) => {
      state.reviews = action.payload
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
  categoryId,
  nameSection,
  section,
  reviews,
} = mainSlice.actions

export default mainSlice.reducer;