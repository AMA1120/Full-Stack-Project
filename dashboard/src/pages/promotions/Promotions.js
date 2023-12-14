// import React, { useState } from 'react'
// // import Navbar from "../../components/navbar/navbar";
// import './promotions.css';

// function Promotions() {

//   const[image,setImage] = useState("");

//   function convertToBase64(e){
//     console.log(e);
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload = function () {
//       console.log(reader.result);
//       setImage(reader.result);
//     };
//     reader.onerror = function (error) {
//       console.log('Error: ', error);
//     };
//   }
//   return (
//     <div className="promo-container">
//       {/* <Navbar /> */}
//       <div className="promo-content">
//        <div className='auth-wrapper'>
//         <div className='auth-inner' style={{ width: "auto"}}>
//           Let's Upload Image <br/>
//           <input 
//             accept='image/*'
//             type ="file"
//             onChange={convertToBase64}
//          />
//          {image===""|| image==null?"": <img width={100} height={100} src={image}/>}
//         </div>
//        </div>
//       </div>
//     </div>
//   )
// }

// export default Promotions
