import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../includes/navbar";
import Footer from "../../includes/footer";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication token
    localStorage.removeItem("authToken");
    navigate("/login");
  }, [navigate]);

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Logging Out...</h2>
            <p>You are being redirected to the login page.</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Logout;
