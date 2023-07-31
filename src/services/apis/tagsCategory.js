import axiosInstance from "../axios";


export const getAllCategoryTags = () => axiosInstance.get("Tags/GetAllForCombobox");

//get ALL Tabs list
export const getListsTag = (body) => axiosInstance.post("Tags/GetAll", body);

//delete thẻ
export const deleteTags = (tagsID) => axiosInstance.delete(`Tags/Delete?Id=${tagsID}`);

//update
export const updateTags = (body) => axiosInstance.put("Tags/Update", body)

//add 
export const addNewTags = (body) => axiosInstance.post("Tags/Create", body);


