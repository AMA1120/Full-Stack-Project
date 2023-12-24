import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import "./footer.css";
import logoImage from "../../Images/logo2.jpeg"; // Import your logo image

function Footer() {
  const iconStyle = { color: "yellow" }; // Set the color to yellow

  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <img src={logoImage} alt="Logo" className="logo" />
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
              <div className="footer-icons">
                <FaFacebook className="icon" />
                <FaTwitter className="icon" />
                <FaInstagram className="icon" />
                <FaLinkedinIn className="icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5><u>Quick Links</u></h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/menu/:foodID">
                    Our Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/cart">
                    View Cart
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/userprofile">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5><u>Contact Us</u></h5>
              <p>
                <FaPhoneVolume style={iconStyle} /> +94 345627892
              </p>
              <p>
                <FaEnvelope style={iconStyle} /> fullstack@gmail.com
              </p>
              <p>
                <FaPaperPlane style={iconStyle} /> Homagama, Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>copyright@2023:Design by Group 34</p>
      </div>
    </>
  );
}

export default Footer;
