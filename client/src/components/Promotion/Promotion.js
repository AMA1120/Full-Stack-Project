import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {promotions.map((promotion) => (
        <div key={promotion._id} className="card">
          <div className="card-header"></div>
          <div className="card-body">
            {promotion.image && (
              <img
                src={promotion.image}
                alt={`Food: ${promotion.food_item}`}
                className="promo-image"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Promotion;
