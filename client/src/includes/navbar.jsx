import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./nav_foot.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">TuChat</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/features">Features</Link></li>
                        <li className="nav-item"><Link className="btn" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="btn btn-primary" to="/register">Sign up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
