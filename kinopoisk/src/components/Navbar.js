import React, { useState, useEffect } from "react";
import kinopoiskLogo from "../img/kinopoiskLogo.png";
import SearchBox from "./SearchBox";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false); // Состояние для отображения/скрытия модального окна

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c76745ee`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setShowModal(true); // Показать модальное окно после получения результатов
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getMovieRequest(searchValue);
    }
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
          onClick={() => setShowModal(true)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className={`modal ${showModal ? "show" : ""}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header justify-content-end">
                <h5 className="modal-title">Menu</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body navbar__list navbar__menu_modal">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => setShowModal(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/favourite"
                      className="nav-link"
                      onClick={() => setShowModal(false)}
                    >
                      Favourite
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
