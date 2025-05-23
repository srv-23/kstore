import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      set({ user: response.data.data, error: null });
      toast.success("Login successful");
    } catch (error) {
      set({ error: "Invalid credentials" });
      toast.error("Invalid credentials");
    } finally {
      set({ loading: false });
    }
  },

  register: async (name, email, password) => {
    set({ loading: true });
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/register`, {
        name,
        email,
        password,
      });
      set({ user: response.data.data, error: null });
      toast.success("Registration successful");
    } catch (error) {
      set({ error: "Registration failed" });
      toast.error("Registration failed");
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    set({ user: null });
    toast.success("Logged out successfully");
  },
})); 