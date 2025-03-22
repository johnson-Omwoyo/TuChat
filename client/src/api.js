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
