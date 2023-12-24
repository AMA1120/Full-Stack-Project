import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
            <div className="card-container">
              {foods.map((food) => (
                <div key={food._id} className="card">
                  <img
                    src={food.image || "default-image-url"}
                    alt={`Food: ${food.food_item}`}
                    className="food-image"
                  />
                  {/* <div className="card-body">
                    <h5 className="card-title">
                      {food.food_item}{" "}
                      <strong style={{ color: "#ffcc00", fontSize: "small" }}>
                        {food.price}
                      </strong>
                    </h5>
                    <p className="card-text">
                      <strong></strong> {food.discription}
                    </p>
                  </div> */}
                  <div className="card-body">
                    <h5 className="card-title">
                      {food.food_item}{" "}
                      <strong
                        style={{
                          color: "#7b6406",
                          fontSize: "medium",
                          float: "right",
                        }}
                      >
                        {food.price}
                      </strong>
                    </h5>
                    <p className="card-text">
                      <strong></strong> {food.discription}
                    </p>
                  </div>

                  <div className="card-footer">
                    <Link to={`/menu/${food._id}`} className="order-button">
                      Order Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
