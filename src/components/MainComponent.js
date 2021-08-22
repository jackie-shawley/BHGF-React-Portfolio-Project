import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/HeaderComponent';
import HomePage from './Home/HomePageComponent';
import Ingredients from './Ingredients/IngredientsComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';


export default function Main () {
   
        const location = useLocation()
        
        return (
            <div>
                <Header />
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames='fade' timeout={300}>
                            <Switch location={location}>
                                <Route exact path='/home' component={HomePage} />
                                <Route exact path='/menu' component={Menu} />
                                <Route exact path='/ingredients' component={Ingredients} />
                                <Route exact path='/aboutus' component={AboutUs} />
                                <Route exact path='/contact' component={Contact} />
                                <Redirect to='/home' />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer />
            </div>
        );
    }


