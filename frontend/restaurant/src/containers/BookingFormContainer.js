import React from 'react';
import Request from '../helpers/request.js'
import BookingForm from '../components/BookingForm'

class BookingFormContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      customers: [],
      tables: []
    }
    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  handleBookingPost(booking){
    const request = new Request();
    request.post('/bookings', booking)
  }

  componentDidMount(){
    const request = new Request();
    request.get("/customers").then((data) => {
      this.setState({customers: data._embedded.customers})
    }).then(() => {
      request.get('/tabels').then((data) => {
        this.setState({tables: data._embedded.tabels})
      });
    });
  }

  render(){
    return (
      <BookingForm customers={this.state.customers} tables={this.state.tables} handleBookingPost={this.handleBookingPost} />
    )
  }

}

export default BookingFormContainer;
