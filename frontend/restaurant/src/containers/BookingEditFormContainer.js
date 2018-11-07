import React from 'react'
import BookingEditForm from '../components/BookingEditForm'
import Request from '../helpers/request'

class BookingEditFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {customers: null, tables: null, booking: null};
    this.handleBookingEdit = this.handleBookingEdit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/customers").then((customers) => {
      this.setState({customers: customers._embedded.customers})
    });
    request.get("/bookings/" + this.props.id).then((booking) => {
      this.setState({booking: booking})
    });
    request.get("/tabels").then((tables) => {
      this.setState({tables: tables._embedded.tabels})
    });
  }

  handleBookingEdit(booking){
    const request = new Request();
    request.patch('/bookings/' + this.props.id, booking).then(() => {
      window.location = '/bookings/' + this.props.id
    })
  }

  render(){
    if(!this.state.customers || !this.state.tables || !this.state.booking){
      return null;
    }
    return <BookingEditForm customers = {this.state.customers} tables={this.state.tables} booking={this.state.booking} handleBookingEdit= {this.handleBookingEdit} />

  }
}

export default BookingEditFormContainer;
