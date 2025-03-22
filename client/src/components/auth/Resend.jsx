import React, { useState } from "react";
import Navbar from "../../includes/navbar";
import Footer from "../../includes/footer";
import { resendVerificationEmail } from "../../api"; // API function to resend email

const Resend = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleResend = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const response = await resendVerificationEmail(email);
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Resend failed.");
    }
  };

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Resend Verification Email</h2>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleResend}>
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
                Resend Email
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resend;
