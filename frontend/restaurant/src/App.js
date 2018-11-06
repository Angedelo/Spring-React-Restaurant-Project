import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Customers from './containers/Customers.js'
import Bookings from './containers/Bookings.js'
import Home from './components/Home.js'
import './App.css';
import BookingFormContainer from './containers/BookingFormContainer';
import SingleBookingContainer from './containers/SingleBookingContainer';
import BookingEditFormContainer from './containers/BookingEditFormContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <h1 className="banner">Table Booking App</h1>
          <Route exact path="/" component={Home} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/bookings/new" component={BookingFormContainer} />
          <Route exact path="/bookings/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SingleBookingContainer id = {id} />
            }}
          />
          <Route exact path="/bookings/edit/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <BookingEditFormContainer id = {id} />
            }}
          />
          <NavBar/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
