import axiosInstance from "../axios";

export const getAllListPosts = (body) =>
  axiosInstance.post("Guest/GetListPostByCategoryPostID", body);