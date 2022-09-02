import "./home.scss";
import MovieListHeader from "../../components/MovieListHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

const endpoints = {
  trending: "/trending/all/week",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function Home() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
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

      <Carousel fade>
        <CarouselItem interval={3000}>
          <img
            className="d-block mx-auto w-50"
            src="https://image.tmdb.org/t/p/w1280/vvObT0eIWGlArLQx3K5wZ0uT812.jpg"
            alt="First Slide"
          />
        </CarouselItem>
        <CarouselItem interval={3000}>
          <img
            className="d-block mx-auto w-50"
            src="https://image.tmdb.org/t/p/w1280/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg"
            alt="Second Slide"
          />
        </CarouselItem>
        <CarouselItem interval={3000}>
          <img
            className="d-block mx-auto w-50"
            src="https://image.tmdb.org/t/p/w1280/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg"
            alt="Third Slide"
          />
        </CarouselItem>
        <CarouselItem interval={3000}>
          <img
            className="d-block mx-auto w-50"
            src="https://image.tmdb.org/t/p/w1280/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg"
            alt="Fourth Slide"
          />
        </CarouselItem>
        <CarouselItem interval={3000}>
          <img
            className="d-block mx-auto w-50"
            src="https://image.tmdb.org/t/p/w1280/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg"
            alt="Fifth Slide"
          />
        </CarouselItem>
      </Carousel>

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
