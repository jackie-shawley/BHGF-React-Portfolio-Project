import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/logos etc/5 Be Happily Gluten Free Logo transparent.png';
import flower from '../images/logos etc/white flower.png';


export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render () {
        return (
            <React.Fragment>
                <Jumbotron fluid>                
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 d-none d-md-block pl-5 mt-5 text-md-right text-nowrap">
                                <a role="button" id="button" className="btn btn-dark btn-sm" data-toggle="modal" data-target="#mailListModal">Join Our Email List!</a>
                            </div>
                            <div className="col-12 col-md-6 img-container">
                                <a href="index.html">
                                    <img src={logo} className="img-fluid mx-auto d-block" alt="Be Happily Gluten Free Logo" />
                                </a>                      
                            </div>
                            <div className="col-6  mt-5 mb-3 d-md-none text-left text-nowrap">
                                <a role="button" id="button" className="btn btn-dark btn-sm" data-toggle="modal" data-target="#mailListModal">Join Our Email List!</a>
                            </div>
                            <div className="col-6 col-md-3 text-right text-md-left pl-5 mt-5">
                                <a role="button" id="button" className="btn btn-dark btn-sm" href="tel:+9876543210">Order Now</a>
                            </div>
                        </div>
                        <div className="row">                    
                            <div className="col">
                                <h1 className="text-center text-responsive">A <span>Gluten Free</span> Bakery &amp; Cafe</h1>             
                            </div>
                        </div>
                    </div>
                    <hr id="thickHR"></hr>
                </Jumbotron>

                <Navbar sticky="top" expand="md">
                    <div className="container d-flex">
                        <NavbarBrand href='./'><img src={ flower } height="50" width="50" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" /> Home
                                    <NavLink className="nav-link" to="/menu" /> Menu
                                    <NavLink className="nav-link" to="/ingredients" /> Ingredients
                                    <NavLink className="nav-link" to="/aboutus" /> About Us
                                    <NavLink className="nav-link" to="/contact" /> Contact
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}