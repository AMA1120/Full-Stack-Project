import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Food from './pages/food/Food';
import AddPromotions from './pages/promotions/AddPromotions';
import Login from './pages/login/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateFood from './pages/food/CreateFood'
import UpdateFood from './pages/food/UpdateFood'
import HomePromotions from './pages/promotions/HomePromotions';

function App() {
  const [count, setCount]=useState(0)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/food" element={<Food />}/>
          <Route path="/promotions" element={<AddPromotions />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateFood />} />
          <Route path="/update" element={<UpdateFood />}/>
          <Route path="/homepromotions" element={<HomePromotions/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
