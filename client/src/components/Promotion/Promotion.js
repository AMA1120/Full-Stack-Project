import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Promotion.css";


function Promotion() {
  //fetch promotion image from backend
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getPromotions");
        setPromotions(response.data);
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    };

    fetchPromotions();
  }, []);

  return (
    <div>
      <div className="promo-card-container">
      {promotions.map((promotion) => (
        <div key={promotion._id} className="promo-card">
          <div className="promo-card-body">
            {promotion.image && (
              <img
                src={promotion.image}
                alt={`promotion: ${promotion.promotion_name}`}
                className="promo-client-image"
              />
            )}
            
             <div className="promo-card-footer">
                    <Link to={`/menu/${promotion._id}`} className="order-button">
                      Order Now
                    </Link>
              </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Promotion;
