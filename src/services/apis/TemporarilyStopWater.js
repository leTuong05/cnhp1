import { identifier } from "stylis";
import axiosInstance from "../axios";

//admin seach
export const getTemporarilyStopWater = (body) =>
  axiosInstance.post("TemporarilyStopWater/ByAdmin", body);

//xóa
export const DeleteTemporarilyStopWater = (id) =>
  axiosInstance.patch(`TemporarilyStopWater/DeleteTSWByAdmin?TSWID=${id}`);

export const InsertTemporarilyStopWater = (body) =>
  axiosInstance.post("TemporarilyStopWater/InsertByAdmin", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

export const UpdateTemporarilyStopWater = (body) =>
  axiosInstance.put("TemporarilyStopWater/UpdateByAdmin", body);
