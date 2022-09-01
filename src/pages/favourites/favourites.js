import MovieList from "../../components/MovieList";
import { useState, useEffect } from "react";
import MovieListHeader from "../../components/MovieListHeader";
import AddFavourite from "../../components/AddToFavourites";
import RemoveFavourites from "../../components/RemoveFavourites";
import "./favourite.scss";
import {Form} from "react-bootstrap";

function Favourites(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e666a2cfa890d8a2bb19db4ca078ae7f&query=${searchValue}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.results) {
          setMovies(res.results);
        }
      });
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="container-fluid favourite-page">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Search" />
      </div>
        <Form.Control
          type="text"
          placeholder="Type to search..."
          className="mb-sm-3 searchField"
          value={props.value}
          onChange={(event) =>setSearchValue(event.target.value)}
        />
      

      <div className="row">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourite}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Favourites" />
      </div>

      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default Favourites;
