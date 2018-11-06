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

  handleDelete(){
    return null
  }

  handleEdit(){
    return null
  }

  render(){
    if(!this.state.pirate){
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
