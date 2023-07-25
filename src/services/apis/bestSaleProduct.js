import axiosInstance from "../axios";

export const GetBestSellProduct = (body) => {
    return axiosInstance.post("Guest/GetListPostByCategoryPostID", body)
};
    

