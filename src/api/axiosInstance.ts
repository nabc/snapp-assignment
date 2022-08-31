import axios from "axios";

import { requestError, requestInterceptors } from "./request.interceptor";
import { responseError, responseInterceptors } from "./response.interceptor";

const axiosInstance = axios.create({
  baseURL: String(process.env.REACT_APP_BASE_URL),
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(requestInterceptors, requestError);
axiosInstance.interceptors.response.use(responseInterceptors, responseError);

export default axiosInstance;
