import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menuitem from './pages/Menuitem/Menuitem';
import Payment from './pages/Payment/Payment';
import Userprofile from './pages/Userprofile/Userprofile';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/menu" element={<Menuitem />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/userprofile" element={<Userprofile />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
