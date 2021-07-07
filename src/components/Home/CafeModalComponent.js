import React, { Component } from 'react';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Card } from 'react-bootstrap';
 

class CafeModal extends Component {
    render()  {  
        return(
            <Modal isOpen={this.props.isCafeModalOpen} toggle={this.props.toggleCafeModal}>
                <ModalHeader toggle={this.props.toggleCafeModal} style={{text: 'center'}}>Have a cuppa</ModalHeader>
                <ModalBody>
                    <Card className='text-centered'>
                        <Card.Img variant='top' src='/images/cafe/tea milk bottles.jpeg' alt='Tea in milk bottles' style={{ height: 'auto', width: 'auto'}} />
                            <Card.Body>
                                <Card.Title>Organic Tea and Fairtrade Coffee for the healthiest you</Card.Title>
                                <Card.Text>
                                    <p>Come in to our cafe and have a choose from our carefully curated selection of organic loose-leaf teas, or try a cup of our shade-grown, fairtrade, locally-roasted coffee. Stay and relax, or take one to go.</p>
                                </Card.Text>
                            </Card.Body>
                    </Card>                    
                </ModalBody>
            </Modal>
        );
    }
}




export default CafeModal