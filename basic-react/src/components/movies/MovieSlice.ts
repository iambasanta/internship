import { createSlice } from "@reduxjs/toolkit";

interface Movie {
  id: number;
  title: string;
}

interface MoviesState {
  movies: Array<Movie>;
}

const initialMoviesData: MoviesState = {
  movies: [],
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState: initialMoviesData,
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    updateMovie: (state, action) => {
      const { movieId, newTitle } = action.payload;
      const movieIndex = state.movies.findIndex((movie) => movie.id == movieId);
      state.movies[movieIndex].title = newTitle;
    },
    removeMovie: (state, action) => {
      const movieId = action.payload;

      const newMovies = state.movies.filter((movie) => movie.id !== movieId);
      state.movies = newMovies;
    },
  },
});

export const { getMovies, updateMovie, removeMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
