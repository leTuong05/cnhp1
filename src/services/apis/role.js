import axiosInstance from '../axios';

export const GetList = (body) => {
    return axiosInstance.post(`Role/GetList`, body);
};
