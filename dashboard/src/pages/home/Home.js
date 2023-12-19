// import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="home-content">
        <div className="search-bar-container">
          <label htmlFor="searchCustomers">Search Customers:</label>
          <input
            type="text"
            id="searchCustomers"
            placeholder="Enter customer name"
            // Add any necessary event handlers or state here
          />
        </div>
        {/* Your home content goes here */}
        <div className='tbl-container'>
        <h1>Registered customer</h1>
        
        <table className='user-table'>
  <thead>
    <tr>
      
      <th>Customer Name</th>
      <th>City</th>
      <th>Email</th>
      <th>Telephone no</th>
      <th>Delete Customers</th>
     
    </tr>
  </thead>
   <tbody>


  </tbody> 
</table>
      </div>
        <p>This is the main content of your home page.</p>
      </div>
    </div>
  );
}

export default Home;
