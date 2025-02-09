// src/App.js
import React, { useState } from 'react';

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState('small');
  const [contactInfo, setContactInfo] = useState('');
  const [orderIsSubmitted, setOrderIsSubmitted] = useState(false);

  // Handle the state changes for toppings
  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);

  // Handle the state changes for size
  const selectSize = (e) => setSize(e.target.value);

  // Handle the state changes for contact info
  const updateContactField = (e) => setContactInfo(e.target.value);

  // Handle form submission
  const submitOrder = (e) => {
    e.preventDefault();
    setOrderIsSubmitted(true);
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <p>
        Your selection: {size} {pepperoniIsChecked ? 'pepperoni' : 'cheese'}
      </p>
      <form onSubmit={submitOrder}>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>
        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select size: </label>
          <select id="select-size" value={size} onChange={selectSize}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <h3>Contact Info</h3>
          <label htmlFor="email">Enter your email address: </label>
          <input
            type="text"
            value={contactInfo}
            id="email"
            placeholder="email address"
            onChange={updateContactField}
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
      {orderIsSubmitted && <h2>Thanks for your order!</h2>}
    </div>
  );
}

export default App;
