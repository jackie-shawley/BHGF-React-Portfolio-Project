import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { PicturesData } from './components/Ingredients/PicturesData';
import Ingredients from './components/Ingredients/IngredientsComponent';
import Map from './components/MapComponent';





export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
          
        </div>
      </BrowserRouter>
    );
  }
}

