import { useState, useEffect } from 'react'
import axios from 'axios';
import Customers from './components/customers'
import CustomerForm from './components/CustomerForm';
import UpdateCustomerBtn from './components/updateCustomer'
import DeleteCustomerBtn from './components/deleteCustomer'


function App() {
  const [toggleNewCustomer, setToggleNewCustomer] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState(102)
  const [customer, setCustomer] = useState({
    firstName : '',
    lastName: '',
    email : '',
    phoneNumber : '',
    vin : '',
  })



  const handleNewCustomer = () => {
    setToggleNewCustomer(!toggleNewCustomer)
    return toggleNewCustomer
  }

  const fetchCustomers = () => {
    axios.get('http://localhost:6063/api/customers')
    .then(response => {
      setCustomers(response.data)
    })
  }

  useEffect(() => {
    fetchCustomers()
  }, [customers])


  return (
    <div className="d-flex flex-row justify-content-around align-items-center" style={{
      backgroundColor: '#bebebe'
    }}>
     <CustomerForm handleNewCustomer={handleNewCustomer} toggleNewCustomer={toggleNewCustomer}
     customer={customer} customerId={customerId} setCustomer={setCustomer} setCustomerId={setCustomerId} />
     <Customers customers={customers} UpdateCustomerBtn={UpdateCustomerBtn} DeleteCustomerBtn={DeleteCustomerBtn} />

    </div>
  );
}

export default App;
