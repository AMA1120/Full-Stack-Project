import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Food from './pages/Food/Food';
import Promotions from './pages/Promotions/Promotions';
import Login from './pages/Login/Login';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Food" element={<Food />}></Route>
          <Route path="/Promotions" element={<Promotions />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
