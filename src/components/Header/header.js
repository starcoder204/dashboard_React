import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/images/logo.png';

import './header.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'John Doe'
    }
  }

  render() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/main"><img src={logo}></img></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link eventKey="1" href="/main">Home</Nav.Link>
                  <Nav.Link href="/plan">Plans</Nav.Link>
                  <Nav.Link href="/setting">Settings</Nav.Link>
                </Nav>
                <Form inline>
                  <NavDropdown title={this.state.name} id="basic-nav-dropdown" className="justify-content-end">
                    <NavDropdown.Item href="/login">Log out</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/setting">Settings</NavDropdown.Item>
                  </NavDropdown>
                </Form>
              
              </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}

export default Header;