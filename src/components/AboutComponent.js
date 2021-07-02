import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function AboutUs(props) {
    return (
        <div className="container" display="flex">
            <div className="row align-self-center" id="aboutUs">
                <div className="col-12">
                
                    <div className="float-right col-md-9">
                        <figure className="figure">
                            <img id="ownerPhoto" className="img-thumbnail img-figure img-responsive rounded align-self-center" src="images/Luanne and Jackie.png" alt="Luanne and Jackie" />
                            <figcaption>
                              Luanne and Jackie at their favorite place - the beach!
                        </figcaption>                          
                        </figure>                                                                      
                    </div>                       
                    <p id="aboutOwners">Luanne and Jackie are a mother-daughter team who got tired of eating lousy gluten-free food. Just like you, probably. Jackie brought her love of web design, her business sense and her creative hand to the partnership, and Luanne brought the most important thing - unparalleled baking skills! No one can develop a recipe like her (true story!). They wanted to offer a place for people with dietary restrictions to come and enjoy, and they knew they would do it without compromising quality and taste. Now, people from far and wide can enjoy a luxurious cafe breakfast (or lunch or afternoon snack!) while they're on vacation, and they can order their favorites to be shipped directly to their home. Locals can enjoy birthday cakes and wedding cakes that are even better than their gluten-filled (no thank you!) counterparts. It is important to Lu and Jackie that all guests feel comforable, safe eating their food, and totally and completely <span>spoiled.</span></p>
                </div>
            </div>
        </div> 
    );
}

export default AboutUs;