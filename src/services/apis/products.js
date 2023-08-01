import axiosInstance from '../axios';

export const getAllProduct = () => axiosInstance.get('Product');

export const getAdminProduct = () => axiosInstance.get(`Product/Manage`);

export const adminAddProduct = () => axiosInstance.post(`Product/Manage/Insert`);

export const getAllProduct1 = (PageSize, CurrentPage, SortType) =>
  axiosInstance.get(`Product?PageSize=${PageSize}&CurrentPage=${CurrentPage}&SortType=${SortType}`);

export const getProductDetail = (id) =>
  axiosInstance.get(`Product/GetByID?id=${id}`);

export const getProductBestSell = () => {
  return axiosInstance.get('Product/ProductBestSell')
}
