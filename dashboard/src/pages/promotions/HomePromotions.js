import React, { useEffect, useState } from "react";
import "./promotions.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";

function HomePromotions() {
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

  const deletePromotion = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/deletePromotions/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting promotion:", error);
    }
  };

  return (
    <>
      <div className="promo-container">
        <Navbar />
        <div className="promo-content">
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-container">
              <Link to="/addpromotions" className="add-button">
                Add+
              </Link>
              <table className="custom-promo-table">
                <thead>
                  <tr className="table-promo-header">
                    
                    <th>Promotion</th>
                    <th>Discription</th>
                    <th>category</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {promotions.map((promotion) => (
                    <tr key={promotion._id}>
                      <td>{promotion.promotionName}</td>
                      <td>{promotion.description}</td>
                      <td>{promotion.category}</td>
                      <td>{promotion.price}</td>
                      <td>
                        {promotion.image && (
                          <img
                            src={promotion.image}
                            alt={`Promotion: ${promotion.promotionName}`}
                            className="promo-image"
                          />
                        )}
                      </td>
                      <td>
                        <Link
                          to={`/updatePromotions/${promotion._id}`}
                          className="edit-promo-button"
                        >
                          Update
                        </Link>
                        <button
                          type="button"
                          className="delete-promo-button"
                          onClick={() => {
                            deletePromotion(promotion._id);
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

export default HomePromotions;
