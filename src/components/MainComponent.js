import React, { Component } from 'react';
import Header from './HeaderComponent';


export default class Main extends Component {
    render () {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/menu' component={Menu} />
                    <Route path='/ingredients' component={Ingredients} />
                    <Route path='/aboutus' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </div>
        );
    }
}

