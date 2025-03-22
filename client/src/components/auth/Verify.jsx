import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../includes/navbar";
import Footer from "../../includes/footer";
import { verifyEmail } from "../../api"; // API function to verify email

const Verify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyUserEmail = async () => {
      try {
        const response = await verifyEmail(token);
        setMessage(response.data.message);
        setTimeout(() => navigate("/login"), 3000); // Redirect after success
      } catch (err) {
        setError(err.response?.data?.message || "Verification failed.");
      }
    };
    verifyUserEmail();
  }, [token, navigate]);

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Email Verification</h2>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Verify;
