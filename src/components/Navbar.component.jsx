import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../logo.png'
import { Link } from 'react-scroll'

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg" fixed='top'>
            <div className='container'>
                <Navbar.Brand href="#home" to='home'><img className='logo' src={logo} alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link smooth={true} to='home' className='nav-link mr-3' href="#home">Home</Link>
                        <Link smooth={true} to='about' offset={-95} className='nav-link mr-3' href="#aboutme">About me</Link>
                        <Link smooth={true} to='services' offset={-90} className='nav-link mr-3' href="#services">Services</Link>
                        <Link smooth={true} to='experience' offset={-90} className='nav-link mr-3' href="#howwork">Experience</Link>
                        <Link smooth={true} to='portfolio' offset={-90} className='nav-link mr-3' href="#portfolios">portfolio</Link>
                        <Link smooth={true} to='contact' className='nav-link mr-5' href="#contact">contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarComponent
