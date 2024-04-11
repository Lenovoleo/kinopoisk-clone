import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import AddFavourites from "../components/AddToFavourites";
import RemoveFavourites from "../components/RemoveFavourites";

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getTopMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=ab88fc04dcf79f30d46f96b2175713c3`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      setTopMovies(data.results);
    }
  };

  const getComedyMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=ab88fc04dcf79f30d46f96b2175713c3&with_genres=35`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      setComedyMovies(data.results);
    }
  };
  const getActionMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=ab88fc04dcf79f30d46f96b2175713c3&with_genres=28`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      setActionMovies(data.results);
    }
  };

  useEffect(() => {
    getTopMovies();
    getComedyMovies();
    getActionMovies();
  }, []);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Top >>" />
      </div>
      <div className="d-flex movie-app-row">
        <MovieList
          movies={topMovies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Comedy >>" />
      </div>
      <div className="d-flex movie-app-row">
        <MovieList
          movies={comedyMovies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Action >>" />
      </div>
      <div className="d-flex movie-app-row">
        <MovieList
          movies={actionMovies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
    </div>
  );
};

export default HomePage;
