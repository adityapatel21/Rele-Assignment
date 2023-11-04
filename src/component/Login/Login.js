import React, { useState } from "react";
import "./Login.css";
import googleLogo from "../../Media/google.png";

import { useUserAuth } from "../../context/userAuthContext";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { logIn, googleSignIn } = useUserAuth();

  const handleSubmit = async () => {
    console.log(credentials);

    try {
      await logIn(credentials.email, credentials.password);
      toast.success("User Created Succesfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleLogIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login-main-container">
        <div className="login-container">
          <div className="intro-container">
            <h1>DALE ARTS</h1>
            <p>
              Wellcome into a world where creativity dances with imagination,
              and art is the language that speaks to the soul.
            </p>
          </div>
          <div className="login-form">
            <h1>Login</h1>
            <div className="form-content">
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                placeholder="Email Address"
              />
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={credentials.password}
                placeholder="Password"
              />

              <button onClick={handleSubmit}>Sign in</button>
            </div>
            <hr></hr>
            <div
              className="sign-in-with-google-button"
              onClick={handleGoogleLogIn}
            >
              <img src={googleLogo} alt="google_logo" />
              <p>Continue with Google</p>
            </div>

            <p>
              Don't have an account{" "}
              <span>
                {" "}
                <a href="/signup">Signup</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
