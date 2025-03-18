import React, { useState } from "react";
import Navbar from "../includes/navbar";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
import "./../styles/auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Logged In:", formData);
  };

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        {/* Navbar */}
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Login TuChat</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
          </div>
        </div>
        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default Login;
