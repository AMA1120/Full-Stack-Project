import React, { useEffect, useState } from "react";
import "./promotions.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar/navbar";

function HomePromotions() {
  const [promotion, setPromotions] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:3001/getPromotions")
      .then((promotion) => setPromotions(promotion.data))
      .catch((err) => console.log(err));
  }, []);

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
                    <th>Image</th>
                    <th>Promotion</th>
                    <th>Discription</th>
                    <th>category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {promotion.map((promotion) => (
                    <tr key={promotion._promotionName}>
                      <td>{promotion.promotionName}</td>
                      <td>{promotion.description}</td>
                      <td>{promotion.category}</td>
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
                          to={`/update/${promotion._promotionName}`}
                          className="edit-promo-button"
                        >
                          Update
                        </Link>
                        <Link
                          to={`/delete/${promotion._promotionName}`}
                          className="delete-promo-button"
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

export default HomePromotions;
