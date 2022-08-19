import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=star wars&apikey=72990942")
      .then((res) => res.json())
      .then((res) => {
        if (res.Search) {
          setMovies(res.Search);
        }
      });
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
