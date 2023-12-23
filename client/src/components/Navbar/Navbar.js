import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      {token ? (
        <ul className="nav-ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu/:foodID">Menu Items</Link></li>
          <li><Link to="/cart">My Cart</Link></li>
          <li><Link to="/cart">My Orders</Link></li>
          <li><Link to="/userprofile">Userprofile</Link></li>
          <li><div className="logout-link" onClick={logout}>Logout</div></li>
        </ul>
      ) : (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu/:foodID">Menu Items</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
