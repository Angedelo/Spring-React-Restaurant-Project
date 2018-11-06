import React from 'react'

const BookingDetails = (props) => {



  const onDelete = () => {
    props.handleDelete(props.booking.id)
  }

  const onEdit = () => {
    props.handleEdit(props.booking.id)
  }

  return (
    <React.Fragment>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </React.Fragment>
  )
}

export default BookingDetails;
