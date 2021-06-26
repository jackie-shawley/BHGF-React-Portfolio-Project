import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import NewCarousel from './3DCarouselComponent';

function HomePage(props) {
    return (
        <React.Fragment>
            <div >
                <NewCarousel />
            </div>
        </React.Fragment>
    );   
}

export default HomePage; 