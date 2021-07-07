import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardFooter,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import AllergenWarningModal from './AllergenWarningModalComponent';
import IngredientsAccordion from './IngredientsAccordionComponent';
import { PicturesData } from './PicturesData'


function RenderPhoto({ picture }) {
    return (
        <Card>
            <Link to={`/photos/${picture.id}`}>
                <CardImg  src={picture.image} alt={picture.name} />
                    <CardFooter>{picture.name}</CardFooter>               
            </Link>
        </Card>
    );
}

class Ingredients extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures: PicturesData
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
                <div>
                    {/* <IngredientsAccordion /> */}
                </div> 
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