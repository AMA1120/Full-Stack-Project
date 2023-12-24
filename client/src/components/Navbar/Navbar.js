import React, {useState} from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logoImage from "../../Images/logo2.jpeg"; // Import your logo image
import { Badge } from "react-bootstrap";
import Modal from "../../Modal";
import Cart from "../../pages/Cart/Cart";
import { useCart } from "../../components/ContextReducer"

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const [cartView, setCartView] = useState(false)
  let data = useCart();
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
            <div onClick={() => { setCartView(true) }}>
              <li><Link to="">{""}
              <Badge pill bg="danger"> {data.length} 
                <FaShoppingCart />
                </Badge>
              </Link> </li>
            </div>
            {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
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
