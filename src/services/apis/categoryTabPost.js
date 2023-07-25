import axiosInstance from "../axios";

export const getCategoryTabPosts = () => axiosInstance.get('Guest/GetCategoryPost')