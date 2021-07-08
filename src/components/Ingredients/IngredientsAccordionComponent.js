// import React, { Component } from 'react';
// import { AccordionData } from './AccordionData';
// import 'typeface-rokkitt';
// import 'typeface-rochester';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';
// import { Accordion } from 'semantic-ui-react';


// class IngredientsAccordion extends Component {
//     render() {
//         return(
//             <div>
//               const level1Panels = [
//   { title: 'Level 1A', content: 'Level 1A Contents' },
//   { title: 'Level 1B', content: 'Level 1B Contents' },
// ]

// const Level1Content = (
//   <div>
//     Welcome to level 1
//     <Accordion.Accordion panels={level1Panels} />
//   </div>
// )

// const level2Panels = [
//   { title: 'Level 2A', content: 'Level 2A Contents' },
//   { title: 'Level 2B', content: 'Level 2B Contents' },
// ]

// const Level2Content = (
//   <div>
//     Welcome to level 2
//     <Accordion.Accordion panels={level2Panels} />
//   </div>
// )

// const rootPanels = [
//   { title: 'Level 1', content: { content: Level1Content, key: 'content-1' } },
//   { title: 'Level 2', content: { content: Level2Content, key: 'content-2'         } },
// ]  
//             </div>
//         );
//     }
// }

// export default IngredientsAccordion;
import React, { Component } from 'react';
import { Card, Button, Accordion } from "react-bootstrap";



class IngredientsAccordion extends Component {

    render() {

        return (
            <div className='row row-content'>
                <div className='col-md-11 offset-2' style={{alignSelf: 'center'}}>
                    <Accordion defaultActiveKey='1'>
                        {this.props.ingredients.map(
                            (ingredient) => (
                                <div key={ingredient.id}>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant='link' eventKey={ingredient.id}>
                                               <h3>{ingredient.type}</h3>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={ingredient.id}>
                                            <Card.Body>
                                                <Accordion defaultActiveKey='1'>
                                                    {ingredient.products.map(
                                                        (product) => (
                                                            <div key={product.id}>
                                                                <Card>
                                                                    <div className='panel-header'>
                                                                        <Card.Header>
                                                                            <Accordion.Toggle as={Button} variant='link' eventKey={product.id}>
                                                                                <h5>{product.name}</h5>    
                                                                            </Accordion.Toggle>
                                                                        </Card.Header>
                                                                    </div>
                                                                    <Accordion.Collapse eventKey={product.id}>
                                                                        <Card.Body>
                                                                            <p>Ingredients: {product.ingred}
                                                                            <br />
                                                                            Contains: {product.contains}
                                                                            <br/>
                                                                            {product.maycontain}
                                                                            </p>
                                                                        </Card.Body>
                                                                    </Accordion.Collapse>
                                                                </Card>
                                                        </div>
                                                        )
                                                    )}
                                                </Accordion>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </div>
                            )

                        )}
                    </Accordion>
                </div>
            </div>
        );
    }
}


export default IngredientsAccordion;


