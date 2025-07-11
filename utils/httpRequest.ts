import axios from "axios";

const baseURL = "http://localhost:1337/api";

const request = axios.create({
  baseURL,
  timeout: 10000,
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default request;
