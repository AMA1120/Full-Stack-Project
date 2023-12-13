import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/food">food Items</Link>
        </li>
        <li>
          <Link to="/promotions">promotions</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
         
        </li>
      </ul>
    </nav>
  )
}

export default navbar