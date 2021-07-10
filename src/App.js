import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';






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

