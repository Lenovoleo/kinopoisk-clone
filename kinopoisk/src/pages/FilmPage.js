import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchFilm = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ab88fc04dcf79f30d46f96b2175713c3`
      );
      const data = await response.json();

      setFilm(data);
    };

    fetchFilm();
  }, [id]);

  if (!film) {
    return (
      <div className="justify-content-center d-flex fs-1 m-5 pt-5">
        Loading...
      </div>
    );
  }

  return (
    <div className="film__movie container mt-5 d-flex">
      <div className="film__poster">
        <img
          className="film__poster__img"
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
        ></img>
      </div>
      <div className="film__info">
        <h4>Title: {film.original_title}</h4>
        <p>
          Language: <span>{film.original_language}</span>
        </p>
        <p>
          Release date:<span> {film.release_date}</span>
        </p>
        <p>
          Rating: <span>{film.vote_average}</span>
        </p>
        <p>
          Popularity: <span>{film.popularity}</span>
        </p>
        <p>
          Overview: <span>{film.overview}</span>
        </p>
      </div>
    </div>
  );
};

export default FilmPage;
