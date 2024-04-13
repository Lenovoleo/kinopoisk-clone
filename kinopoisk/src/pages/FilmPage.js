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
    return <div>Loading...</div>;
  }

  return (
    <div className="movie">
      <h3>{film.title}</h3>
      <p>{film.overview}</p>
    </div>
  );
};

export default FilmPage;
