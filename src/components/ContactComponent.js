import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import GoogleMap from './MapComponent';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            mailList: '',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or fewer characters';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or fewer characters'
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
       
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email)

        return (            
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb> 
                        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
                        <hr id="thinHR" className="mx-auto"></hr>                       
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                     <p>Have questions? Feedback? Want to place an order? We'd <span id="love">love</span> to hear from you!</p>
                    </div>
                </div>  
                <div className='container container-fluid'>              
                    <div className='row row-content mt-3'>
                        <div className='col-8' md={{size: 8, offset: 2}}>
                            <GoogleMap />
                        </div>
                        <div className='col col-md-4 align-self-center'id='address'>
                            <p>708 S Lumina Ave <br />
                                Wrightsville Beach, NC 28480 <br />
                                <a role="button" className="btn btn-link btn-lg"  href="tel:+9876543210">(987)867-5309</a><br />
                                <a role="button" className="btn btn-link btn-lg pl-0" href="mailto:behappilyglutenfree@gmail.com">behappilyglutenfree@gmail.com</a></p><br />
                                <p class="text-center">Connect with us on social media for lots of yummy pictures and yummy sales!</p>
                                <div class="col text-center">
                                <a className="btn btn-social-icon btn-instagram ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>{' '}
                                <a className="btn btn-social-icon btn-facebook ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
                                <a className="btn btn-social-icon btn-twitter ml-1 mr-1 ml-md-3 mr-md-3" target="_blank" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>{' '} 
                                </div>
                        </div>
                    </div>
                </div>

                <hr id="thinHR" class="mx-auto"></hr>

                <div className="row">
                    <div className="col text-center mt-5 mb-3">
                        <h2>Contact us the Easy Way:</h2>
                    </div>
                </div>

                <div className='col-md-10 offset-1'>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor='firstName' md={3}>First Name:</Label>
                            <Col md={8}>
                                <Input type='text' id='firstName' name='firstName'
                                    placeholder='First Name'
                                    value={this.state.firstName}
                                    invalid={errors.firstName}
                                    onBlur={this.handleBlur('firstName')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='lastName' md={3}>Last Name;</Label>
                            <Col md={8}>
                                <Input type='text' id='lastName' name='lastName'
                                    placeholder='Last Name'
                                    value={this.state.lastName}
                                    invalid={errors.lastName}
                                    onBlur={this.handleBlur('lastName')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='phoneNum' md={3}>Telephone:</Label>
                            <Col md={8}>
                                <Input type='tel' id='phoneNum' name='phoneNum'
                                    placeholder='Telephone'
                                    value={this.state.phoneNum}
                                    invalid={errors.phoneNum}
                                    onBlur={this.handleBlur('phoneNum')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.phoneNum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='email' md={3}>Email:</Label>
                            <Col md={8}>
                                <Input type='email' id='email' name='email'
                                    placeholder='Email'
                                    value={this.state.email}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup check>
                            <Label check md={3}>
                            <Col >
                                <Input type="checkbox"
                                    name="agree"
                                    checked={this.state.agree}
                                    onChange={this.handleInputChange} /> {' '}
                                <strong>Join our Email List?</strong>
                            </Col>
                            </Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='feedback' md={3}>Feedback:</Label>
                            <Col md={8}>
                                <Input type='textarea' id='feedback' name='feedback'
                                    rows='12'
                                    placeholder='Feedback'
                                    value={this.state.feedback}
                                    invalid={errors.feedback}
                                    onBlur={this.handleBlur('phoneNum')}
                                    onChange={this.handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 5}}>
                                <Button type='submit' color='info' outline>
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;