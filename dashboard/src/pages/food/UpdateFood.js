import React, { useState } from 'react'
import Navbar from '../../components/navbar/navbar';

function UpdateFood() {
const [id, setID] = useState('')
  const [food_item, setFood_Item] = useState('');
  const [price, setPrice] = useState('');
  const [discription, setDiscription] = useState('');
  const [image, setImage] = useState('');

  const { foodId } = useParams(); /* Get the food item ID from the route params or props */;
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
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:4000/update/${foodId}`, {
        id,
        food_item,
        price,
        discription,
        image,
      });

      console.log(response.data);
      // Handle success, e.g., redirect to a different page
    } catch (error) {
      console.error('Error during update:', error);
    }
  };



  return (
    <>
      <div className="food-container">
        <Navbar />
        <div className="food-content">
          <div className="d-flex justify-content-center align-items-center">
            <div className="custom-container">
              <form onSubmit={handleUpdate}>
                <h2>Add Food Items</h2>
                <div className="mb-2">
                  <label htmlFor="id">ID</label>
                  <input
                    type="text"
                    placeholder="Enter Food ID"
                    className="form-control"
                    onChange={(e) => setID(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="food_item">Food Item</label>
                  <input
                    type="text"
                    placeholder="Enter Food Item"
                    className="form-control"
                    onChange={(e) => setFood_Item(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    placeholder="Enter Price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="discription">Discription</label>
                  <input
                    type="text"
                    placeholder="Enter Discription"
                    className="form-control"
                    onChange={(e) => setDiscription(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="image">Image</label>
                  <input
                    accept="image/*"
                    type="file"
                    placeholder="Choose the Image"
                    className="form-control"
                    onChange={convertToBase64}
                  />
                  {image === "" || image == null ? null : (
                    <img width={100} height={100} src={image} alt="" />
                  )}
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateFood