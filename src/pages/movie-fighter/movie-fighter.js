import "./movie-fighter.scss";
import { Container, Row, Image} from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import MovieList from "../../components/MovieList";
import capture from "./Capture.PNG"

function MovieFighter(props) {
  // const [searchValue, setSearchValue] = useState("");
  // const [movie, setMovie] = useState("");

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=e666a2cfa890d8a2bb19db4ca078ae7f&query=${searchValue}`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.results) {
  //         console.log(searchValue);
  //         setMovie(res.results);
  //       }
  //     });
  // }, [searchValue]);


  return (
    <Container fluid className="movie-fighter-page">
      <Row className="movie-row">
        <h2>Comming soon...</h2>
      </Row>
      <Row className="movie-row">
      <Image src={capture} alt="Movie Fight"></Image>
      </Row>

      {/* <Form.Control
        type="text"
        placeholder="Type to search..."
        className="mb-sm-3 searchField"
        value={props.value}
        onChange={(event) => setSearchValue(event.target.value)}
      /> */}

      <div className="row">
        {/* <MovieList
          movies={movies}
        /> */}
      </div>
    </Container>
  );
}

export default MovieFighter;
