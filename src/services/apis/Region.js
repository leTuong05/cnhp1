import axiosInstance from "../axios";

export const GetRegionByParentId = (ParentID) =>{
    return axiosInstance.get(`Region/GetRegionByParentId?ParentID=${ParentID}`)
}
