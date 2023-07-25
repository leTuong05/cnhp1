import axiosInstance from "../axios";

export const getAllProduct = (body) =>
  axiosInstance.post("Guest/GetAllProduct", body);

export const getProductDetail = (id) =>
  axiosInstance.get(`Guest/GetProductDetails?ProductID=${id}`);
