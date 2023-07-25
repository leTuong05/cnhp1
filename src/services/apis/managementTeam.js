import axiosInstance from "../axios";

//d/s to quan ly theo trang thai, khu vuc
export const getListManagementTeam = (body) => axiosInstance.post("ManagementTeam/GetListManagementTeam", body)

// lay all danh sach to quan ly
export const getAll = () => axiosInstance.get("ManagementTeam/GetAll");

//create
export const createManagementTeam = (body) => axiosInstance.post("/ManagementTeam/CreateManagementTeam", body)

//delete
export const deleteManagementTeam = (id) => axiosInstance.delete(`ManagementTeam/DeleteManagementTeam?ManagementTeamID=${id}`);

//update
export const updateManagementTeam = (body) => axiosInstance.put("ManagementTeam/UpdateManagementTeam", body);



//get list huyen/quan
export const getRegion = (id) => axiosInstance.get(`Region/GetRegionByParentId?ParentID=${id}`)

//get list phuong/xa
export const getRegionByRegionID = (id) => axiosInstance.get(`Product/GetAddress?ParentID=${id}`)

//get list region
export const getRegionAll = () => axiosInstance.get("Product/GetProvince");

//get List Staff
export const getListStaff = () => axiosInstance.get("User/GetListStaff");

//get List region HP
export const getListRegionHP = () => axiosInstance.get("Region/GetRegion");
