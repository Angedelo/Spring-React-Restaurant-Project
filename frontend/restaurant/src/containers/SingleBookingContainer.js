import React from 'react'

class SingleBookingContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {booking: null}
  }

  render(){
    return(
      <h3>this is a booking</h3>
    )
  }


}

export default SingleBookingContainer;
