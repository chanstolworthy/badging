import React, { Component } from 'react';
import {Route, Switch} from 'react-router'
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Functional from './components/functional'
import AddItem from './components/AddItem'
const addName = require('./components/addname')


class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
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


// PROPERTIES OF MATCH: Params, isExact, path, url

// What Is Semantic: Semantic html are the defined elements for html.  They are created with specific properties in order to display and have a specific layout for your app.

// Goal: The major goal for semantics is for clarity in your code. With semantics there are benefits with SEO and optimization which help your site be more recognizable. Semantics allows your code to be split into identifiable sections that would allow another developer to see what has been completed. 

// Custom semantic: custom semantics tags is something that is bit tricky to do because of the potential for code to be altered later down the road. When you create a custom element tag, you run the risk of them declaring those official html and giving them inherent properties.  Do create custom semantics you just create it like you would a normal div tag but give it your down name instead of div.

// Best Practices for semantics: The best way for utilize semantics is to have clearly identifiable section. Ex. On my last project I created sections for the header, main content section and a footer. This makes it easier for another developer to look at your code and be able to work without having to dissect your code. 
