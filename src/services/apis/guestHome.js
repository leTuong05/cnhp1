import axiosInstance from "../axios";

export const getPostHome = () => axiosInstance.get("Guest/GetPostHome");
