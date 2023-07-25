import axiosInstance from "../axios";

export const GetListLocation = (parentID) => {
    return axiosInstance.get(`Region/GetRegionByParentId?ParentID=${parentID}`)
}