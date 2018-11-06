import React from 'react'
import BookingEditForm from '../components/BookingEditForm'
import Request from '../helpers/request'

class BookingEditFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {customers: null, tabels: null, bookings: null};
    this.handleBookingEdit = this.handleBookingEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/customers").then((customers) => {
      this.setState({customers: customers._embedded.customers})
    });
    request.get("/bookings").then((bookings) => {
      this.setState({bookings: bookings._embedded.bookings})
    });
  }

  handleBookingEdit(booking){
    const request = new Request();
    request.patch('/bookings/' + this.props.id, booking).then(() => {
      window.location = '/bookings/' + this.props.id
    })
  }

  render(){
    if(!this.state.customers || !this.state.tables || !this.state.bookings){
      return null;
    }
    return <BookingEditForm customers = {this.state.customers} tables={this.state.tables} bookings={this.state.bookings} handleBookingEdit= {this.handleBookingEdit} />

  }
}

export default BookingEditFormContainer;
