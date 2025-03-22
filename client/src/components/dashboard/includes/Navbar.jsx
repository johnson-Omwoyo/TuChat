import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">TuChat</span>

      {/* Notification & Profile */}
      <div className="d-flex align-items-center gap-3">
        <FaBell className="text-light fs-5" />
        <FaUserCircle className="text-light fs-5" />
      </div>
    </nav>
  );
};

export default Navbar;
