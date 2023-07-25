import axiosInstance from '../axios';

export const Login = (body) => axiosInstance.post('/Guest/GetAllTemporarilyStopWater', body);
