import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Menubar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="bg-danger nav navbar-fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">My Lib</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to="/student" active={location.pathname === '/student'}>Add New User</Nav.Link>
            <Nav.Link as={Link} to="/addbook" active={location.pathname === '/addbook'}>Add Books</Nav.Link>
            <Nav.Link as={Link} to="/issuebook" active={location.pathname === '/issuebook'}>Issue/Return Book</Nav.Link>
            <Nav.Link as={Link} to="/allbooks" active={location.pathname === '/allbooks'}>All Books</Nav.Link>
            <Nav.Link as={Link} to="/AllUsers" active={location.pathname === '/AllUsers'}>All Users</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;




