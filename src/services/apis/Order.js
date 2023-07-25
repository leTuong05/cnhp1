import axios from "axios";
import axiosInstance from "../axios";

// export const GetAllOrderForAdmin = (body) => {
//     return axiosInstance.post('Order/GetAllOrdersForAdmin', body)
// }
export const GetListOrder = (TextSearch, CurrentPage, PageSize, CreateDateTo, CreateDateFrom, DeliveryDateTo, DeliveryDateFrom, StatusOrder) => {
    return axiosInstance.get(`Order/GetList?TextSearch=${TextSearch}&CurrentPage=${CurrentPage}&PageSize=${PageSize}&CreateDateTo=${CreateDateTo}&CreateDateFrom=${CreateDateFrom}&DeliveryDateTo=${DeliveryDateTo}&DeliveryDateFrom=${DeliveryDateFrom}&StatusOrder=${StatusOrder}`)
}

// export const GetOrderDetails = (OrderID) => {
//     return axiosInstance.get(`Order/GetOrderDetails?OrderID=${OrderID}`)
// }
export const GetOrderDetails = (OrderID) => {
    return axiosInstance.get(`Order/GetByID?id=${OrderID}`)
}

export const UpdateOrder = (body) => {
    return axiosInstance.post('Order/UpdateOrder', body)
}

export const CancelOrder = (body) => {
    return axiosInstance.post('Order/CancelOrder', body)
}