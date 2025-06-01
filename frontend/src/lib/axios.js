import axios from "axios";

// create axios instance with base url
const api = axios.create({
  baseURL: "http://localhost:5001/api",
});
    
export default api;
