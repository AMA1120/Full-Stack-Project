import React, { useState } from 'react'
// import Navbar from "../../components/navbar/navbar";
import './promotions.css';

function Promotions() {

  const[setImage] = useState("");

  function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload =  () => {
        console.log(reader.result);
        setImage(reader.result);
    };
    reader.onerror =  error => {
      console.log('Error: ', error);
    };
  }
  return (
    <div className="promo-container">
      {/* <Navbar /> */}
      <div className="promo-content">
       <div className='auth-wrapper'>
        <div className='auth-inner' style={{ width: "auto"}}>
          Let's Upload Image<br/>
          <input 
            accept="image/*"
            type ="file"
            onChange={convertToBase64}
         />
          
        </div>
       </div>
      </div>
    </div>
  )
}

export default Promotions
