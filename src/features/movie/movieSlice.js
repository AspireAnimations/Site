import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latest: null,
  anime: null,
  app: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.latest = action.payload.latest;
      state.anime = action.payload.anime;
      state.app = action.payload.app;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectLatest = (state) => state.movie.latest;
export const selectAnime = (state) => state.movie.anime;
export const selectApp = (state) => state.movie.app;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
