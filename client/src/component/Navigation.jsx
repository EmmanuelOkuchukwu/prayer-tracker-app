import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { AuthService } from '../service/authService';
import { useHistory } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigationbar = () => {
    const history = useHistory();
    const [user, setUser] = useState(null);
    useEffect(() => {
        function getUser() {
            AuthService.currentUser.subscribe(value => {
                setUser(value);
            })
        }
        return getUser()
    }, [])
    const handleLogout = (evt) => {
        evt.preventDefault();
        AuthService.onLogout();
        history.push('/login');
    }
    return (
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
            <Container style={{ maxWidth:'1100px', margin: '0 auto', padding: 0 }}>
                <Navbar.Brand href="/task-center">Task Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="me-auto" />
                    <Nav>
                        {user?.token ?
                            <NavDropdown title={user?.username} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown> : ''
                        }
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
