import React from 'react'
import Navbar from "../../components/navbar/navbar";
import './food.css';

function Food() {
  return (
    <div className="food-container">
    <Navbar />
    <div className="food-content">
      {/* Your home content goes here */}
      <h1>Welcome to Your Website</h1>
      <p>This is the main content of your food page.</p>
    </div>
  </div>
  )
}

export default Food
