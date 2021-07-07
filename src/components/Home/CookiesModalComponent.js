import React, { Component } from 'react';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Card } from 'react-bootstrap';
 

class CookiesModal extends Component {
    render()  {  
        return(
            <Modal isOpen={this.props.isCookiesModalOpen} toggle={this.props.toggleCookiesModal}>
                <ModalHeader toggle={this.props.toggleCookiesModal} style={{text: 'center'}}>Custom Cookies for your BEST party</ModalHeader>
                <ModalBody>
                    <Card className='text-centered'id='modalCard'>
                        <Card.Img variant='top' src='/images/cookies/nyc cookies.jpeg' alt='NYC Cookies' style={{ height: 'auto', width: 'auto'}} />
                            <Card.Body>
                                <Card.Title>Those cookies are so....YOU</Card.Title>
                                <hr />
                                <Card.Text>
                                    <p>Purple Elephants? Sure. Rainbow Alphabet? You've got it. Congrats to your grad? Absolutely. You name it, and we'll make it beautiful, just for you.</p>
                                </Card.Text>
                            </Card.Body>
                    </Card>                    
                </ModalBody>
            </Modal>
        );
    }
}




export default CookiesModal