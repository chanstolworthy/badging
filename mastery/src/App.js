import React, { Component } from 'react';
import {Route, Switch} from 'react-router'
import logo from './logo.svg';
import './App.css';
import Functional from './components/functional'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
          <Functional />
          </div>
      </div>
    );
  }
}

export default App;
