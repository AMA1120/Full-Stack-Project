import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateFood() {
  // Use a more descriptive variable name instead of 'id'
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
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
    // Fetch data from the backend API using the specific foodId
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/getfoods/${id}`
        );
        const existingData = response.data;

        // Update the state with existing data
        setFoodItem(existingData.food_item);
        setPrice(existingData.price);
        setDescription(existingData.discription); // Corrected property name
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
        food_item: foodItem,
        price: price,
        discription: description,
        image: image,
      });

      const response = await axios.put(
        `http://localhost:4000/update/${id}`, // Use the specific foodId in the update URL
        {
          food_item: foodItem,
          price: price,
          discription: description,
          image: image,
        }
      );

      console.log(response.data);
      navigate("/food");
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <>
      <div className="food-container">
        <Navbar />
        <div className="food-content">
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-container">
              <form onSubmit={submit}>
                <h2>Update Food Item</h2>
                {/* Remove the ID input field as it is in the URL params */}
                <div className="mb-2">
                  <label htmlFor="food_item">Food Item</label>
                  <input
                    type="text"
                    placeholder="Enter Food Item"
                    className="form-control"
                    value={foodItem}
                    onChange={(e) => setFoodItem(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    placeholder="Enter Description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="image">Image</label>
                  <input
                    accept="image/*"
                    type="file"
                    className="form-control"
                    onChange={convertToBase64}
                  />
                  {image && (
    <img width={100} height={100} src={image} alt="" />
  )}
                </div>
                <button type="submit" className="btn btn-success">
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

export default UpdateFood;
