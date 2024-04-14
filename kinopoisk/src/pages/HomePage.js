import React, { useState, useEffect, useCallback } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import AddFavourites from "../components/AddToFavourites";

const API_KEY = "ab88fc04dcf79f30d46f96b2175713c3";
const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovies = useCallback(async (url, setMovies) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.error("Error through get an API:", error);
    }
  }, []);

  useEffect(() => {
    getMovies(BASE_URL, setTopMovies);
    getMovies(`${BASE_URL}&with_genres=35`, setComedyMovies);
    getMovies(`${BASE_URL}&with_genres=28`, setActionMovies);
    getMovies(`${BASE_URL}&with_genres=27`, setHorrorMovies);
    getMovies(`${BASE_URL}&with_genres=80`, setCrimeMovies);
  }, [getMovies]);

  useEffect(() => {
    const movieFavourites =
      JSON.parse(sessionStorage.getItem("react-movie-app-favourites")) || [];
    setFavourites(movieFavourites);
  }, []);

  const saveToSessionStorage = (items) => {
    sessionStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = useCallback(
    (movie) => {
      if (!favourites.some((fav) => fav.id === movie.id)) {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToSessionStorage(newFavouriteList);
      } else {
        console.log("Movie just added");
      }
    },
    [favourites]
  );

  const removeFavouriteMovie = useCallback(
    (movieId) => {
      const newFavouriteList = favourites.filter(
        (favourite) => favourite.id !== movieId
      );
      setFavourites(newFavouriteList);
      saveToSessionStorage(newFavouriteList);
    },
    [favourites]
  );

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
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Horror >>" />
      </div>
      <div className="d-flex movie-app-row">
        <MovieList
          movies={horrorMovies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Crime >>" />
      </div>
      <div className="d-flex movie-app-row">
        <MovieList
          movies={crimeMovies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
    </div>
  );
};

export default HomePage;
