import axiosInstance from '../axios';

export const getListUser = (body) => axiosInstance.post('User/GetUserByDepartment', body);

export const deleteUser = body;
