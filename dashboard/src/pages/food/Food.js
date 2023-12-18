import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./food.css";

function Food() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/foods"); // Update the endpoint accordingly
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts
// Add this function to handle updates
  const updateFood = async (foodId) => {
    try {
      const updatedFood = await axios.put(`http://localhost:4000/update/${foodId}`, {
        id:  new id,
        food_item:  new food_item,
        price:  new price,
        discription:  new discription,
        image:  new image,
      });

      // Handle success (e.g., show a success message)
      console.log("Food item updated:", updatedFood.data);
    } catch (error) {
      console.error("Error updating food item:", error);
      // Handle error (e.g., show an error message)
    }
  };
  return (
    <>
      <div className="food-container">
        <Navbar />
        <div className="food-content">
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-container">
              <Link to="/create" className="add-button">
                Add+
              </Link>
              <table className="custom-table">
                <thead>
                  <tr className="table-header">
                    <th>ID</th>
                    <th>Food Item</th>
                    <th>Price</th>
                    <th>Discription</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {foods.map((food) => (
                    <tr key={food._id}>
                      <td>{food.id}</td>
                      <td>{food.food_item}</td>
                      <td>{food.price}</td>
                      <td>{food.discription}</td>
                      <td>
                        {food.image && (
                          <img
                            src={food.image}
                            alt={`Food: ${food.food_item}`}
                            className="food-image"
                          />
                        )}
                      </td>
                      <td>
                        <Link
                          to={`/update/${food._id}`}
                          className="edit-button"
                        >
                          Update
                        </Link>
                        <Link
                          to={`/delete/${food._id}`}
                          className="delete-button"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
