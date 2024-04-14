import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import RemoveFavourites from "../components/RemoveFavourites";

const FavouritePage = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [detailedMovies, setDetailedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedFavourites = JSON.parse(
      sessionStorage.getItem("react-movie-app-favourites")
    );
    if (storedFavourites) {
      setFavouriteMovies(storedFavourites);
      fetchDetailedMovies(storedFavourites);
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchDetailedMovies = async (movies) => {
    try {
      const detailedMoviePromises = movies.map(async (movie) => {
        const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=ab88fc04dcf79f30d46f96b2175713c3`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      });
      const detailedMoviesData = await Promise.all(detailedMoviePromises);
      setDetailedMovies(detailedMoviesData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching detailed movie data:", error);
      setIsLoading(false);
    }
  };

  const removeFromFavourites = (movie) => {
    const movieId = movie.id;
    const updatedFavourites = favouriteMovies.filter(
      (favMovie) => favMovie.id !== movieId
    );
    setFavouriteMovies(updatedFavourites);
    sessionStorage.setItem(
      "react-movie-app-favourites",
      JSON.stringify(updatedFavourites)
    );

    setDetailedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  return (
    <div className="container">
      <MovieListHeading heading="My Favourite Movies" />
      <div className="col justify-content-center d-flex">
        <div className="col-md-8">
          {isLoading ? (
            <div>Loading...</div>
          ) : detailedMovies.length > 0 ? (
            <MovieList
              movies={detailedMovies}
              favouriteComponent={RemoveFavourites}
              handleFavouritesClick={removeFromFavourites}
            />
          ) : (
            <div>No favourite movies found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;
