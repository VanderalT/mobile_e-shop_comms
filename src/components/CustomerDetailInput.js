import { useState } from "react";

function CustomerDetails ({ setCustomerName, setCustomerDot, clearComms}) {

  const[customerName, setName] = useState('');
  const[customerDot, setDot] = useState('');

  const changeCustomerName = event => {
    setCustomerName(event.target.value);
    setName(event.target.value);
  };

  const changeCustomerDot = event => {
    setCustomerDot(event.target.value);
    setDot(event.target.value);
  }

  const clearCustomerDetails = () => {
    setCustomerName( '' );
    setCustomerDot( '' );
    setName( '' );
    setDot( '' );
    clearComms();
  }

  return (
    <div id="customerDetails">
      <div className="form-detail">
        <label htmlFor="customer_name">Customer Name</label>
        <input type="text" name="customer_name" value={customerName} onChange={changeCustomerName} required></input>
      </div>
      <div className="form-detail">
        <label htmlFor="customer_dot">Customer Dot</label>
        <input type="number" name="customer_dot" value={customerDot} onChange={changeCustomerDot} required></input>
      </div>
      <button onClick={clearCustomerDetails}>Reset Customer Details</button>
    </div>
  )

}

export default CustomerDetails;