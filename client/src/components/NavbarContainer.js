import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const NavbarContainer = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">
            <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Python Web Interpreter
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavbarContainer;