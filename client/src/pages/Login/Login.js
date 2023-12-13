import React, { useState } from 'react'
import Navbar from "../../components/Navbar/Navbar";
import './login.css';


// Create a functional component for the login page
const Login = () => {
  // State to manage user input (username and password)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State to manage errors
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Mock authentication function (replace with actual authentication logic)
    try {
      // Simulating API call or asynchronous operation
      // In a real-world scenario, you would call your authentication API here
      await mockAuthentication(username, password);

      // If authentication is successful, you can redirect the user or update state
      alert('Login successful!');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  // Mock authentication function (replace with actual authentication logic)
  const mockAuthentication = (username, password) => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        // Replace this condition with your actual authentication logic
        if (username === 'exampleUser' && password === 'examplePassword') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };

  return (
    <>
      <Navbar/>
    <div>
    <Navbar/>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
      </div>
      </>
  );
};

export default Login