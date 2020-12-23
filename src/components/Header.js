import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';


export default function Header() {
    const {isAuthenticated, isLoading} = useAuth0();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">FamilyFroots</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Recipes</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Nav>
                    {isLoading || isAuthenticated ? <LogoutButton/> : <LoginButton/>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

