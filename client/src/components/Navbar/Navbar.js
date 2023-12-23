import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Modal from "../../Modal";
import Cart from "../../pages/Cart/Cart"
import { useCart } from "../../components/ContextReducer"

const Navbar = () => {
  const [cartView, setCartView] = useState(false)
  let data = useCart();
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
          <div onClick={() => { setCartView(true) }}>
            <li><Link to="">My Cart {""}
              <Badge pill bg="danger"> {data.length} </Badge>
            </Link></li>
          </div>
          {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
          <li><Link to="/cart">My Orders</Link></li>
          <li><Link to="/userprofile">Userprofile</Link></li>
          <li><div className="logout-link" onClick={logout}>Logout</div></li>
        </ul>
      ) : (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu/:foodID">Menu Items</Link></li>
          <div onClick={() => { setCartView(true) }}>
            <li><Link to="">My Cart{""}
              <Badge pill bg="danger"> {data.length} </Badge>
            </Link></li>
          </div>
          {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
          <li><Link to="/login">Login</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
