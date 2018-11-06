import React from 'react'
import {Link} from 'react-router-dom';

const Booking = (props) => {


  return(
    <React.Fragment>
      <Link to={"/bookings/"+props.booking.id}>Booking:{props.booking.id}</Link>
      <p>Date: {props.booking.date}</p>
      <p>Time: time to be added</p>
    </React.Fragment>
  )
}

export default Booking;
