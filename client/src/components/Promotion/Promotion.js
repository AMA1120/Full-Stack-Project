import React from 'react'
import './Promotion.css';

function Promotion() {
  return (
    <div>
       <div className="promotion-container">
      <div className="promotion-slide">
        <img
          src="C:\Users\User\Documents\GitHub\Full-Stack-Project\client\src\Images\herosection.jpeg" // Replace with your image URL
          alt="Promotion 1"
          className="promotion-image"
        />
      </div>
      <div className="promotion-slide">
        <img
          src="C:\Users\User\Documents\GitHub\Full-Stack-Project\client\src\Images\images.jpeg"// Replace with your image URL
          alt="Promotion 2"
          className="promotion-image"
        />
      </div>
      {/* Add more slides as needed */}
    </div>
    </div>
  )
}

export default Promotion

