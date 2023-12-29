
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './cart.css'; // Import the external CSS file
import { useCart, useDispatchCart } from '../../components/ContextReducer';
import { useNavigate } from 'react-router-dom';


function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  let navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3 text-white'>The Cart is Empty!</div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  // const handleCheckOut = () => {
  //   // Display an alert
  //   //alert('Payment is done!');

  //   // Redirect to the home page after clicking "Okay" in the alert
  //   window.location.href = 'http://localhost:3000/payment'; // Replace '/' with the actual URL of your home page
  // };

  const handleCheckOut = () => {
    navigate(`/payment?totalPrice=${totalPrice}`);
  };


  return (
    <>
      <div>Cart page</div>
      <div>
        <div className='container2 m-auto mt-5 table-responsive'>
          <table className='table table-hover'>
            <thead className='text-success fs-4'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Option</th>
                <th scope='col'>Amount</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" className="btn p-0">
                      <FaTrash alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                    </button>
                  </td>
                </tr>
              ))}
              {/* Display total price after the last row */}
              <tr>
                <td colSpan="4"></td>
                <td><strong>Total Price:</strong></td>
                <td>{totalPrice}/-</td>
              </tr>
            </tbody>
          </table>
          {/* <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div> */}
        </div>
        <div>
          {/* Add onClick event handler to the Check Out button */}
          <button
            className='cartbtn ' 
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
