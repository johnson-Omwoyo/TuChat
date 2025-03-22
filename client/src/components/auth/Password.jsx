import React, { useState } from "react";
import Navbar from "../../includes/navbar";
import Footer from "../../includes/footer";
import { requestPasswordReset } from "../../api"; // API function to request reset link

const Password = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await requestPasswordReset(email);
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Request failed.");
    }
  };

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Forgot Password</h2>
            <p>Enter your email, and we’ll send you a link to reset your password.</p>

            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleRequestReset}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Password;
