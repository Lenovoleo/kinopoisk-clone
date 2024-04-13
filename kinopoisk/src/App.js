import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import FilmPage from "./pages/FilmPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<FilmPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
