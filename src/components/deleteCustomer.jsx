import React from 'react';
import axios from 'axios'

const DeleteCustomerBtn = props => {

  const {customerId} = props

  const handleDelete = () => {
    window.confirm(`Are you sure you want to delete customer with id #${customerId}?`)
    axios.delete(`http://localhost:6063/api/customers/${customerId}`)
    .then((response) => {
      if (response.status === 204) {
        window.alert('Successfully deleted customer!')
      } else {
        console.log(response.status)
      }
    })
  }

  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteCustomerBtn;