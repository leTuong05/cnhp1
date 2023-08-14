import axiosInstance from "../axios";

export const getOverview = (body) =>
  axiosInstance.post("Region/DetailOverView", body); // get tong quan

export const getDetailOverView = (body) => 
  axiosInstance.post("Region/GetOverView", body); // get d/s chi tiet

export const updateStatusWaterBill = (body) => 
  axiosInstance.post("Overview/UpdateStatusWaterBill", body); // update status hoa don nuoc

export const updateNoteContact = (body) => 
  axiosInstance.post("Overview/UpdateNoteContact", body); // update ghi chu ho tro

