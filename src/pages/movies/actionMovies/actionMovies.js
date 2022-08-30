import "./actionMovies.scss";
import { Container, Row } from "react-bootstrap";
import MovieListHeader from "../../../components/MovieListHeader";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

function ActionMovies() {
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e666a2cfa890d8a2bb19db4ca078ae7f&with_genres=28`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      )
      .then((res) => setActionMovies(res.data.results));
  }, []);

  return (
    <Container className="action-movies" fluid>
      <Row>
        <MovieListHeader heading="Action Movies" />
      </Row>
      <Row>
        {actionMovies.map((movie, idx) => {
          return (
            <div
              className="image-container d-flex justify-content-start m-3"
              key={idx}
            >
              <img
                src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                alt={movie.name}
              ></img>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default ActionMovies;
