import "./home.scss";
import MovieListHeader from "../../components/MovieListHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function Home() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}${endpoints.popular}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setPopular(res.data.results));

    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTrending(res.data.results));

    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setOriginals(res.data.results));

    axios
      .get(`${URL}${endpoints.top_rated}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTopRated(res.data.results));

    axios
      .get(`${URL}${endpoints.upcoming}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setUpcoming(res.data.results));
  }, []);

  const handleMovieClick = (movie) => {
    console.log(`You clicked Me! ${movie.id}`);
  };

  return (
    <div className="container-fluid home-page">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Home" />
      </div>
      <div className="row">
        <h3>Popular</h3>
      </div>
      <div className="row mb-5">
        {popular.map((movie, idx) => {
          return (
            <div
              key={idx}
              className="image-container d-flex justify-content-start m-3"
            >
              <Link to={`/home/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                  alt={movie.name}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="row">
        <h3>Upcoming</h3>
      </div>
      <div className="row mb-5">
        {upcoming.map((movie, idx) => {
          return (
            <div
              key={idx}
              className="image-container d-flex justify-content-start m-3"
            >
              <Link to={`/home/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                  alt={movie.name}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="row">
        <h3>Trending</h3>
      </div>
      <div className="row mb-5">
        {trending.map((movie, idx) => {
          return (
            <div
              key={idx}
              className="image-container d-flex justify-content-start m-3"
            >
              <Link to={`/home/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                  alt={movie.name}
                  onClick={() => {
                    handleMovieClick(movie);
                  }}
                ></img>
              </Link>

              {/* <div
              onClick={() => trending.addFavouriteMovie(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <AddFavourite />
            </div> */}
            </div>
          );
        })}
      </div>
      <div className="row">
        <h3>Originals</h3>
      </div>
      <div className="row mb-5">
        {originals.map((movie, idx) => {
          return (
            <div
              key={idx}
              className="image-container d-flex justify-content-start m-3"
            >
              <Link to={`/home/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                  alt={movie.name}
                  onClick={() => {
                    handleMovieClick(movie);
                  }}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="row">
        <h3>Top Rated</h3>
      </div>
      <div className="row">
        {topRated.map((movie, idx) => {
          return (
            <div
              key={idx}
              className="image-container d-flex justify-content-start m-3"
            >
              <Link to={`/home/${movie.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                  alt={movie.name}
                  onClick={() => {
                    handleMovieClick(movie);
                  }}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
