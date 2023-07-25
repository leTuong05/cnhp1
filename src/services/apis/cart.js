import axiosInstance from '../axios';

export const getAllProductInCard = () => axiosInstance.get('Cart/GetAllProductInCart');
