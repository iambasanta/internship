import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../features/counter/counterSlice";
import MovieReducer from "./../components/movies/MovieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    moviesList: MovieReducer,
  },
});
