import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../includes/navbar";
import Footer from "../includes/footer";
import Chatui from "../assets/chart-ui.jpg";
import './../styles/Landingpage.css';
import ChatIllustration from "../assets/chatillustration.jpg";

const LandingPage = () => {

  return (
    <div className="landing-container">
      <div className="container-fluid p-0">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <header className="hero text-center">
          <div className="container">
            {/* Hero Title with Animation */}
            <h1 className="fade-in">
              <span className="highlight">One Click.</span> Zero Pressure.
            </h1>

            {/* Description with Fade Animation */}
            <p className="lead fade-in">
              <span className="tuchat-brand">TuChat</span> ni app ya maform ni rahisi mbaya. No bots, no stress, no pressure.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons fade-in">
              <Link className="btn btn-lg btn-primary" to="/register">Get Started</Link>
              <Link className="btn btn-lg btn-outline-primary ms-3" to="/features">Explore Features</Link>
            </div>

            {/* Chat Preview */}
            <div className="hero-animation chat-preview d-flex justify-content-center">
              <div className="position-relative">
                <img src={Chatui} alt="Chat UI" className="chat-ui img-fluid" />
                <div className="chat-bubble left">Eish, maze huku kuna vibe legit!</div>
                <div className="chat-bubble right">Haha! Ndio mana tunatumia TuChat, zero stress!</div>
              </div>
            </div>

          </div>
        </header>

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default LandingPage;
