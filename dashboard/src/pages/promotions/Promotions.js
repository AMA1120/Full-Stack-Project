import React from 'react'
import Navbar from "../../components/navbar/navbar";
import './promotions.css';

function Promotions() {
  return (
    <div className="promo-container">
      <Navbar />
      <div className="promo-content">
        {/* Your home content goes here */}
        <h1>Welcome to Your Website</h1>
        <p>This is the main content of your promotions page.</p>
      </div>
    </div>
  )
}

export default Promotions
