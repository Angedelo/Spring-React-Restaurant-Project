import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1 className="banner">Table Booking App</h1>
          <NavBar/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
