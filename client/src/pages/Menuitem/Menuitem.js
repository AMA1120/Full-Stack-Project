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

      <h3>menuitems</h3>

      <div>
        <Card />
        <Card />
        <Card/>
      </div>

      <div><Footer/></div>
    </>
  );
}


