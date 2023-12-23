// login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import './login.css';

const Login = () => {
  const [uname, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!uname || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/login-users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uname,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.data;

        localStorage.setItem('token', token);

        alert('Login successful!');
        // Redirect to user details page and getting the JWT token
        window.localStorage.setItem("token", data.data);
        console.log(data);
        window.location.href = '/Userprofile';

      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Error during login. Please try again.');
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={uname}
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
        <p>Not a member yet? <Link to="/register">Register with us</Link>.</p>
      </div>
    </>
  );
};

export default Login;
