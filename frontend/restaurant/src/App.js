import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Customers from './containers/Customers.js'
import Bookings from './containers/Bookings.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1 className="banner">Table Booking App</h1>
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/bookings" component={Bookings} />
          <NavBar/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
