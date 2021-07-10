import React, { Component } from 'react';
import NewCarousel from './3DCarouselComponent';
import GoogleMap from '../MapComponent';
import CakeModal from './CakeModalComponent';
import CafeModal from './CafeModalComponent';
import CookiesModal from './CookiesModalComponent';
import { Row, Col } from 'react-bootstrap';
import { Reviews } from './ReviewsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCakesModalOpen: false,
            isCafeModalopen: false,
            isCookiesModalOpen: false
            };

        this.toggleCakesModal = this.toggleCakesModal.bind(this);
        this.toggleCafeModal = this.toggleCafeModal.bind(this);
        this.toggleCookiesModal = this.toggleCookiesModal.bind(this)

    }

    

    toggleCakesModal() {
        this.setState({
            isCakesModalOpen: !this.state.isCakesModalOpen
        });
    }

    toggleCafeModal() {
        this.setState({
            isCafeModalOpen: !this.state.isCafeModalOpen
        });
    }

    toggleCookiesModal() {
        this.setState({
            isCookiesModalOpen: !this.state.isCookiesModalOpen
        });
    }
   

    render() {

        return (       
            <div>
                <div className='row-content'>
                    <NewCarousel />
                </div>
                <br />
                <hr id="thinHR" className="mx-auto"></hr>
                <div className='container'>
                <Row className='row-content'>
                    <Col className="zoom" md={4}>
                        <img 
                            src="images/cakes/rose cake.jpeg" 
                            style={{ height: '250px', width: 'auto', cursor: 'pointer'}}
                            alt='Rose cake' 
                            onClick={this.toggleCakesModal}
                            className='img-thumbnail'
                            
                        />
                        <h5 onClick={this.toggleCafeModal}>Custom Cakes</h5>        
                    </Col>
                    <Col className='zoom' md={4}>
                        <img 
                            src="images/cafe/tea milk bottles.jpeg" 
                            style={{ height: '250px', width: 'auto', cursor: 'pointer'}}  
                            alt='Tea in milk bottles' 
                            onClick={this.toggleCafeModal}
                            className='img-thumbnail'
                        />
                        <h5 onClick={this.toggleCafeModal}>Organic Teas and Coffee</h5>
                    </Col>
                    <Col className='zoom' md={4}>
                        <img 
                            src="/images/cookies/nyc cookies.jpeg" 
                            style={{ height: '250px', width: 'auto', cursor: 'pointer'}}  
                            alt='NYC Cookies' 
                            onClick={this.toggleCookiesModal}
                            className='img-thumbnail'
                        />
                        <h5 onClick={this.toggleCafeModal}>Hand-Decorated Cookies</h5>
                    </Col>
                </Row>
                </div>
                    <CakeModal isCakesModalOpen={this.state.isCakesModalOpen} toggleCakesModal={this.toggleCakesModal} />
                    <CafeModal isCafeModalOpen={this.state.isCafeModalOpen} toggleCafeModal={this.toggleCafeModal} />
                    <CookiesModal isCookiesModalOpen={this.state.isCookiesModalOpen} toggleCookiesModal={this.toggleCookiesModal} />

                <br />
                <hr id="thinHR" className="mx-auto"></hr>

                <Row className='rowContent'>
                    <Reviews />
                </Row>
                <br />
                <hr id="thinHR" className="mx-auto"></hr>
                
                <div className='container container-fluid'>              
                    <div className='row-content'>
                        <GoogleMap />
                    </div>
                </div>
                <br />
            </div>
        
        );
    }       
}

export default HomePage;  