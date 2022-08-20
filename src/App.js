import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieListHeader from "./components/MovieListHeader";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddToFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=72990942`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Search) {
          setMovies(res.Search);
        }
      });
  }, [searchValue]);

  const addFavouriteMovie = (movie)=>{
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} favouriteComponent={AddFavourite} handleFavouritesClick={addFavouriteMovie}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Favourites"/>
      </div>
      <div className="row">
        <MovieList movies={favourites} favouriteComponent={AddFavourite}/>
      </div>
    </div>
  );
}

export default App;
