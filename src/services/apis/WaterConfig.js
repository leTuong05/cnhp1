import axiosInstance from "../axios";
//
export const getWaterConfig = (type) =>
  axiosInstance.get(`WaterConfig?WaterPriceType=${type}`);

export const getWaterConfigByID = (id) =>
  axiosInstance.get(`WaterConfig/GetByID?id=${id}`);

export const InsertWaterConfig = (body) =>
  axiosInstance.post("WaterConfig/Insert", body);

export const UpdateWaterConfig = (body) =>
  axiosInstance.patch("WaterConfig/Update", body);

export const DeleteWaterConfig = (id) =>
  axiosInstance.patch(`WaterConfig/Delete?WaterPriceID=${id}`);
