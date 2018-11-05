import React from 'react';

const BookingForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const booking = {
        "date": event.target.date.value,
        "totalGuests": event.target.totalGuests.value,
        "customer": event.target.customer.value,
        "tabel": event.target.table.value
      }
      console.log(booking);
    props.handleBookingPost(booking)
  }

  const customerOptions = props.customers.map((customer, index) => {
      return <option key={index} value={customer._links.self.href}>{customer.name}</option>
    })

    const tableOptions = props.tables.map((table, index) => {
        return <option key={index} value={table._links.self.href}>{table.number}</option>
      })


      return <div>
          <h3>Enter details</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Date" name="date"/>
            <input type="number" placeholder="TotalGuests" name="totalGuests"/>
            <select name="customer">
              {customerOptions}
            </select>
            <select name="table" >
              {tableOptions}
            </select>
            <button type="submit">Save</button>
          </form>
        </div>
}

export default BookingForm;
