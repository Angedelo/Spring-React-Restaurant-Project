import React from 'react';
import Request from '../helpers/request.js'

class Customers extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      customers: []}
  }

  componentDidMount(){
    let request = new Request()
    request.get('/customers').then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }

  render(){
    return(
      <h4>Welcome to the Customers page</h4>
    )
  }

}

export default Customers;
