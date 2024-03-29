import "./header.scss";
import { Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Navbar className="darkCustom" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/home"  className="brand" href="home">
          <FontAwesomeIcon icon={faFilm} pull="left" />
          Movie Time
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="w-100 nav-justified" fill variant="tabs">
            <Nav.Item>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="Movies" id="navbar-dark-example">
                <NavDropdown.Item as={Link} to="/action" className="myDropdown">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/adventure"
                  className="myDropdown"
                >
                  Adventure
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/animation"
                  className="myDropdown"
                >
                  Animation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/comedy" className="myDropdown">
                  Comedy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/family" className="myDropdown">
                  Family
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/fantasy"
                  className="myDropdown"
                >
                  Fantasy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/horror" className="myDropdown">
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/thriller"
                  className="myDropdown"
                >
                  Thriller
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="TV Series" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/actionTV"
                  className="myDropdown"
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/animationTV"
                  className="myDropdown"
                >
                  Animation
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/comedyTV"
                  className="myDropdown"
                >
                  Comedy
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/documentaryTV"
                  className="myDropdown"
                >
                  Documentary
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/familyTV"
                  className="myDropdown"
                >
                  Family
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/mysteryTV"
                  className="myDropdown"
                >
                  Mystery
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/realityTV"
                  className="myDropdown"
                >
                  Reality
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/favourites">
                My Favourites
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/movie-fighter">
                Movie Fight
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Form inline>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={props.value}
                  onChange={(event) => props.setSearchValue(event.target.value)}
                />
              </Form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
