import React, { Component } from 'react';
import {Route, Switch} from 'react-router'
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Functional from './components/functional'
import AddItem from './components/AddItem'
import Mapdispath  from './components/mapdispath'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
          <Mapdispath />
          <Link path to='/add-item'>
          <button>add Item</button></Link>
            <AddItem />
          {/* <Functional /> */}
          </div>
          
      </div>
    );
  }
}


export default App;
