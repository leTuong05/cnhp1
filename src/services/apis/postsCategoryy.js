import axiosInstance from "../axios";

//lay ra danh muc bai viet ALL
export const getAllCategoryPost = () =>
  axiosInstance.get("CategoryPost/GetListCategoryPost");

// lấy danh sach bài viết  của danh mục bài viết , trạng thái tìm keiesm -quản lý bài đăng
export const postGetList = (body) => axiosInstance.post("/Post/GetAll", body);

//delete by id
export const deleteGetListPost = (id) =>
  axiosInstance.delete(`Post/DeletePost?PostID=${id}`);

//insert add post
export const insertPostList = (body) =>
  axiosInstance.post("Post/CreatePost", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

//cancel
export const cancelGetListPost = (id) =>
  axiosInstance.patch(`Post/RemovePost?PostID=${id}`);

//repost
export const repostGetListPost = (id) =>
  axiosInstance.patch(`Post/RePost?PostID=${id}`);

// get Details by ID
export const getDetailPostByID = (id) =>
  axiosInstance.get(`Post/GetPost?PostID=${id}`);

//update posts
export const updatePostList = (body) =>
  axiosInstance.put("Post/UpdatePost", body, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });

//upload file
export const uploadFileMuti = (body) =>
  axiosInstance.post("File/UploadFile", body);
