import React from 'react';

const Customers = props => {

  const {customers} = props

  return (
    <div>
      <h3 className="text-center font-weight-bold mb-3">Customer List</h3>
      <table className="table table-striped table-hover">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">VIN</th>
    </tr>
  </thead>
  <tbody>
    { customers.map(customer => (
      <tr key={customer.id}>
      <th scope="row">{customer.id}</th>
      <td>{customer.firstName}</td>
      <td>{customer.lastName} </td>
    <td>{customer.email}</td>
    <td>{customer.phoneNumber}</td>
    <td>{customer.vin}</td>
    </tr>
    )) }
    
   
  </tbody>
</table>
    </div>
  );
}

export default Customers;
