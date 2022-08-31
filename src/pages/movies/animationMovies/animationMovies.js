import "./animationMovies.scss";
import { Container, Row } from "react-bootstrap";
import MovieListHeader from "../../../components/MovieListHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

function AnimationMovies() {
  const [animationMovies, setAnimationMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e666a2cfa890d8a2bb19db4ca078ae7f&with_genres=16`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      )
      .then((res) => setAnimationMovies(res.data.results));
  }, []);

  return (
    <Container className="animation-movies" fluid>
      <Row>
        <MovieListHeader heading="Animation Movies" />
      </Row>

      {animationMovies.map((movie, idx) => {
        return (
          <Link to={`/home/${movie.id}`}>
            <img
              src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
              alt={movie.name}
              key={idx}
              className="image-container m-3 rounded"
            ></img>
          </Link>
        );
      })}
    </Container>
  );
}

export default AnimationMovies;
