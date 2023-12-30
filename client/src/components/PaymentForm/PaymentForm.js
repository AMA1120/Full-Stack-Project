// components/PaymentForm.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentForm.css'; // Import the CSS file for styling

const PaymentForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    paymentId: generatePaymentId(),
    username: '',
    paymentType: '',
    totalCost: '',
    dateAndTime: getCurrentDateAndTime(),
    cardNumber: '', // New state for card number
    expireDate: '', // New state for expiration date
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const totalPrice = searchParams.get('totalPrice');

    setFormData((prevData) => ({
      ...prevData,
      totalCost: totalPrice || '',
    }));
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      handleCheckOut();
    } else {
      alert('Please fill in all the necessary fields before processing the payment.');
    }
  };

  const validateForm = () => {
    // Add your validation logic here
    return (
      formData.username !== '' &&
      formData.paymentType !== '' &&
      (formData.paymentType !== 'credit_card' || (formData.cardNumber !== '' && formData.expireDate !== '')) &&
      formData.totalCost !== ''
    );
  };

  const handleCheckOut = () => {
    // Display an alert
    alert('Payment is done!');

    // Redirect to the home page after clicking "Okay" in the alert
    window.location.href = 'http://localhost:3000'; // Replace '/' with the actual URL of your home page
  };

  function getCurrentDateAndTime() {
    const currentDate = new Date();
    return currentDate.toISOString();
  }

  function generatePaymentId() {
    const prefix = 'PAY';
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 10000);
    const paymentId = `${prefix}-${timestamp}-${randomNumber}`;
    return paymentId;
  }

  return (
    <div className="payment-container">
      <form className="pay-form" onSubmit={handleSubmit}>
        <label className='pay-lable'>
          Payment ID:
          <input className='payfeild' type="text" name="paymentId" value={formData.paymentId} readOnly />
        </label>
        <br />

        <label className='pay-lable'>
          Username:
          <input className='payfeild' type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <br />

        <label className='pay-lable'>
          Payment Type:
          <select className='payfeild' name="paymentType" value={formData.paymentType} onChange={handleInputChange}>
            <option value="">Select Payment Type</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <br />

        {(formData.paymentType === 'credit_card' || formData.paymentType === 'debit_card' || formData.paymentType === 'paypal') && (
          <>
            <label className='pay-lable'>
              Card Number:
              <input className='payfeild' type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} />
            </label>
            <br />

            <label className='pay-lable'>
              Expire Date:
              <input className='payfeild' type="text" name="expireDate" value={formData.expireDate} onChange={handleInputChange} />
            </label>
            <br />
          </>
        )}

        <label className='pay-lable'>
          Total Cost:
          <input className='payfeild' type="text" name="totalCost" value={formData.totalCost} onChange={handleInputChange} />
        </label>
        <br />

        <label className='pay-lable'>
          Date and Time:
          <input className='payfeild' type="text" name="dateAndTime" value={formData.dateAndTime} readOnly />
        </label>
        <br />

        <button className="pay-button" type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
