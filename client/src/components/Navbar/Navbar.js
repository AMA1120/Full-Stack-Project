import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logoImage from "../../Images/logo2.jpeg"; // Import your logo image

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>

      {token ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu/:foodID">Menu Items</Link>
          </li>
          <li>
            <Link to="/cart">My Orders</Link>
          </li>
          <li>
            <Link to="/userprofile">Userprofile</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <div className="logout-link" onClick={logout}>
              Logout
            </div>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu/:foodID">Menu Items</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
          <li>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </li>
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
