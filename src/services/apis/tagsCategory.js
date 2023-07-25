import axiosInstance from "../axios";

//get Tabs list
export const getAllCategoryTags = () => axiosInstance.get("Tags/GetAllForCombobox");

export const getListsTag = (body) => axiosInstance.post("Tags/GetList", body);

//delete thẻ
export const deleteTags = (tagsID) => axiosInstance.post(`Tags/Delete?TagsID=${tagsID}`);

//update
export const updateTags = (body) => axiosInstance.post("Tags/Update", body)

//add 
export const addNewTags = (body) => axiosInstance.post("Tags/Insert", body);


