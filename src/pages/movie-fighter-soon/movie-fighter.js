import "./movie-fighter.scss";
import { Container, Row, Image} from "react-bootstrap";
import capture from "./Capture.PNG"


function MovieFighter(props) {
  return (
    <Container fluid className="movie-fighter-page">
      <Row className="movie-row">
        <h2>Comming soon...</h2>
      </Row>
      <Row className="movie-row">
      <Image src={capture} alt="Movie Fight"></Image>
      </Row>
    </Container>
  );
}

export default MovieFighter;
