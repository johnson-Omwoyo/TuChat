import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Match with backend

// register
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error;
  }
};

// login
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, userData);
    // Store token in local storage (if backend returns a token)
    if (response.data.token) {
      localStorage.setItem("userToken", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// profile
export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token) throw new Error("No token found");

    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    console.error("Fetching profile failed:", error.response?.data || error.message);
    throw error;
  }
};


// Verify Email
export const verifyEmail = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user/verify/${token}`);
    return response.data;
  } catch (error) {
    console.error("Email verification failed:", error.response?.data || error.message);
    throw error;
  }
};

// Resend Verification Email
export const resendVerificationEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/user/resend-verification`, { email });
    return response.data;
  } catch (error) {
    console.error("Resending verification email failed:", error.response?.data || error.message);
    throw error;
  }
};

// Forgot Password (Request Reset Link)
export const requestPasswordReset = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/user/forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error("Forgot password request failed:", error.response?.data || error.message);
    throw error;
  }
};

// Reset Password (Set New Password)
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/user/reset-password`, { token, newPassword });
    return response.data;
  } catch (error) {
    console.error("Password reset failed:", error.response?.data || error.message);
    throw error;
  }
};
