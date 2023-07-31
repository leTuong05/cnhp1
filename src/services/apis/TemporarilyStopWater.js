import axiosInstance from "../axios";

//admin seach
export const getTemporarilyStopWater = (body) =>
  axiosInstance.post("TemporarilyStopWater/ByAdmin", body);
