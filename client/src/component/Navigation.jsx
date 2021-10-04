import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
            <Container style={{ maxWidth:'1100px', margin: '0 auto', padding: 0 }}>
                <Navbar.Brand href="#home">Todo Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto" />
                    <Nav>
                        <Nav.Link href="/add-task">Add Todo</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;