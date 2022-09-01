import "./movie.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

function Movie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=e666a2cfa890d8a2bb19db4ca078ae7f`
    )
      .then((res) => {
        if (res.status >= 400) {
          setError(true);
        }
        return res.json();
      })
      .then((res) => setMovie(res));

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setSimilar(res.data.results));
  }, []);

  return (
    <div className="container-fluid movie-page">
      {error && <p>Sorry, I could not find your page!</p>}
      {!!movie && (
        <>
          <Container>
            <Row>
              <Col className="movie-img">
                <Image
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={movie.name}
                  fluid
                ></Image>
              </Col>
              <Col className="movie-description">
                <h2>{movie.title}</h2>
                <div className="row vote-section">
                  <FontAwesomeIcon className="star-icon" icon={faStar} />
                  <p>
                    {Math.round(movie.vote_average)}/<strong>10</strong>
                  </p>
                </div>
                <ul>
                  <li>test1</li>
                  <li>test2</li>
                  <li>test3</li>
                </ul>
                <p>{movie.overview}</p>
                <div className="details">
                  <h3>Details</h3>
                  <p>Release date: {movie.release_date}</p>
                  <p>Runtime: {movie.runtime} min</p>
                </div>
              </Col>
            </Row>
            </Container>
            <Row className="mt-3">
              <h2>Similar</h2>
            </Row>
            <Row>
              {similar.map((movie, idx) => {
                return (
                  <div
                    key={idx}
                    className="image-container d-flex justify-content-start m-3"
                  >
                    <Link to={`/home/${movie.id}`}>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w300" + movie.poster_path
                        }
                        alt={movie.name}
                      ></img>
                    </Link>
                  </div>
                );
              })}
            </Row>
          
        </>
      )}
    </div>
  );
}

export default Movie;
