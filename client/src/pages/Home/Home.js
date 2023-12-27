import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Promotion from "../../components/Promotion/Promotion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";

function Home() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const priceRef = useRef();
  
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

  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  };

  const handleQty = (e) => {
    setQty(parseInt(e.target.value, 10));
  };

  return (
    <>
      <Navbar />
      <Promotion />
      <div className="features" id="features">
        <h1 className="heading">
          our
          <span>Menu</span>
        </h1>
      </div>

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
                          color: "#ffcc00",
                          fontSize: "17px",
                          float: "right",
                        }}
                      >
                        {food.price} 
                      </strong>
                    </h5>
                    <p className="card-text">
                      <strong></strong> {food.discription}
                      {""}
                      <strong
                        style={{
                          color: "#ffcc00",
                          fontSize: "17px",
                          float: "right",
                        }}
                      >
                        <select
                          onChange={handleQty}
                          onClick={handleClick}
                        >
                          {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}>
                              {" "}
                              {i + 1}{" "}
                            </option>
                          ))}
                        </select>
                      </strong>
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
