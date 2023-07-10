import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateMovie } from "../movies/MovieSlice";

const Edit = (props: {}) => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");

  const movies = useSelector((state: any) => {
    return state?.moviesList?.movies;
  });

  useEffect(() => {
    const selectedMovie = movies.find((movie: any) => movie.id == movieId);
    setNewTitle(selectedMovie.title);
  }, [movies]);

  const handleUpdate = (e: any) => {
    e.preventDefault();
    dispatch(updateMovie({ movieId, newTitle }));
  };

  return (
    <div>
      <h3>Edit page</h3>
      <form>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleUpdate}>Update Movie</button>
      </form>
    </div>
  );
};

export default Edit;
