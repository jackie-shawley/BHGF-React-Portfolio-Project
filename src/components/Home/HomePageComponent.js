import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import NewCarousel from './3DCarouselComponent';
import GoogleMap from '../MapComponent';

function HomePage(props) {
    return (
       
            <div >
                <NewCarousel />
                <GoogleMap />
                <br />
            </div>
        
    );   
}

export default HomePage; 