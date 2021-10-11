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


