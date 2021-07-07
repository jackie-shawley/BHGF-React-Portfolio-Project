import React, { Component } from 'react';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Card } from 'react-bootstrap';
 

class CakeModal extends Component {
    render()  {  
        return(
            <Modal isOpen={this.props.isCakesModalOpen} toggle={this.props.toggleCakesModal}>
                <ModalHeader toggle={this.props.toggleCakesModal} style={{text: 'center'}}>Cakes for Any Occasion</ModalHeader>
                <ModalBody>
                    <Card className='text-centered'>
                        <Card.Img variant='top' src='/images/cakes/rose cake.jpeg' alt='Rose Cake' style={{ height: 'auto', width: 'auto'}} />
                            <Card.Body>
                                <Card.Title>Cake with Buttercream Rose Design</Card.Title>
                                <Card.Text>
                                    <p>Soft and sweet, our cakes can be custom-made to suit your dietary needs, and decorated to please your creative heart. Pick up a cake from the bakery case, or order one for your special occasion today!</p>
                                </Card.Text>
                            </Card.Body>
                    </Card>                    
                </ModalBody>
            </Modal>
        );
    }
}




export default CakeModal