import React from 'react';
import Request from '../helpers/request.js'

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
      <h4>Welcome to the Bookings page</h4>
    )
  }


}

export default Bookings;
