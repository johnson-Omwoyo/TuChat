import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Features from "./components/Features";
import Verify from "./components/auth/Verify";
import Resend from "./components/auth/Resend";
import Password from "./components/auth/Password";  // Forgot Password Page
import ResetPassword from "./components/auth/Resetpassword"; // Password Reset Page
import Logout from "./components/auth/Logout"; // Logout Handling
import Home from "./components/dashboard/home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/resend" element={<Resend />} />
        <Route path="/forgot-password" element={<Password />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />

        {/* Dashboard Routes */}
        <Route path="/home" element={<Home />} />

        {/* Admin Routes */}
      </Routes>
    </Router>
  );
}

export default App;
