import axios from "axios";

// API 1 configuration
export const api1 = axios.create({
  baseURL: "https://1db2-2404-c0-5610-00-19bc-56a2.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true"},
});

// API 2 configuration
export const api2 = axios.create({
  baseURL: "https://seleksi-sea-2023.vercel.app",
  headers: {
    "Content-Type": "application/json"
  },
});
