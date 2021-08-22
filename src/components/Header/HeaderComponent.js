import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    constructor(props) {
        super(props);


        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
       
    }

    handleSignUp(event) {
        alert(`Thanks ${this.firstname.value}, we appreciate you!`);
        this.toggleModal();
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

   
    

    render () {
        return (
            <React.Fragment>
                <Jumbotron fluid className="mb-n5">                
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-3 d-none d-md-block pl-5 mt-5 text-md-right text-nowrap">
                                <span className="btn btn-dark btn-sm" id="button" onClick={this.toggleModal}>Join Our Email List!</span>
                                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                        <ModalHeader toggle={this.toggleModal}>Join Our Email List?</ModalHeader>
                                        <ModalBody>
                                            Stay up to date with our specials, sales and new yummy treats!
                                            <Form onSubmit={this.handleSignUp}>
                                                <FormGroup>
                                                    <Input type="firstname" id="firstname" name="firstname" placeholder="First Name" innerRef={input => this.firstname = input}/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input type="email" id="email" name="email" placeholder="Email Address" innerRef={input => this.email = input}/>
                                                </FormGroup>                    
                                                <Button type="button" value="close" className="btn btn-secondary btn-sm ml-auto" onClick={this.toggleModal}>No Thanks!</Button>
                                                <Button type="submit" value="submit" className="btn btn-info btn-sm ml-1">Submit</Button>
                                            </Form>
                                        </ModalBody>
                                    </Modal>
                            </div>
                            <div className="col-12 col-md-6">
                                <a href='./'>
                                    <img src='/images/logos etc/5 Be Happily Gluten Free Logo transparent.png' className="img-fluid mx-auto d-block" alt="Be Happily Gluten Free Logo" />
                                </a>                      
                            </div>
                            <div className="col-6  mt-5 mb-3 d-md-none text-left text-nowrap">
                                <Button type='button' id='button' className='btn btn-dark btn-sm' onClick={this.toggleModal}>Join Our Email List!</Button>
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
                    <hr id="thickHR" className="mb-n3" />
                </Jumbotron>

                <Navbar sticky="top" expand="md">
                    <div className="container mt-n1">
                        <NavbarBrand href='./'><img src='/images/logos etc/white flower.png' height="50" width="50" alt="white flower" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink activeClassName='active' className='nav-link' to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink activeClassName='active' className='nav-link' to='/menu'>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink activeClassName='active' className='nav-link' to='/ingredients'>Ingredients</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink activeClassName='active' className='nav-link' to='/aboutus'>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink activeClassName='active' className='nav-link' to='/contact'>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                
            </React.Fragment>
        );
    }
}



