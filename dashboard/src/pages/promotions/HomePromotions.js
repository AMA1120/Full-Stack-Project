import React from 'react';
import './promotions.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';

export default function HomePromotions() {
  return (
    <>
      <div className='promo-container'>
        <Navbar/>
        <div className="promo-content">
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-container">
              <Link to="/promotions" className="add-button">
                Add+
              </Link>
              <table className="custom-table">
                <thead>
                  <tr className="table-header">
                    
                  <th>Image</th>
                  <th>Promotion</th>
                  <th>Discription</th>
                  <th>category</th>
                  <th>Action</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {Promotions.map((food) => (
                    <tr key={food._id}>
                      <td>{food.id}</td>
                      <td>{food.food_item}</td>
                      <td>{food.price}</td>
                      <td>{food.discription}</td>
                      <td>
                        {Promotions.image && (
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
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
