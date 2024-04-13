import React, { useState, useEffect } from "react";
import kinopoiskLogo from "../img/kinopoiskLogo.png";
import SearchBox from "./SearchBox";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showBurgerModal, setShowBurgerModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c76745ee`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setShowSearchModal(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getMovieRequest(searchValue);
    }
  };

  const closeBurgerModal = () => {
    setShowBurgerModal(false);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg main__navbar">
        <div className="logo col-sm">
          <Link to="/">
            <img src={kinopoiskLogo} alt="Kinopoisk Logo" />
          </Link>
        </div>
        <div className="d-flex nav__search">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          className="rounded-3 m-2"
          type="button"
          onClick={() => setShowBurgerModal(true)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
      </nav>
      <div
        className={`modal ${showBurgerModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showBurgerModal ? "block" : "none" }}
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <h5 className="modal-title">Burger Menu</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={closeBurgerModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body navbar__list navbar__menu_modal">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => setShowBurgerModal(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/favourite"
                    className="nav-link"
                    onClick={() => setShowBurgerModal(false)}
                  >
                    Favourite
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal ${showSearchModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showSearchModal ? "block" : "none" }}
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content text-black">
            <div className="modal-header justify-content-end">
              <h5 className="modal-title">Search Results</h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={closeSearchModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="navbar-nav">
                {movies.map((movie) => (
                  <li className="nav-item" key={movie.imdbID}>
                    <Link
                      to={`/${movie.imdbID}`}
                      className="nav-link"
                      onClick={closeSearchModal}
                    >
                      {movie.Title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
