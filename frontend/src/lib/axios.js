import axios from "axios";

// create axios instance with base url 
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"
const api = axios.create({
  baseURL: BASE_URL,
});
    
export default api;
