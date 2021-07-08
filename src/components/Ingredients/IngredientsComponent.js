import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardFooter,CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import AllergenWarningModal from './AllergenWarningModalComponent';
import IngredientsAccordion from './IngredientsAccordionComponent';
import { PicturesData } from './PicturesData';
import { Collapse } from 'react-bootstrap';
import { AccordionData } from './AccordionData';



function RenderPhoto({ picture }) {
    const [open, setOpen] = useState(false);

    return (
        <Card>
            <CardImg top src={picture.image} alt={picture.name} onClick={() => setOpen(!open)} />
            <Collapse in={open}>
                <div>
                    <CardBody>
                        <div>
                            {picture.description}
                        </div>
                    </CardBody>
                </div>
            </Collapse>
            <CardFooter>{picture.name}</CardFooter>
        </Card>
    );
}

class Ingredients extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: PicturesData,
            ingredients: AccordionData
        };
    }

    render() {

        const photos = PicturesData.map(picture => {
            return (
                <div key={picture.id}>
                    <RenderPhoto picture={picture} />
                </div>
            )
        })

        return ( 
            <React.Fragment>
                <AllergenWarningModal />
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Ingredients</BreadcrumbItem>
                            </Breadcrumb>                        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {photos[0]}
                    </div>
                    <div className="col-md-4">
                        {photos[1]}
                    </div>
                    <div className="col-md-4">
                        {photos[2]}
                    </div>
                </div>
                <br />
                <h2 style={{textAlign: 'center'}}>Ingredients</h2>
                <hr id="thinHR" className="mx-auto"></hr>
                <br />
                <div className='col-md-10' style={{alignSelf: 'center'}}>
                    <IngredientsAccordion ingredients={this.state.ingredients} />
                </div>
                <br />
                <hr id="thinHR" className="mx-auto"></hr>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-4">
                        {photos[3]}
                    </div>
                    <div className="col-md-4">
                        {photos[4]}
                    </div>
                    <div className="col-md-4">
                        {photos[5]}
                    </div>
                </div>
                <div></div>
                


            </React.Fragment>
        );   

    }

    

}
export default Ingredients;