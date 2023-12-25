import React from 'react'
//import axios from 'axios';
//import trash from "../trash.svg"
import { FaTrash } from 'react-icons/fa';
// import Navbar from "../../components/Navbar/Navbar";
import './cart.css';
import { useCart, useDispatchCart } from '../../components/ContextReducer';

function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleCheckOut = async () => {
  //   try {
  //     let username = localStorage.getItem("uname");
  
  //     const response = await axios.post("http://localhost:4000/orderData", {
  //       order_data: data,
  //       uname: username,
  //       order_date: new Date().toDateString()
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  
  //     console.log("Order Response:", response);
  
  //     if (response.status === 200) {
  //       dispatch({ type: "DROP" });
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <>
      {/* <Navbar/> */}
      <div>Cart page</div>
      <div>
        <div className='container2 m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md'>
          <table className='table table-hover'>
            <thead className='text-success'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Option</th>
                <th scope='col'>Amount</th>
                <th scope='col'>#</th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr>
                  <th scope='row' >{index + 1}</th>
                  <td> {food.name}</td>
                  <td> {food.qty}</td>
                  <td> {food.size}</td>
                  <td> {food.price}</td>
                  <td ><button type="button" className="btn p-0">
                    <FaTrash alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                  </button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        </div>
        <div>
          <button className='btn bg-success mt-5 ' > Check Out </button>
        </div>
      </div>
    </>
  )
}

export default Cart