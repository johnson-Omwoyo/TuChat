import React from "react";
import "../styles/Features.css";
import Navbar from "../includes/navbar";
import Footer from "../includes/footer";
import { FaBolt, FaLock, FaSmile } from "react-icons/fa";

const Features = () => {
  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        {/* Navbar */}
        <Navbar />
        <section className="features-section">
          <div className="container">
            <h2 className="text-center">Why <span className="highlight">TuChat?</span></h2>
            <p className="text-center lead">Fast, secure, and stress-free messaging.</p>

            <div className="features-grid">
              <div className="feature-item">
                <FaBolt className="feature-icon" />
                <h3>Haraka Mbaya</h3>
                <p>Message in real-time bila delays.</p>
              </div>

              <div className="feature-item">
                <FaLock className="feature-icon" />
                <h3>Data Safe</h3>
                <p>Privacy iko juu, hakuna story za leakage.</p>
              </div>

              <div className="feature-item">
                <FaSmile className="feature-icon" />
                <h3>Mzuka wa Life</h3>
                <p>Customize profile yako vile unataka na emojis freshi.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default Features;
