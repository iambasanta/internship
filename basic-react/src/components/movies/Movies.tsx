import React, { useEffect, useState } from "react";
import axios from "axios";

const AUTH_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const Movies = (props: {}) => {
  type Movie = {
    id: number;
    original_language: string;
    title: string;
    vote_average: number;
  };

  const [movies, setMovies] = useState<Array<Movie>>([]);
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
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Movie list</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Original Language</th>
            <th>Title</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr>
              <td>{movie.id}</td>
              <td>{movie.original_language}</td>
              <td>{movie.title}</td>
              <td>{movie.vote_average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
