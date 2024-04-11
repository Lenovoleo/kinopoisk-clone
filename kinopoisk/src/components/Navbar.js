import React, { useState, useEffect } from "react";
import kinopoiskLogo from "../img/kinopoiskLogo.png";
import SearchBox from "./SearchBox";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = ` http://www.omdbapi.com/?s=${searchValue}&apikey=c76745ee`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <>
      <nav className="navbar navbar-expand-lg main__navbar">
        <div className="logo col">
          <Link to="/">
            <img src={kinopoiskLogo} alt="Kinopoisk Logo" />
          </Link>
        </div>
        <div className="d-flex nav__search">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="d-flex">
          <ul className="d-flex justify-content-between align-items-center navbar__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourite">Favourite</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
