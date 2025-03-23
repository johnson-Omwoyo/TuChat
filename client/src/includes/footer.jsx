import React from "react";
import { Link } from "react-router-dom";
import "./nav_foot.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white text-center">
      <div className="row p-5">
        <div className="col fs-5"> TuChat</div>
        <div className="col-4 ">
          <ul className="d-md-flex gap-4 footer-links text-center">
            <li className="">Terms of service</li>
            <li className=""> Privacy Policy</li>
            <li className="">Community Guidelines</li>
            <li className="">Refund Policy</li>
          </ul>
        </div>
        <div className="col social-icons text-center">
          {" "}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col">
          <hr />
          {/* Copyright */}
          <p className="text-muted-white mt-3">
            &copy; {new Date().getFullYear()} TuChat. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
