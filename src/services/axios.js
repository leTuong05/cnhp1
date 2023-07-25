// import { store } from '../store';
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://103.163.215.105:8060/api/",
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const state = () => require("../store").store.getState();
    config.headers.Authorization = state().auth?.user?.Token; //thêm header
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.data?.Status === 1) {
      return Promise.reject(response.data);
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
