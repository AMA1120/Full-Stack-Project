import React, { useState } from 'react';
import './login.css';

const Login = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        // Make the API request
        const response = await fetch('http://localhost:4000/login-admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uname: username,
            password: password,
          }),
        });

        // Check the response status
        console.log('Response status:', response.status);

        if (!response.ok) {
          // Handle non-successful response
          alert('Login failed');
          throw new Error('Login failed');
        }

        // Parse the response body
        const responseBody = await response.json();
        console.log('Response body:', responseBody);

        if (responseBody.error === 'Incorrect Username') {
          // Handle incorrect username
          alert('Incorrect Username. Please check your username');
          setValid(false);
          setSubmitted(true);
        } else {
          // Successful login
          setValid(true);
          setSubmitted(true);
          alert('Welcome!');
          // Redirect to the Home page, assuming you have a route for it
          window.location.href = '/Home'; // Corrected the path
        }
      } catch (error) {
        // Handle errors
        console.error('Error during login:', error.message);
        setValid(false);
        setSubmitted(true);
        alert(error.message);
      }
    } else {
      // Handle empty username or password
      alert('Please enter both username and password');
    }
  };

 
  return (
    
    <div>
      <body className='bodyl'>
     <div className='login-container1'>
      <form className='form1' onSubmit={handleSubmit}>
   
        <h2>Admin Login</h2>
        <label className='label1'>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='label1'>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className="button1" type="submit">Login</button>
      </form>
    </div>
    </body>
    </div>
  );
};

export default Login;
