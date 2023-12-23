import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menuitem from './pages/Menuitem/Menuitem';
import Payment from './pages/Payment/Payment';
import Userprofile from './pages/Userprofile/Userprofile';
import Cart from './pages/Cart/Cart';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Logout from './components/Logout/Logout.js';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { CartProvider } from './components/ContextReducer.js';


function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/menu/:foodID" element={<Menuitem />}></Route>
          {/* <Route path="/cart" element={<Cart />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/userprofile" element={<Userprofile />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
