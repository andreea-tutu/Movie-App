import "./movie-fighter.scss";
import {Container, Row, Col} from "react-bootstrap";

function MovieFighter() {
  return (
    <Container fluid className="movie-fighter-page">
      <Row >
        <Col md={{ span: 3, offset: 2 }}>1 of 2</Col>
        <Col md={{ span: 2, offset: 2 }}>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default MovieFighter;
