import React from "react";
import { Link } from "react-router-dom"
import "./Login.css";
import "../Signup/Signup.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-title">
        <h1 className="login-header">
          Supa <span className="menu">Menu</span>
        </h1>
      </div>
      <form className="form">
        <h2 className="login-form-title1">Welcome Back !</h2>
        <h2 className="login-form-title2">Login to SupaMenu</h2>
        <p className="login-form-para">Enter your email and password below</p>
        <section className="form-section">
          <div className="email">
            <label htmlFor="email" className="email-label">
              Email
            </label>
            <input type="email" id="email" className="email-input" />
          </div>
          <div className="password">
            <label htmlFor="password" className="password-label">
              password
            </label>
            <input type="password" id="password" className="password-input" />
          </div>
          <Link to={"/dashboard"} className="form-btn">Log In</Link>
          <h2 className="form-already">Don't have an account? <Link to={"/signup"} className="form-already-login">Sign up</Link></h2>
          <h2 className="form-already">Forgot your password/login <Link to={"/"} className="form-already-login">reset</Link></h2>
        </section>
      </form>
    </div>
  );
};

export default Login;
