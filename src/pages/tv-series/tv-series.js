import "./tv-series.scss";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

function TvSeries() {
  const { seriesId } = useParams();
  const [tvSeries, setTvSeries] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${seriesId}?`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTvSeries(res.data.results));

    axios
      .get(`https://api.themoviedb.org/3/tv/${seriesId}/recommendations?`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setSimilar(res.data.results));
  }, []);

  return (
    <div className="tv-page">
      <Container>
        <Row>
          <Col className="tv-img">
            <Image
              src={"https://image.tmdb.org/t/p/w500" + tvSeries.poster_path}
              alt={tvSeries.name}
              fluid
            ></Image>
          </Col>
          <Col className="tv-description">
            <h2>{tvSeries.title}</h2>
            <div className="row vote-section">
              <FontAwesomeIcon className="star-icon" icon={faStar} />
              <p>
                {Math.round(tvSeries.vote_average)}/<strong>10</strong>
              </p>
            </div>
            <ul>
              <li>test1</li>
              <li>test2</li>
              <li>test3</li>
            </ul>
            <p>{tvSeries.overview}</p>
            <div className="details">
              <h3>Details</h3>
              <p>Release date: {tvSeries.release_date}</p>
              <p>Runtime: {tvSeries.runtime} min</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="mt-3">
        <h2>Similar</h2>
      </Row>
      <Row>
        {similar.map((tvSeries, idx) => {
          return (
            <div
              key={idx}
              className="image-container d-flex justify-content-start m-3"
            >
              <Link to={`/home/${tvSeries.id}`}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + tvSeries.poster_path}
                  alt={tvSeries.name}
                ></img>
              </Link>
            </div>
          );
        })}
      </Row>
      </div>
  );
}

export default TvSeries;
