import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./food.css";


function Food() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

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
  }, []);

  const handleDelete = async (foodId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/delete/${foodId}`
      );
      console.log(response.data);

      // Update local state to remove the deleted item
      setFoods((prevFoods) => prevFoods.filter((food) => food._id !== foodId));
    } catch (error) {
      console.error("Error during delete:", error);
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

                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            handleDelete(food._id);
                            window.location.reload();
                          }}
                        >
                          Delete
                        </button>
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
