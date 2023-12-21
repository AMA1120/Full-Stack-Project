import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./promotions.css";

function UpdatePromotions() {
  const { id } = useParams();
  const [promotionName, setpromotionName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      setImage(reader.result);
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  useEffect(() => {
    // Fetch data from the backend API using the specific promorionID
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/getpromotions/${id}`
        );
        const existingData = response.data;

        // Update the state with existing data
        setpromotionName(existingData.promotionName);
        setDescription(existingData.description);
        setCategory(existingData.category);
        setImage(existingData.image);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log("Update Request Payload:", {
        promotionName: promotionName,
        description: description,
        category: category,
        image: image,
      });

      const response = await axios.put(
        `http://localhost:4000/updatepromotions/${id}`,
        {
          promotionName: promotionName,
          description: description,
          category: category,
          image: image,
        }
      );

      console.log(response.data);
      navigate("/homepromotions");
    } catch (error) {
      console.error("Update Error:", error);
    }
  };
  return (
    <>
      <div className="promo-container">
        <Navbar />
        <div className="promo-content">
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-container">
              <form onSubmit={submit}>
                <h1>Update Promotions</h1>
                <div className="mb-2">
                  <label htmlFor="image">Image</label>
                  <br></br>
                  <input
                    accept="image/*"
                    type="file"
                    onChange={convertToBase64}
                  />
                  {image === "" || image == null ? (
                    ""
                  ) : (
                    <img width={100} height={100} src={image} alt="" />
                  )}
                </div>
                <div className="mb-2">
                  <label htmlFor="promotionName">Promotion Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="promotionName"
                    placeholder="Enter Promotion Name"
                    value={promotionName}
                    onChange={(e) => setpromotionName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <button type="submit" className="edit-promo-button">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdatePromotions;
