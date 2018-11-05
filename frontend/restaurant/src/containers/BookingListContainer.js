import React from 'react'
import BookingList from '../components/BookingList'
import Request from '../helpers/request'

class BookingListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }

  componentDidMount(){
    let request = new Request()
    request.get('/bookings').then((data) => {
      this.setState({bookings: data._embedded.bookings})
    })
  }


  render(){
    return (
     <BookingList bookings = {this.state.bookings} />
    )
  }

}

export default BookingListContainer;
