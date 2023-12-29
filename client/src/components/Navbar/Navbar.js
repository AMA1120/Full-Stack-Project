import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import logoImage from "../../Images/logo2.jpeg"; // Import your logo image
import { Badge } from "react-bootstrap";
import Modal from "../../Modal";
import Cart from "../../pages/Cart/Cart";
import { useCart } from "../../components/ContextReducer"

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false);
  let data = useCart();

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
          <Link to="/chatroom">Chat with us</Link>
          </li>
          <li>
            <Link to="/userprofile">
              <IoPerson /> Userprofile
            </Link>
          </li>
          <li>
            <div
              onClick={() => {
                setCartView(true);
              }}
            >
              <li>
                <Link to="">
                  {""}
                  <Badge pill bg="warning">
                    {" "}
                    {data.length}
                    <FaShoppingCart />
                  </Badge> 
                </Link>{" "}
              </li>
            </div>
            {cartView ? (
              <Modal onClose={() => setCartView(false)}>
                <Cart></Cart>
              </Modal>
            ) : (
              ""
            )}
          </li>
          <li>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/chatroom">Chat with us</Link>
          </li>
          <li>
          <div
              onClick={() => {
                setCartView(true);
              }}
            >
              <Link to=""> 
                {""}
                <Badge pill bg="warning">
                  {" "}
                  {data.length}
                  <FaShoppingCart />
                </Badge>
              </Link>{" "}
            </div>
            {cartView ? (
              <Modal onClose={() => setCartView(false)}>
                <Cart></Cart>
              </Modal>
            ) : (
              ""
            )}
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
