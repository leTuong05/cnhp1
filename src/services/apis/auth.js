import axiosInstance from "../axios";

export const Login = (body) => axiosInstance.post("Authservice/Login", body);

export const Logout = () => axiosInstance.get("Authservice/Logout");
