import axiosInstance from '../axios';

export const GetList = (body) => {
    return axiosInstance.post(`Role/GetList`, body);
};

export const GetListRoleId = (RoleID) => {
    return axiosInstance.get(`Role/GetByRoleId?RoleID=${RoleID}`);
};
