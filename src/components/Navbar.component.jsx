import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../logo.png'

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className='container'>
                <Navbar.Brand href="#home"><img className='logo' src={logo} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='nav-link mr-5' href="#home">Home</Nav.Link>
                        <Nav.Link className='nav-link mr-5' href="#aboutme">About me</Nav.Link>
                        <Nav.Link className='nav-link mr-5' href="#services">Services</Nav.Link>
                        <Nav.Link className='nav-link mr-5' href="#howwork">Experience</Nav.Link>
                        <Nav.Link className='nav-link mr-5' href="#portfolios">portfolios</Nav.Link>
                        <Nav.Link className='nav-link mr-5' href="#contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarComponent
