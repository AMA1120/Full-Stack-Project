import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Food from './pages/food/Food';
import Promotions from './pages/promotions/Promotions';
import Login from './pages/login/Login';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/promotions" element={<Promotions />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
