import axiosInstance from '../axios';

export const GetList = (body) => {
    return axiosInstance.post(`Role/GetList`, body);
};

export const GetListRoleId = (RoleID) => {
    return axiosInstance.get(`Role/GetByRoleId?RoleID=${RoleID}`);
};

export const DeleteListRoleId = (RoleID) => {
    return axiosInstance.get(`Role/Delete?RoleID=${RoleID}`);
};

export const CreatOrUpdateListRoleId = (body) => {
    return axiosInstance.post(`Role/CreateOrUpdateRole`, body);
};
