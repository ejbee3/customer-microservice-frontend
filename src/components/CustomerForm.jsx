import axios from 'axios';
import React from 'react';

const CustomerForm = props => {

  let { handleNewCustomer, toggleNewCustomer, customer, 
    setCustomer, setCustomerId, customerId } = props

  const handleTextChange = event => {
    setCustomer({
      ...customer,
      [event.target.id] : event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setCustomerId(customerId += 1)
    axios.post('http://localhost:6063/api/customers', {
      ...customer,
      customerId
    })
    .then((response) => {
      window.alert(`Added ${response.data.firstName} to customers!`)
      console.log(response.data)
      setCustomer({
        firstName : '',
        lastName: '',
        email : '',
        phoneNumber : '',
        vin : '',
      })
      handleNewCustomer()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={() => handleNewCustomer()}>New Customer?</button>
      {toggleNewCustomer && 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>First Name</label>
        <input name="firstName" type="text" className="form-control" aria-describedby="firstNameHelp" 
        placeholder="Fran" id="firstName" onChange={handleTextChange} value={customer.firstName}/>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input 
          name="lastName" 
          id="lastName" 
          type="text" 
          className="form-control"
          aria-describedby="lastNameHelp" 
          placeholder="Nguyen" 
          value={customer.lastName} 
          onChange={handleTextChange}/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email"
          name="email"
          id="email" 
          className="form-control" 
          aria-describedby="emailHelp" 
          placeholder="fran@aol.com" 
          value={customer.email}
          onChange={handleTextChange}/>
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input 
          type="tel"
          name="phoneNumber"
          id="phoneNumber" 
          className="form-control" 
          aria-describedby="phoneHelp" 
          placeholder="800-867-5309" 
          value={customer.phoneNumber}
          onChange={handleTextChange}/>
      </div>
      <div className="form-group">
        <label>VIN</label>
        <input 
          type="text"
          name="vin"
          id="vin" 
          className="form-control" 
          aria-describedby="vinHelp" 
          placeholder="JH4TB2H26CC000000" 
          value={customer.vin}
          onChange={handleTextChange}/>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    }
    </div>
  );
}

export default CustomerForm;
