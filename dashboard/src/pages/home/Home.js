import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar';
import './home.css';

function Home() {
  const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      // Fetch data from the server and populate the state
      fetch('http://localhost:4000/getusers')
        .then(response => response.json())
        .then(users => setUsers(users))
        .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
      <div className='tbl-container'>
        <h1>Registered customers</h1>
        <table className='user-table'>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>User Name</th>
              <th>City</th>
              <th>Email</th>
              <th>Telephone no</th>
              <th>Delete Customers</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.uname}</td>
                <td>{user.city}</td>
                <td>{user.email}</td>
                <td>{user.teleno}</td>
                <td><button2>Delete</button2></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-content'>
        <div className='search-bar-container'>
          <label htmlFor='searchCustomers'>Search Customers:</label>
          <input
            type='text'
            id='searchCustomers'
            placeholder='Enter customer name'
            // Add any necessary event handlers or state here
          />
        </div>
        {/* Your home content goes here */}
        <UserList />
        <p>This is the main content of your home page.</p>
      </div>
    </div>
  );
}

export default Home;
