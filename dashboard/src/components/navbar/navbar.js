import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-menu">
        <li>
          <Link to="/home">
            <i className="fas fa-users"></i> Users
          </Link>
        </li>
        <li>
          <Link to="/food">
            <i className="fas fa-hamburger"></i> Food Items
          </Link>
        </li>
        <li>
          <Link to="/promotions">
            <i className="fas fa-gift"></i> Promotions
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fas fa-gift"></i> logout
          </Link>
        </li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
