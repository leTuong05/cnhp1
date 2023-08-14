import axiosInstance from "../axios";

export const getPostHome = (id) => axiosInstance.get(`Guest/GetPostHome?TypeTab=${id}`);
