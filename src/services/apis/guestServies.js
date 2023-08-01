import axiosInstance from "../axios";

export const contractInstallForIndividual = (body) =>
  axiosInstance.post("Guest/InstallationWaterForIndividual", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
export const contractInstallForAgent = (body) =>
  axiosInstance.post("Guest​/InstallationWaterForAgent", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

export const contractMoveForIndividual = (body) =>
  axiosInstance.post("Guest​/MovingWaterForIndividual", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

export const contractMoveForAgent = (body) =>
  axiosInstance.post("Guest​/MovingWaterForAgent", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
