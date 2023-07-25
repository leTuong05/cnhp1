import axiosInstance from "../axios";

export const GetListWaterBill = (body) => {
    return axiosInstance.post('WaterBill/GetList', body)
}