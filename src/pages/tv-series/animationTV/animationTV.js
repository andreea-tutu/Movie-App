import "./animationTV.scss";
import { Container, Row } from "react-bootstrap";
import MovieListHeader from "../../../components/MovieListHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "e666a2cfa890d8a2bb19db4ca078ae7f";

function AnimationTV() {
  const [animationTV, setAnimationTV] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=e666a2cfa890d8a2bb19db4ca078ae7f&with_genres=16`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      )
      .then((res) => setAnimationTV(res.data.results));
  }, []);
  return (
    <Container className="animationTV" fluid>
      <Row>
        <MovieListHeader heading="Animation TV Series" />
      </Row>

      {animationTV.map((tv, idx) => {
        return (
          <Link to={`/home/${tv.id}`}>
            <img
              src={"https://image.tmdb.org/t/p/w300" + tv.poster_path}
              alt={tv.name}
              key={idx}
              className="image-container m-3 rounded"
              onClick={()=>{console.log(`You clicked me ${tv.id}`)}}
            ></img>
           </Link>
        );
      })}
    </Container>
  );
}

export default AnimationTV;
