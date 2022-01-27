import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/png/logo512.png'
import CartWidget from './CartWidget';



const NavBarBs = () => {
    return (
        <>
            <Navbar variant="dark" style={{ backgroundColor: 'gray' }}>
                <img src={logo} alt="logo" style={{ height: '60px', width: '60px' }} />
                <Navbar.Brand href="#home">La Tiendita</Navbar.Brand>
                <Container>
                    <Nav className="me-auto ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Remeras</Nav.Link>
                        <Nav.Link href="#pricing">Zapatillas</Nav.Link>
                    </Nav>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    )
}

export default NavBarBs
