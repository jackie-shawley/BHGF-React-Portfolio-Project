import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <React.Fragment>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 style={{textAlign: 'center'}}>Menu</h2>
                        <hr id="thinHR" class="mx-auto"></hr>                        
                    </div>
                </div>
            </div>

            <div className="row row-content">
                <div className="col" id="menu">
                    <div className="row">
                        <div className="col">
                            <h3 style={{textDecorationLine: 'underline', textAlign: 'left'}}>Cookies</h3>
                        </div>
                    </div>
                {/* --cookies start here-- */}
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Chocolate Chip Cookies</h6>
                            <p>Sweet, but not too sweet, soft and full of nostalgia. We can even warm them up for you. </p>                       
                        </div>
                        <div className="col-12 col-md-4">
                            <p className="text-right">One Cookie..........$2.00</p>                
                            <p className="text-right">A plate to share (6 cookies)..........$10.00</p>
                            <p className="text-right">A Baker's Dozen (13 cookies)..........$19.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>White Chocolate Cranberry Oatmeal Cookies</h6>
                            <p>Always a crowd pleaser, these cookies are sweet and soft, full of white chocolate chips and dried cranberries, and have a delightful caramelized bottom. </p>                       
                        </div>
                        <div className="col-12 col-md-4">
                            <p className="text-right">One Cookie..........$2.00</p> 
                            <p className="text-right">A plate to share (6 cookies)..........$10.00</p>
                            <p className="text-right">A Baker's Dozen (13 cookies)..........$19.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Peanut Butter Chocolate Chunk Cookies</h6>
                            <p>Soft, thick and full of chocolate chunks. Mmmmmmm. </p>                       
                        </div>
                        <div className="col-12 col-md-4">
                            <p className="text-right">One Cookie..........$2.00</p> 
                            <p className="text-right">A plate to share (6 cookies)..........$10.00</p>
                            <p className="text-right">A Baker's Dozen (13 cookies)..........$19.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Sugar Cookies with Royal Icing</h6>
                            <p>Decorated to match the season or our mood, these buttery cookies will make you smile. Want custom cookies to suit YOUR mood? Just ask! </p>                       
                        </div>
                        <div className="col-12 col-md-4">   
                            <br />   
                            <br />                  
                            <p className="text-right">Prices vary</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Grain Free Chocolate Chip Cookies</h6>
                            <p>These cookies are our favorite - super soft, full of chocolate chunks, and a "healthy" choice (I mean, it's still a cookie, right?). </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <p className="text-right">One Cookie..........$2.50</p>  
                            <p className="text-right">A plate to share (6 cookies)..........$12.00</p>
                            <p className="text-right">A Baker's Dozen (13 cookies)..........$22.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Daily Special</h6>
                            <p>Check in with us to see what we've made special today! </p>                       
                        </div>                    
                    </div>
                    <hr />
            
                    {/* <!--cakes start here--> */}

                    <div className="row">
                        <div className="col">
                            <h3 style={{textDecorationLine: 'underline'}}>Cake</h3>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Triple Chocolate Capuccino Cake</h6>
                            <p>This is it folks, the hands-down most popular item in the bakery. Made with espresso in the cake and the icing, lots of cocoa, chocolate chips AND chocolate chunks - this cake will knock your socks off. And there's more great news - this cake can be made dairy-free to make your tummy happier. </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <br />  
                            <br />                     
                            <p className="text-right">By the Slice..........$7.00</p>
                            <p className="text-right">The Whole Thing..........$50.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>White Cake</h6>
                            <p>This cake is light and fluffy with just a hint of almond flavor. Topped with our regular or dairy-free buttercream icing, it's an absolute delight. Can be made as a sheet cake or a layer cake and decorated just for you.  </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <br />
                            <br />                       
                            <p className="text-right">By the Slice..........$5.00</p>
                            <p className="text-right">Ask for sheet and layer cake pricing</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Chocolate Cake</h6>
                            <p>Rich and chocolaty, this cake will take you back to your 8th birthday. Topped with our regular or dairy-free buttercream icing, this cake will have you licking your plate. Can be made as a sheet cake or a layer cake to meet all of your cakey needs.  </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <br />
                            <br />                       
                            <p className="text-right">By the Slice..........$5.00</p>
                            <p className="text-right">Ask for sheet and layer cake pricing</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Daily Special</h6>
                            <p>Check in with us to see what we've made special today! </p>                       
                        </div>                    
                    </div>
                    <hr />

                    {/* <!--muffins start here--> */}

                    <div className="row">
                        <div className="col">
                            <h3 style={{textDecorationLine: 'underline'}}>Muffins</h3>
                        </div>
                    </div>               
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Sweet Summer Berry</h6>
                            <p>These giant muffins are filled to the brim with organic strawberries, blackberries and blueberries. They might be big enough to share, but you probably won't want to. </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <br />           
                            <p className="text-right">Each..........$6.00</p>
                            <p className="text-right">A half-dozen..........$33.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Chocolate Chip Heaven</h6>
                            <p>Oversized and overstuffed with chocolate chips. Sounds like heaven to me. </p>                       
                        </div>
                        <div className="col-12 col-md-4">                                  
                            <p className="text-right">Each..........$6.00</p>
                            <p className="text-right">A half-dozen..........$33.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Banana Nut Crumble</h6>
                            <p>A great big take on an old classNameic, topped with our special brown sugar crumble. </p>                       
                        </div>
                        <div className="col-12 col-md-4">                                    
                            <p className="text-right">Each..........$6.00</p>
                            <p className="text-right">A half-dozen..........$33.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Daily Special</h6>
                            <p>Check in with us to see what we've made special today! </p>                       
                        </div>                    
                    </div>
                    <hr />

                    {/* <!--breads start here--> */}

                    <div className="row">
                        <div className="col">
                            <h3 style={{textDecorationLine: 'underline'}}>Bread</h3>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Hearty Sandwich Bread</h6>
                            <p>A homestyle sandwich bread sure to make you eat way too many sandwiches. This bread makes the BEST toast...do you want a piece? </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <br />           
                            <p className="text-right">Two Thick Slices of Toast..........$4.00</p>
                            <p className="text-right">By the Loaf..........$7.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Soft Sandwich Rolls</h6>
                            <p>Delightfully light and fluffy, these rolls can be eaten for just about any meal. They freeze well too, so stock your freezer in case the apocalypse comes early. </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <br /> 
                            <br />          
                            <p className="text-right">By the Dozen..........$10.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Pumpkin Spice Bread</h6>
                            <p>A seasonal favorite, this rich bread is full of all your favorite warming spices. Round out your pumpkin spice game with a pumpkin spice latte from the cafe. And don't forget to ask us for our famous Pumpkin Spice Bread Stuffing for your holiday table! </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <br />    
                            <br />       
                            <p className="text-right">One Thick Slice with butter..........$4.00</p>
                            <p className="text-right">By the Loaf..........$9.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Daily Special</h6>
                            <p>Check in with us to see what we've made special today! </p>                       
                        </div>                    
                    </div>
                    <hr />

                    {/* --coffee starts here-- */}

                    <div className="row">
                        <div className="col">
                            <h3 style={{textDecorationLine: 'underline'}}>Coffee</h3>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Espresso</h6>
                            <p>Our clean, medium roast coffee brewed quick and strong </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <h6>{' '}</h6>
                            <br />                                          
                            <p className="text-right">By the Shot..........$1.50</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Americano</h6>
                            <p>Two shots of our espresso topped off with hot water (Jackie's favorite!)</p>                       
                        </div>
                        <div className="col-12 col-md-4">
                            <h6>{' '}</h6> 
                            <br />                                          
                            <p className="text-right">Small or Large..........$2.50 / $3.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Latte</h6>
                            <p>Two shots of our espresso in steamed milk (dairy free available!) </p>                       
                        </div>
                        <div className="col-12 col-md-4">
                            <h6>{' '}</h6> 
                            <br />                                          
                            <p className="text-right">Small or Large..........$3.00 / $4.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Capuccino</h6>
                            <p>One shot of our espresso in steamed milk (dairy free available!) with an artistic foamy top to make you smile </p>                       
                        </div>
                        <div className="col-12 col-md-4">
                            <h6>{' '}</h6> 
                            <br />                                          
                            <p className="text-right">Small or Large..........$3.00 / $4.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Drip Coffee</h6>
                            <p>Our clean, medium or dark roast brewed fresh thr /oughout the day. Bring your own to-go cup and save $.50! </p>                       
                        </div>
                        <div className="col-12 col-md-4">
                            <h6>{' '}</h6> 
                            <br />                                          
                            <p className="text-right">Small or Large..........$2.00 / $3.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Cold Brew Coffee</h6>
                            <p>Made fresh in-house every night so you can have your morning pick-me-up. Add milk or dairy-free milk for a creamy treat! </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <h6>{' '}</h6>
                            <br />
                            <br />                                         
                            <p className="text-right">Small or Large..........$3.50 / $4.50</p>
                        </div>
                    </div>
                    <hr />

                    {/* <!--tea starts here!--> */}
                    <div className="row">
                        <div className="col">
                            <h3 style={{textDecorationLine: 'underline'}}>Tea</h3>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Hot or Iced Tea</h6>
                            <p>Choose from our organic herbal tea selection, or go with something stronger </p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <h6>{' '}</h6>
                            <br />                                                         
                            <p className="text-right">Small or Large..........$2.50 / $3.50</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Chai Tea Latte</h6>
                            <p>Made with our own house-made chai concentrate. Lightly sweetened and combined with milk (dairy free if you want it!) for a delightful chai experience</p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <h6>{' '}</h6>
                            <br />  
                            <br />                                                       
                            <p className="text-right">Small or Large..........$3.50 / $4.50</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Specialty Iced Tea</h6>
                            <p>Made fresh daily with a selection of fresh herbs and tea.</p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <h6>{' '}</h6>
                            <br />                                                         
                            <p className="text-right">Small or Large..........$3.00 / $4.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-8">                        
                            <h6>Specialty Iced Tea Popsicles</h6>
                            <p>Our Specialty Iced Tea made into a refreshing popsicle - great for adults who are young at heart!</p>                       
                        </div>
                        <div className="col-12 col-md-4"> 
                            <h6>{' '}</h6>
                            <br />                                                         
                            <p className="text-right">One Popsicle..........$4.00</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        
        
        





        </React.Fragment>

    );
}

export default Menu;