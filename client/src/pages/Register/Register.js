import "./register.css";

import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";


function Register() {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phoneNo:"",
        City:"",
        email: ""
      });
    
      const handleInputChange = (event) => {
        
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
    
      const [submitted, setSubmitted] = useState(false);
      const [valid, setValid] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName && values.phoneNo && values.City && values.email) {
          setValid(true);
        }
        setSubmitted(true);
      };
    return (
          <>
          <Navbar/>
          <br>
          </br>
          
          <div>
          
          <div className="form-container">
          <div class= "h1">Register</div>
          <form className="register-form" onSubmit={handleSubmit}>
            {submitted && valid && (
              <div className="success-message">
                <h3>
                  {" "}
                  Welcome {values.firstName} {values.lastName}{" "}
                </h3>
                <div> Your registration was successful! </div>
              </div>
            )}
             
            
            {!valid && (
              <input
                class="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.firstName && (
              <span id="first-name-error">Please enter your first name</span>
            )}
    
            {!valid && (
              <input
                class="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.lastName && (
              <span id="last-name-error">Please enter your last name</span>
            )}

            
            {!valid && (
              <input
                class="form-field"
                type="text"
                placeholder="Telephone No"
                name="Telephone No"
                value={values.phoneNo}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.phoneNo && (
              <span id="phoneNo-error">Please enter your Telephone No.</span>
            )}




            
             {!valid && (
              <input
                class="form-field"
                type="text"
                placeholder="City"
                name="City"
                value={values.City}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.City && (
              <span id="City-error">Please enter your City.</span>
            )}

             

            {!valid && (
              <input
                class="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            )}
    
            {submitted && !values.email && (
              <span id="email-error">Please enter an email address</span>
            )}
            {!valid && (
              <button class="form-field" type="submit">
                Register
              </button>
            )}
          </form>
        </div>
          </div>
          </>
)
}
export default Register





   
   