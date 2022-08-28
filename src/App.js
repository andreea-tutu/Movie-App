import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import TvSeries from "./pages/tv-series/tv-series";
import Favourites from "./pages/favourites/favourites";
import MovieFighter from "./pages/movie-fighter/movie-fighter";
import Movies2 from "./pages/movies/movies";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import ActionMovies from "./pages/movies/actionMovies/actionMovies";
import Movie from "./pages/home/homeMovies/movie";

function App() {
  //searchValue={searchValue} setSearchValue={setSearchValue}
  return (
    <div className="container-fluid movie-app">
      <Header />
      <Routes>
        <Route path="tv-series" element={<TvSeries />} />
        <Route path="movies2" element={<Movies2 />} />

        <Route path="action" element={<ActionMovies />} />

        <Route path="favourites" element={<Favourites />} />
        <Route path="movie-fighter" element={<MovieFighter />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:movieId" element={<Movie />} />
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
