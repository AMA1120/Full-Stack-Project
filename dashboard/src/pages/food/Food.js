import React, { useState } from 'react'
import Navbar from "../../components/navbar/navbar";
import { Link } from 'react-router-dom';
import './food.css';

function Food() {
  const [foods, setUsers] = useState([{
    ID: "001" , Food_Item: "Pizza", Price: "Rs.1200", Discription: "Cheese,large", Image:""
  }])
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
                    <tr key={food.ID}>
                      <td>{food.ID}</td>
                      <td>{food.Food_Item}</td>
                      <td>{food.Price}</td>
                      <td>{food.Discription}</td>
                      <td>{food.Image}</td>
                      <td>
                        <Link to="/update" className="edit-button">
                          Update
                        </Link>
                        <Link to="/create" className="delete-button">
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

export default Food
