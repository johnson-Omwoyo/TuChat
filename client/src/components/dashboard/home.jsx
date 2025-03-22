import React, { useEffect, useState } from "react";
import Navbar from "./includes/Navbar";
import Sidebar from "./includes/sidebar";
import "./home.css";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      {/* Navbar */}
      <Navbar />

      <div className="row flex-grow-1">
        {/* Sidebar - Collapsible on Small Screens */}
        <div className="col-md-3 col-lg-2 p-2 bg-light border-end">
          <Sidebar />
        </div>

        {/* Main Chat Section - Full Width on Small Screens */}
        <div className="col-md-9 col-lg-10 d-flex align-items-center justify-content-center bg-light main-container">
          <h2 className="text-muted">Welcome {user ? user.name : "Guest"} TuChat</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
