import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://crud-users-dev-pakh.3.us-1.fl0.io",
});

export default axiosInstance;
