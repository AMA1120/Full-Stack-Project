import React from 'react'
import Navbar from '../../components/navbar/navbar';

function UpdateFood() {

  const [formData, setFormData] = useState({
    id: "",
    food_item: "",
    price: "",
    discription: "",
    image: null, // Assuming you want to upload an image
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use formData to update the food item (send a request to your backend)
      console.log("Form Data:", formData);

      // Reset the form after successful submission
      setFormData({
        id: "",
        food_item: "",
        price: "",
        discription: "",
        image: null,
      });
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
              <form>
                <h2>Update Food Items</h2>
                <div className="mb-2">
                  <label htmlFor="">ID</label>
                  <input
                    type="text"
                    placeholder="Enter Food ID"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Food Item</label>
                  <input
                    type="text"
                    placeholder="Enter Food Item"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Price</label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Discription</label>
                  <input
                    type="text"
                    placeholder="Enter Discription"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Image</label>
                  <input
                    type="file"
                    placeholder="Choose the Image"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-success">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateFood