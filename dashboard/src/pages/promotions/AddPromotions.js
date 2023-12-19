import React, { useState } from 'react'
import './promotions.css';
import Navbar from '../../components/navbar/navbar';

function Promotions() {
  const [promotionName, setpromotionName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");


  const convertToBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function () {
      console.log(reader.result);
      setImage(reader.result);
    };

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const uploadImage = async () => {
    fetch("http://localhost:4000/new", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ promotionName, description, category, image }),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="promo-container">
      <Navbar/>
      <div className='promo-content' >
       <div className="d-flex justify-content-center align-items-center">
            <div className="custom-container">
            <form onSubmit={uploadImage}>
              <h1>Add Promotions</h1>
              <div className="mb-2">
              <label htmlFor="image">Image</label>
              <br></br>
              <input accept="image/*" 
              type="file"
              onChange={convertToBase64} />
              {image === "" || image == null ? (
                ""
              ) : (
                <img width={100} height={100} src={image} alt="" />
              )}
      </div>
               <div className="mb-2">
                  <label htmlFor="promotionName">Promotion</label>
                  <input
                    type="text"
                    placeholder="Enter Promotion Name"
                    className="form-control"
                    value={promotionName}
                    onChange={(e) => setpromotionName(e.target.value)}
                  />
                  </div>
                  <div className="mb-2">
                  <label htmlFor="discription">Discription</label>
                  <input
                    type="text"
                    placeholder="Enter Discription"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="promo_cateogory">category</label>
                  <input
                    type="text"
                    placeholder="Enter promotion category"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
           <button className="btn btn-success" onClick={uploadImage}>Submit</button>
      </form>
      </div>
     </div>
    </div>
  </div>
  );
}


export default Promotions
