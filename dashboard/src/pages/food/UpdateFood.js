import React from 'react'
import Navbar from '../../components/navbar/navbar';

function UpdateFood() {
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