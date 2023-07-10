import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMovies, removeMovie } from "../movies/MovieSlice";
import { useSelector } from "react-redux";

const AUTH_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const Movies = (props: {}) => {
  const dispatch = useDispatch();

  const movies = useSelector((state: any) => {
    return state?.moviesList?.movies;
  });

  // const [movies, setMovies] = useState<Array<Movie>>([]);

  type Movie = {
    id: number;
    original_language: string;
    title: string;
    vote_average: number;
  };

  const options = {
    url: "https://api.themoviedb.org/3/movie/popular",
    method: "GET",
    params: { page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  };

  useEffect(() => {
    if (!movies.length) {
      fetchMovies();
    }
  }, []);

  const fetchMovies = () => {
    axios
      .request(options)
      .then(function (response) {
        dispatch(getMovies(response?.data?.results));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Movie list</h1>
      <Link to={"add"}>Add Movie</Link>
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Original Language</th>
            <th>Title</th>
            <th>Ratings</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {movies?.map((movie: Movie) => (
            <tr>
              <td>{movie?.id}</td>
              <td>{movie?.original_language}</td>
              <td>{movie?.title}</td>
              <td>{movie?.vote_average}</td>
              <td>
                <Link to={"edit/" + movie.id}>Edit </Link>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure?")) {
                      dispatch(removeMovie(movie.id));
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
