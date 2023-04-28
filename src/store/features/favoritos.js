import { createSlice } from '@reduxjs/toolkit';

export const favoritosSlice = createSlice({
  name: 'favorito',
  initialState: {
    movies: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.movies = state.movies.concat(action.payload);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload.id,
      );
    },
  },
});

export const { addMovie, removeMovie } = favoritosSlice.actions;
export default favoritosSlice.reducer;
