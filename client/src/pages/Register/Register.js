import "./register.css";


import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";


function Register() {

  /* 
  constructor (props) {
    super(props);
    this.state = {
      fullname:"",
      phoneNo:"",
      email:"",
      username:"",
      password:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fullname, phoneNo, City, email, password } = this.state;
    console.log(fullname, phoneNo, email, password);
  }
  */
  
  const [values, setValues] = useState({
    fullName: "",
    phoneNo: "",
    City: "",
    email: "",
    username: "",
    password: "",
    agreeToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    if (type === 'checkbox') {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: checked
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      values.fullName &&
      values.phoneNo &&
      values.City &&
      values.email &&
      values.username &&
      values.password &&
      values.agreeToTerms
    ) {
      try {
        const response = await fetch('http://localhost:4000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: values.fullName,
            teleno: values.phoneNo,
            city: values.City,
            email: values.email,
            uname: values.username,
            password: values.password,
          }),
        });
      
        if (!response.ok) {
          alert("Registration failed");
          throw new Error('Registration failed');
        }
      
        const responseBody = await response.json();
      
        if (responseBody.error === 'User Exists') {
          alert('Username already exists. Please choose a different username.');
          setValid(false);
          setSubmitted(true);
          return;
        }
      
        setValid(true);
        setSubmitted(true);
        alert('Registered successfully!');
        window.location.href="../Login";
        
      } catch (error) {
        console.error('Error during registration:', error.message);
        setValid(false);
        setSubmitted(true);
        alert(error.message);
        return;
      }
      
    }
   
    
    setSubmitted(true);
    
  };


  return (
    /*form onSubmit={this.handleSubmit} */
    <>
      <Navbar />
      <br />
      <div>
        <div className="form-container">
          <div className="h1">Register</div>
          <form className="register-form" onSubmit={handleSubmit}>
            {/* {submitted && valid && (
              
                // alert("Registered successfully!")
            )}
              */}

            {!valid && (
              <>
                <input
                  className="form-field"
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleInputChange}
                  /*onChange={(e) => this.setState({ fullname: e.target.value })} */
                />
                {submitted && !values.fullName && (
                  <span id="full-name-error">Please enter your Full name</span>
                )}

                <input
                  className="form-field"
                  type="text"
                  placeholder="Telephone No"
                  name="phoneNo"
                  value={values.phoneNo}
                  onChange={handleInputChange}
                  /*onChange={(e) => this.setState({ phoneNo: e.target.value })} */
                />
                {submitted && !values.phoneNo && (
                  <span id="phoneNo-error">Please enter your telephone no.</span>
                )}

                <input
                  className="form-field"
                  type="text"
                  placeholder="City"
                  name="City"
                  value={values.City}
                  onChange={handleInputChange}
                  /*onChange={(e) => this.setState({ City: e.target.value })} */
                />
                {submitted && !values.City && (
                  <span id="City-error">Please enter your city.</span>
                )}

                <input
                  className="form-field"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  /*onChange={(e) => this.setState({ email: e.target.value })} */
                />
                {submitted && !values.email && (
                  <span id="email-error">Please enter your email address</span>
                )}

                <input
                  className="form-field"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  onChange={handleInputChange}
                />
                {submitted && !values.username && (
                  <span id="username-error">Please enter your username</span>
                )}

                <input
                  className="form-field"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                />
                {submitted && !values.password && (
                  <span id="password-error">Please enter your password</span>
                )}

                <label1>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={values.agreeToTerms}
                    onChange={handleInputChange}
                  />
                  I agree to this website's terms and conditions
                </label1>
                {submitted && !values.agreeToTerms && (
                  <span id="terms-error">Please agree to the terms and conditions</span>
                )}

                <button className="form-field" type="submit">
                  Register
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;