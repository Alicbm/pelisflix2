import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: [],
  nowPlaying: [],
  topRated: [],
  popular: []
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
  }
})

export const {
  trending,
  nowPlaying,
  topRated,
  popular,
} = mainSlice.actions

export default mainSlice.reducer;