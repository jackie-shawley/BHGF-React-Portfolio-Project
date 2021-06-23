import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import logo from '../images/logos etc/5 Be Happily Gluten Free Logo transparent.png';

export default class Header extends Component {
    render () {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 img-container">
                                <a href="/">
                                    <img src={logo} className="img-fluid mx-auto d-block" alt="Be Happily Gluten Free logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}