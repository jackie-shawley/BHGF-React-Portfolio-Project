import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Reviews = () => {
    return(
       <div className='container'>
            <div className='row row-content'>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem'}}>
                        <Card.Img variant='top' src='/images/cakes/tiered blue cake.jpeg' style={{ height: 'auto', width: 'auto'}} />
                        <Card.Body>
                            <Card.Title><h3>Rumor Has It...</h3></Card.Title>
                            <hr />
                            <Card.Text>
                                <p>This bakery is the BEST bakery! I have been searching for years to find gluten free goodies that don't taste gluten free...and I've finally found them! I'm so happy to have finally found a place that makes all of my gluten-eating family jealous! And I'm even happier to have found somewhere to get my daughter's birthday cake - now she can feel "normal" like all the other kids on her birthday. Thank you Be Happily Gluten Free! I will be back!!</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <h3>~ Google Reviews</h3>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='col-md-6'>
                    <Card style={{ width: '30rem'}}>
                        <Card.Img variant='top' src='/images/cafe/tea on linen resized.png' style={{ height: 'auto', width: 'auto'}} />
                        <Card.Body>
                            <Card.Title><h3>Rumor Has It...</h3></Card.Title>
                            <hr />
                            <Card.Text>
                                <p>YUM!! This bakery has it figured out! We were on vacation and looking for a gluten free snack, and Be Happily Gluten Free Bakery & Cafe showed up in our Google search. We were NOT disappointed! My husband and I both eat strictly gluten free and always seek out local places like this when we travel. This is the absolute best one we have ever found. I had a (huge!) slice of the Triple Chocolate Capuccino Cake, and my husband had a Jumbo cupcake - they were both to die for! We are also tea drinkers and were so excited to see such an awesome selection of organic teas AND oat milk to put in them. Just WOW!</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <h3>~ Google Reviews</h3>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div> 
    );
}

