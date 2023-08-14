import axiosInstance from '../axios';

export const GetCategory = () => {
    return axiosInstance.get(`Function/GetAllCategory`);
};

export const GetFuncByCategory = (CategoryID) => {
    return axiosInstance.get(`Function/GetFunctionByCategory?CategoryID=${CategoryID}`);
};

export const GetFunc = () => {
    return axiosInstance.get('Function/GetAllFunction');
};

export const CreOrUp = (body) => {
    return axiosInstance.post('Role/CreateOrUpdateRole', body);
};
