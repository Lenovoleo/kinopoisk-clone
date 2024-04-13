import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent }) => {
  const FavouriteComponent = favouriteComponent;
  console.log(movies);
  return (
    <>
      {movies.map((movie, index) => (
        <Link to={`/${movie.id}`}>
          <div
            key={index}
            className="image-container d-flex justify-content-start m-3"
          >
            <img
              className="img__movie__list"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div
              onClick={() => handleFavouritesClick(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MovieList;
