import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AllergenWarningModal extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isModalOpen: true
      };

      this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

  render() {

    return (
      <div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg" centered>
          <ModalHeader toggle={this.toggleModal}>
            <img src='/images/logos etc/white flower.png' height="50" width="50" alt="white flower" />
            Allergens
          </ModalHeader>
          <ModalBody>
            Please be aware that we do use common allergens in our bakery, including Peanuts, Tree Nuts, Eggs and Milk. We take great care when working with our ingredients and preparing your food. We start the day by making baked goods with the least allergens, and work our way up. We have a completely separate area of the kitchen dedicated to preparing recipes that use Peanuts and/or Tree Nuts, and we also have color-coded bowls, baking utensils and pans, and we even have a separate mixer that is used ONLY for items containing Peanuts and Tree Nuts. We understand the severe allergic reactions that some people have to certain allergens and will always work hard to keep you safe. We will always be transparent with our baking practices, as well as our ingredients. Please do not hesitate to ask if you have ANY questions about our food, drinks or our preparation. Happy Eating!
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AllergenWarningModal;