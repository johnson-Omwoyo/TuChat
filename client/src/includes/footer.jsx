import React from "react";
import { Link } from "react-router-dom";
import "./nav_foot.css";

const Footer = () => {
    return (
        <footer className="footer text-center mt-5 py-4">
            <div className="container">
                {/* Footer Branding */}
                <h5 className="fw-bold">TuChat</h5>
                <p className="text-muted-white">Designed for the people, with zero stress.</p>

                {/* Footer Links */}
                <div className="footer-links d-flex justify-content-center gap-3">
                    <Link to="#" className="footer-link">About Us</Link>
                    <Link to="#" className="footer-link">Privacy Policy</Link>
                    <Link to="#" className="footer-link">Terms & Conditions</Link>
                    <Link to="#" className="footer-link">Contact</Link>
                </div>

                {/* Social Media Icons */}
                <div className="social-icons mt-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-muted-white mt-3">&copy; {new Date().getFullYear()} TuChat. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
