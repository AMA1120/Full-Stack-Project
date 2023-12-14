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
      <h1>Upload Image</h1>
      <input accept="image/*" type="file" onChange={convertToBase64} />
      {image === "" || image == null ? (
        ""
      ) : (
        <img width={100} height={100} src={image} alt="" />
      )}
      Name:{" "}
      <input
        type="text"
        value={promotionName}
        onChange={(e) => setpromotionName(e.target.value)}
      />
       description:{" "}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
       category:{" "}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={uploadImage}>Upload Image</button>
      </div>
    </div>
  );
}


export default Promotions
