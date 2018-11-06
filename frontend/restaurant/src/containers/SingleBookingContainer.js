import React from 'react'
import Request from '../helpers/request'
import BookingDetails from '../components/BookingDetails'
import Booking from '../components/Booking'

class SingleBookingContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {booking: null}
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    let request = new Request()
    const url = '/bookings/' + this.props.id + '?projection=embedShip';
    request.get(url).then((data) => {
      this.setState({booking: data})
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/bookings/' + id;
    request.delete(url).then(() => {
      window.location = '/bookings'
    })
  }

  handleEdit(id){
    window.location = '/bookings/edit/' + id
  }

  render(){
    if(!this.state.booking){
      return null;
    }

    return(
      <div>
        <Booking booking={this.state.booking}/>
        <BookingDetails booking = {this.state.booking}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}/>
      </div>
    )
  }


}

export default SingleBookingContainer;
