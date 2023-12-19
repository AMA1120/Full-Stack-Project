import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

//import './menuitem.css';

export default function Menuitem() {
  return (
    <>
      <Navbar />
      <div><h2>Menu page</h2></div>

      <br></br>
      <br></br>

      <div className='carousel-caption'>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
      
      </div>
      
      <h3>Menu Items</h3>
      <br></br>
      <br></br>

      <div>
        <Card />
        <Card />
        <Card/>
      </div>

      <div><Footer/></div>
    </>
  );
}


