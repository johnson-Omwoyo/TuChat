import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for redirection
import Navbar from "../includes/navbar";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
import { registerUser } from "../api"; // Import API function
import "./../styles/auth.css";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [warning, setWarning] = useState(null); // Warning for validation errors
  const navigate = useNavigate(); // Initialize navigation for redirect

  // Email validation function
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email) ? null : "Invalid email format.";
  };

  // Password validation function
  const validatePassword = (password) => {
    const minLength = /.{6,}/; // At least 6 characters
    const digit = /[0-9]/; // At least 1 digit
    const upper = /[A-Z]/; // At least 1 uppercase letter
    const lower = /[a-z]/; // At least 1 lowercase letter
    const special = /[!@#$%^&*(),.?":{}|<>]/; // At least 1 special character

    if (!minLength.test(password)) return "Password must be at least 6 characters.";
    if (!digit.test(password)) return "Password must contain at least 1 digit.";
    if (!upper.test(password)) return "Password must contain at least 1 uppercase letter.";
    if (!lower.test(password)) return "Password must contain at least 1 lowercase letter.";
    if (!special.test(password)) return "Password must contain at least 1 special character.";
    
    return null; // No errors
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const emailWarning = validateEmail(e.target.value);
      setWarning(emailWarning);
    }

    if (e.target.name === "password") {
      const passwordWarning = validatePassword(e.target.value);
      setWarning(passwordWarning);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setWarning(null);

    // Validate email and password before submitting
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError) {
      setWarning(emailError);
      return;
    }

    if (passwordError) {
      setWarning(passwordError);
      return;
    }

    try {
      const data = await registerUser(formData);
      console.log("User Registered:", data);
      setSuccess("Registration successful! Redirecting to login...");

      // Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Sign Up TuChat</h2>

            {/* Display warning for validation errors */}
            {warning && (
              <div className="alert alert-warning d-flex align-items-center mt-3" role="alert">
                <i className="fas fa-exclamation-triangle me-2 text-warning" style={{ fontSize: "20px" }}></i>
                <span>{warning}</span>
              </div>
            )}

            {/* Display error message if registration fails */}
            {error && (
              <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                <i className="fas fa-exclamation-circle me-2"></i>
                <span>{error}</span>
              </div>
            )}

            {/* Display success message if registration is successful */}
            {success && (
              <div className="alert alert-success d-flex align-items-center mt-3" role="alert">
                <i className="fas fa-check-circle me-2 text-success" style={{ fontSize: "20px" }}></i>
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password" onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
