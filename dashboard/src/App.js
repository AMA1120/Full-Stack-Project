import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './pages/home/home';
import food from './pages/food/food';
import promotions from './pages/promotions/promotions';


import login from './pages/login/login';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<home />}></Route>
          <Route path="/home" element={<home />}></Route>
          <Route path="/food" element={<food />}></Route>
          <Route path="/promotions" element={<promotions />}></Route>
          <Route path="/login" element={<login />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
