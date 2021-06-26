import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import HomePage from './HomePageComponent';
import Ingredients from './IngredientsComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import Menu from './MenuComponent';
import NewCarousel from './3DCarouselComponent';


export default class Main extends Component {
    render () {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/ingredients' component={Ingredients} />
                    <Route exact path='/aboutus' component={AboutUs} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

