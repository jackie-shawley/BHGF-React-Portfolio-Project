import React, { Component } from 'react';
import {  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input } from 'reactstrap';

class EmailModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.isModalOpen = this.isModalOpen.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    //post to server in handleSignUp; use fetch API to do this
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

    render() {
        return(

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
                        <Button type="button" toggle={this.toggleModal} color="secondary">No Thanks!</Button>
                        <Button type="submit" value="submit" color="info">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }


}

export default EmailModal;
