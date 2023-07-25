import axiosInstance from '../axios';

export const getListWaterPrice = () => axiosInstance.get('Guest/GetList');
