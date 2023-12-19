
// Login.js
import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const mockAuthentication = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'exampleUser' && password === 'examplePassword') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    try {
      await mockAuthentication(username, password);
      alert('Login successful!');
    } catch (err) {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
  
    <body2>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:   
         
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
        </label>
        <button1 type="submit">Log In</button1>
      </form>
    </div>
    </body2>
  );
};

export default Login;
