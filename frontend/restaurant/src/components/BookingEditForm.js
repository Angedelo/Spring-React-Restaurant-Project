import React from 'react'

class BookingEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: props.booking.date,
      totalGuests: props.booking.totalGuests,
      customer: props.booking.customer,
      table: props.booking.table
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

 handleSubmit(event){
    event.preventDefault();
    const booking = {
        "date": this.state.date,
        "totalGuests": this.state.totalGuests,
        "customer": this.state.customer,
        "tabel": this.state.table
      }
    this.props.handleBookingEdit(booking)
  }


render(){

     const tableOptions = this.props.tables.map((table, index) => {
      return <option key={index} value={table._links.self.href}>{table.number}</option>
    })

    const customerOptions = this.props.customers.map((customer, index) => {
      return <option key={index} value={customer._links.self.href}>{customer.name}</option>
    })


  return (
    <div>
      <h3>Edit details</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value = {this.state.date} name="date" onChange={event => this.setState({ date: event.target.value })}/>
        <input type="number" value = {this.state.totalGuests} name="totalGuests" onChange={event => this.setState({ totalGuests: event.target.value })}/>
        <select name="table" onChange={event => this.setState({ table: event.target.value })}>
          {tableOptions}
        </select>
        <select name="customer" onChange={event => this.setState({customer: event.target.value})} >
          {customerOptions}
        </select>
        <button type="submit">Save</button>
      </form>
    </div>

)
}
  }

export default BookingEditForm;
