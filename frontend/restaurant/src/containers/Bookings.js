import React from 'react';
import Request from '../helpers/request.js'
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BookingFormContainer from './BookingFormContainer';

class Bookings extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      bookings: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }

  render(){
    return(
      <React.Fragment>
        <Link to="/bookings/new">Create New Booking</Link>
        <h4>add list of all bookings component</h4>
      </React.Fragment>
    )
  }


}

export default Bookings;
