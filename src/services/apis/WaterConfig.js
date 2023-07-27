import axiosInstance from "../axios";
//
export const getWaterConfig = (type) =>
  axiosInstance.get(`WaterConfig?WaterPriceType=${type}`);
