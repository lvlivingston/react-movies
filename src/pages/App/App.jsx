import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { movies } from '../../data.js';
import React from "react";
import ActorListPage from "../ActorListPage/ActorListPage.jsx";
import LoginPage from "../LoginPage/LoginPage.jsx";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage.jsx";
import MoviesListPage from "../MoviesListPage/MoviesListPage.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
// import "./styles.css";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}