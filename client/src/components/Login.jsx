import React, { useState } from "react";
import Navbar from "../includes/navbar";
import Footer from "../includes/footer";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api"; // Import API function
import "./../styles/auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData);
      console.log("User Logged In:", data);
      alert("Login successful!");

      // Redirect user after login
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        {/* Navbar */}
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Login TuChat</h2>
            {error && (
              <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                <i className="fas fa-exclamation-circle me-2"></i>
                <span>{error}</span>
              </div>
            )}
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
