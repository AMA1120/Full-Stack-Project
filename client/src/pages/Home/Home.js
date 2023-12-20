import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Promotion from "../../components/Promotion/Promotion";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";


function Home() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/foods");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      <Navbar />
      <Promotion />
      <div className="food-content">
        <div className="d-flex justify-content-center align-items-center">
          <div className="custom-container">
            {/* <Link to="/create" className="add-button">
              Add New Dish
            </Link> */}
            <div className="card-container">
              {foods.map((food) => (
                <div key={food._id} className="card">
                  <div className="card-header">
                    <h5 className="card-title">{food.food_item}</h5>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      <p className="card-text">
                        <strong>Price:</strong> {food.price}
                      </p>
                    </p>
                    <p className="card-text">
                      <strong>Description:</strong> {food.discription}
                    </p>
                    {food.image && (
                      <img
                        src={food.image}
                        alt={`Food: ${food.food_item}`}
                        className="food-image"
                      />
                    )}
                  </div>
                  <div className="card-footer">
                    <Link to={`/order/${food._id}`} className="order-button">
                      Order Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
