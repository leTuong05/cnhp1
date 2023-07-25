import axiosInstance from "../axios";

export const getAllCategoryPost = () => axiosInstance.get("CategoryPost/GetList");

// get List Posts
export const postGetList = (body) => axiosInstance.post("Post/GetList", body);

//delete by id
export const deleteGetListPost = (id) => axiosInstance.patch(`Post/Delete?PostID=${id}`)

//insert add post
export const insertPostList = (body) => axiosInstance.post("Post/Insert", body)

//cancel
export const cancelGetListPost = (id) => axiosInstance.patch(`Post/CancelPost?PostID=${id}`)

//repost
export const repostGetListPost = (id) => axiosInstance.patch(`Post/RePost?PostID=${id}`)

// get Details by ID
export const getDetailPostByID = (id) => axiosInstance.get(`Post/GetDetail?PostID=${id}`);

//update posts
export const updatePostList = (body) => axiosInstance.put("Post/Update", body)

