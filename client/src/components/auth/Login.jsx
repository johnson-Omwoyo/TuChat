import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../includes/navbar";
import Footer from "../../includes/footer";
import { Link } from "react-router-dom";
import { loginUser } from "../../api"; // Import API function
import "./../../styles/auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [warning, setWarning] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get query params from URL

  useEffect(() => {
    // Extract success message from URL query parameters
    const params = new URLSearchParams(location.search);
    const successMessage = params.get("setSuccess");

    if (successMessage) {
      setSuccess(successMessage);

      // Clear query parameter from URL after 5 seconds
      setTimeout(() => {
        navigate("/login", { replace: true }); // Remove query params
      }, 5000);
    }
  }, [location, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setWarning(null);

    if (!formData.email || !formData.password) {
      setWarning("Please fill in all fields before submitting.");
      return;
    }

    try {
      const data = await loginUser(formData);
      console.log("User Logged In:", data);

      // Store user details in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Login successful! Redirecting...");

      // Redirect user after 3 seconds
      setTimeout(() => {
        navigate("/home");
      }, 3000);
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

            {/* Display warning for validation errors */}
            {warning && (
              <div className="alert alert-warning d-flex align-items-center mt-3" role="alert">
                <i className="fas fa-exclamation-triangle me-2 text-warning" style={{ fontSize: "20px" }}></i>
                <span>{warning}</span>
              </div>
            )}

            {/* Display error message if login fails */}
            {error && (
              <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                <i className="fas fa-exclamation-circle me-2"></i>
                <span>{error}</span>
              </div>
            )}

            {/* Display success message if present */}
            {success && (
              <div className="alert alert-success d-flex align-items-center mt-3" role="alert">
                <i className="fas fa-check-circle me-2 text-success" style={{ fontSize: "20px" }}></i>
                <span>{success}</span>
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
            <p><Link to="/forgot-password">Lost Password?</Link></p>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
