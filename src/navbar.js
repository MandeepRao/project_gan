import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./alllinks/home";
import About from "./alllinks/about";

const Navba = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navba;
