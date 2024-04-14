// MovieList.js

import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent }) => {
  const FavouriteComponent = favouriteComponent;

  return (
    <>
      {movies.map((movie, index) => (
        <div
          key={index}
          className="image-container d-flex justify-content-start m-3"
        >
          <Link to={`/${movie.id}`}>
            <img
              className="img__movie__list"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          <div
            onClick={() => handleFavouritesClick(movie)} // Передаем объект фильма
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
