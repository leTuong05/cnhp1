import axiosInstance from '../axios';

export const getAllProduct = () => axiosInstance.get('Product');

export const getAdminProduct = () => axiosInstance.get(`Product/Manage`);

export const adminAddProduct = () => axiosInstance.post(`Product/Manage/Insert`);
