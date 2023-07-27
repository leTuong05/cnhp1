import axiosInstance from '../axios';

export const GetList = (DepartmentID) => {
    return axiosInstance.get(`Position?DepartmentID=${DepartmentID}`);
};

export const UpdateListPosition = (body) => {
    return axiosInstance.patch('Position/update', body);
};

export const DeletePosition = (PositionID) => {
    return axiosInstance.delete(`Position/delete?PositionID=${PositionID}`);
};

export const AddPosition = (body) => {
    return axiosInstance.post('Position/insert', body);
};
