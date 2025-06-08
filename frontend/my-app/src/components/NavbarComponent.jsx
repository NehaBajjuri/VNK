import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NavbarComponent.css"; // Make sure this file exists in the same folder

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm rounded-bottom">
      <Container fluid>
        {/* Brand on the left */}
        <Navbar.Brand 
          className="nameDecor"
                href="#home">Vinay Kiranam</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Align nav items to the right */}
          <Nav className="ms-auto align-items-center navItemDecor">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link className="navItemDecor" href="#search">Search</Nav.Link>
            <Nav.Link className="navItemDecor" href="#about">About Us</Nav.Link>
            {/* Attention-grabbing form */}
            {/* <Form className="d-flex ms-3">
              <Form.Control
                type="text"
                placeholder="Your Name"
              aria-label="Name"
                autoFocus
                required
              />
              <Button variant="primary" type="submit">
                Submit
              </Button> */}
            {/* </Form> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
