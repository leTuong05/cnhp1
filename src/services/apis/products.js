import axiosInstance from "../axios";

export const getAllProduct = (PageSize,CurrentPage,SortType) =>
  axiosInstance.get(`Product?PageSize=${PageSize}&CurrentPage=${CurrentPage}&SortType=${SortType}`);

export const getProductDetail = (id) =>
  axiosInstance.get(`Product/GetByID?id=${id}`);

export const getProductBestSell= ()=>{
  return axiosInstance.get('Product/ProductBestSell')
}