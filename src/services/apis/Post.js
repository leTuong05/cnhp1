import axiosInstance from "../axios";

export const GetAllPost = (body)=>{
    return axiosInstance.post('Post/GetAll',body)
}