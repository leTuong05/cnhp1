import axiosInstance from "../axios";

//hop dong lap dat tu nhan:
export const lapDatTuNhan = (body) =>
  axiosInstance.post("Guest/InstallationWaterForIndividual", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

//hop dong lap dat co quan:
export const lapDatCoQuan = (body) =>
  axiosInstance.post("Guest/InstallationWaterForAgent", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

//GET D/s đơn giá định mức
export const getWaterConfig = (id) =>
  axiosInstance.get(`WaterConfig?WaterPriceType=${id}`);
