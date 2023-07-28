import axiosInstance from '../axios';

export const getListStaff = () => axiosInstance.get('User/GetListStaff');
