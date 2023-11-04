import React, { useState } from "react";
import "./Signup.css";
import googleLogo from "../../Media/google.png";

import { useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/userAuthContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    name: "",
    password: "",
    cpassword: "",
  });

  const { signUp } = useUserAuth();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(credentials);
    try {
      await signUp(credentials.email, credentials.password);
      toast.success("User Created Succesfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="signup-main-container">
        <div className="signup-container">
          <div className="intro-container">
            <h1>DALE ARTS</h1>
            <p>
              Step into a world where creativity dances with imagination, and
              art is the language that speaks to the soul.
            </p>
          </div>
          <div className="signup-form">
            <h1>Signup</h1>
            <div className="form-content">
              <input
                onChange={onChange}
                type="text"
                name="name"
                value={credentials.name}
                placeholder="Full Name"
              />
              <input
                onChange={onChange}
                value={credentials.email}
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <input
                onChange={onChange}
                type="password"
                value={credentials.password}
                name="password"
                placeholder="Password"
              />
              <input
                onChange={onChange}
                type="password"
                value={credentials.cpassword}
                name="cpassword"
                placeholder="Confirm Password"
              />
              <button onClick={handleSubmit}>Create Account</button>
            </div>
            <hr></hr>
            <div className="sign-in-with-google-button">
              <img src={googleLogo} alt="google_logo" />
              <p>Continue with Google</p>
            </div>

            <p>
              Already have an account{" "}
              <span>
                {" "}
                <a href="/login">Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
