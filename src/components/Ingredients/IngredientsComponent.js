import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import AllergenWarningModal from './AllergenWarningModalComponent';
import IngredientsAccordion from './IngredientsAccordionComponent';




function Ingredients () {

        return ( 
            <React.Fragment>
                <AllergenWarningModal />
          
                <IngredientsAccordion />   
                


            </React.Fragment>
        );   

}
export default Ingredients;