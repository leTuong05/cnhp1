import axiosInstance from '../axios';

export const GetDepartment = () => {
    return axiosInstance.get('Department/getAll');
};

export const GetDepartmentParent = () => {
    return axiosInstance.get('Department/getAllParent');
};
