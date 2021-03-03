import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:49153",
});

export default api;
