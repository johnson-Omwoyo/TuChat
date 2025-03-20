import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../includes/navbar";
import Footer from "../includes/footer";
import Chatui from "../assets/chart-ui.jpg";
import "./../styles/Landingpage.css";
import ChatIllustration from "../assets/chatillustration.jpg";
import { FaBolt, FaLock, FaSmile } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}

      <div className="container pt-5 px-md-5">
        {/* Hero Title with Animation */}
        <div className="row py-0">
          <div className="col-12 col-md-5 ">
            <div className="border p-3 rounded bg-white shadow ">
              {/* Description with Fade Animation */}
              <h3 className="fs-1 col-12 col-md-8 hero-header fade-in">
                Ongezea Circle Yako Ya Connections Na{" "}
                <span className="tuchat-brand">TuChat!!</span>
              </h3>
              <p className="ingia-tuchat col-12 col-md-8 ">
                Chat Real time bila buffers . Unda connections muhimu na zenye
                zinadumu..Join TuChat
              </p>
              {/* CTA Buttons */}
              <div className="cta-buttons fade-in text-center">
                <Link className="btn btn-lg btn-primary" to="/register">
                  Get Started
                </Link>
                <Link
                  className="btn btn-lg btn-outline-primary ms-3"
                  to="/features"
                >
                  Explore Features
                </Link>
              </div>
            </div>
            <div className="hero-animation fade-in container">
              <div className="row gap-5 text-center d-flex justify-content-center">
                <div className="feature-item col-5">
                  <FaBolt className="feature-icon" />
                  <h3>Haraka Mbaya</h3>
                  <p>Message in real-time bila delays.</p>
                </div>
                <div className="feature-item col-5">
                  <FaLock className="feature-icon" />
                  <h3>Secured</h3>
                  <p>End to end encrypted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Illustration */}

          <div className="col">
            <div
              className="position-relative d-flex m-0 p-0"
              style={{ height: "94%", overflow: "hidden" }}
            >
              <img
                src={Chatui}
                alt="Chat UI"
                className="chat-ui img-fluid w-100 h-auto"
                style={{ objectFit: "cover" }}
              />
              <div className="chat-bubble start-0 left">
                Eish, maze huku kuna vibe legit!
              </div>
              <div className="chat-bubble right end-0">
                Haha! Ndio mana tunatumia TuChat, zero stress!
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
