import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Form,
  Input,
  Menu,
  Row,
  Select,
  Space,
  Tree,
  TreeSelect,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import TinyEditor from "../../Products/components/TinyEditor";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryPost,
  fetchGetDetailByID,
  fetchInsertPostList,
  fetchPostList,
  fetchUpdatePostList,
} from "../../../../reducers/categoryPostsSlice";
import { fetTagsList, fetchTags } from "../../../../reducers/tagsSlice";
import { useLocation, useNavigate } from "react-router-dom";

import { Editor } from "@tinymce/tinymce-react";
import Icon from "@ant-design/icons/lib/components/Icon";
import { updatePostList } from "../../../../services/apis/postsCategoryy";

const { TextArea } = Input;

const Posts = () => {
  const [form] = Form.useForm();
  // const [value, setValue] = useState();

  const location = useLocation();
  const [fileList, setFileList] = useState([]);
  const [content, setContent] = useState("");
  const [fileUpload, setFileUpload] = useState({});

  // const { type, record } = location.state || {} //lay Params qua navigate
  // const type= location.state.type || {} //lay Params qua navigate
  const { record } = location.state || {}; //lay Params qua navigate
  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  console.log("record>>>>:", record);

  const title = type === "add" ? "Thêm bài viết" : "Sửa bài viết";
  const titleSubmit = type === "add" ? "Đăng bài" : "Sửa bài";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postCategoryList = useSelector(
    (state) => state?.postCategory?.listsCategory?.listsCategory?.Object
  );
  const tagsList = useSelector(
    (state) => state?.tags?.tagsList?.tagsList?.Object
  );

  const getPostDetail = useSelector(
    (state) => state?.postCategory?.getPostDetail?.getPostDetailByID?.Object
  );

  //get data detail by ID
  useEffect(() => {
    if (type === "edit") {
      dispatch(fetchGetDetailByID(record?.PostID));
    }
  }, []);

  //get TAGS danh sách -> select Tags
  useEffect(() => {
    dispatch(
      fetTagsList({
        PageSize: 20,
        CurrentPage: 1,
        TextSearch: "",
      })
    );
  }, []);

  const file = fileList ? Object.values(fileList)[0] : null;
  console.log("fileList>>>>", file);

  //get list ALL
  const getList = () => {
    dispatch(
      fetchPostList({
        PageSize: 20,
        CurrentPage: 1,
        TextSearch: "",
        CategoryPostID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        Status: 0,
      })
    );
  };

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const onFinish = (values) => {
    if (type === "add") {
      submitFormPost(values);
      getList();
      navigate("/danh-sach-bai-viet");
    } else if (type === "edit") {
      submitEditPost();
    }
  };

  //CREATE
  const submitFormPost = (values) => {
    dispatch(
      fetchInsertPostList({
        Title: values.title,
        file: fileUpload,
        Summary: values.summary,
        CategoryPostID: values.category,
        Content: content,
        listTag: values.taggss,
      })
    );
  };

  //EDIT
  const submitEditPost = () => {
    form.validateFields().then((values) => {
      const body = {
        PostID: getPostDetail?.PostID,
        Title: values.title,
        fileOK: fileUpload,
        Summary: values.summary,
        CategoryPostID: values.category,
        Content: content,
        listTag: values.taggss,
      };
      updatePostList(body)
        .then(() => {
          notification.success({
            message: "Cập nhật bài viết thành công",
          });
          navigate("/danh-sach-bai-viet");
          getList();
        })
        .catch((error) => {
          notification.error({
            message: error.Object,
          });
        });
    });
  };

  //data dropdown Tags
  const options = [];
  tagsList?.forEach((item) => {
    options.push({
      value: item.TagsID,
      label: item.TagsName,
    });
  });

  //getCategory
  useEffect(() => {
    dispatch(fetchCategoryPost());
  }, []);

  //get Tags list
  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  // get SELECT DANH MỤC
  const treeDataPush = [];
  postCategoryList?.forEach((item) => {
    const parent = {
      title: item.CategoryPostName,
      value: item.CategoryPostID,
      children: [],
    };
    treeDataPush.push(parent);
    if (item.GetList && item.GetList.length > 0) {
      item.GetList.forEach((child) => {
        const childNode = {
          title: child.CategoryPostName,
          value: child.CategoryPostID,
        };
        parent.children.push(childNode);
      });
    }
  });

  //set Default Value
  useEffect(() => {
    if (type === "edit") {
      form.setFieldsValue({
        title: record?.Title,
        file: record?.FileUrl,
        summary: record?.Summary,
        category: record?.CategoryPostID,
        contentText: record?.Content,
        taggss: record?.TagsIDList,
      });
    } else {
      form.resetFields();
    }
  }, [record]);

  console.log(record?.FileUrl);

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    accept: ".PNG, .JPEG",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        const fileList = info.file;
        setFileUpload(fileList.originFileObj);
      }
    },
  };

  const fileUrl = record?.FileUrl;

  return (
    <Wrapper>
      <Card title={title}>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="title"
            label="Tiêu đề"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Nhập tiêu đề" />
          </Form.Item>
          <Row
            flexDirection="column"
            flexWrap="wrap"
            style={{ marginBottom: "10px" }}
          >
            <Col
              span={24}
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              Hình thu nhỏ
            </Col>
            <Col span={24} style={{ marginBottom: "10px" }}>
              Dung lượng file tối đa 1MB, định dạng:... JPEG, .PNG
            </Col>
            <Form.Item name="fileOK" initialValue={fileUrl}>
              <Upload {...props} listType="picture" maxCount={1}>
                <Button icon={<UploadOutlined />}>Tải ảnh</Button>
              </Upload>
            </Form.Item>
          </Row>
          <Form.Item
            name="summary"
            label="Tóm tắt"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={4} placeholder="Nhập nội dung" />
          </Form.Item>
          <Form.Item name="contentText" label="Nôi dung bài viết">
            <Editor
              apiKey="ekjbux3o3ibi4jxd9zz545cyj67o7g2ahlz4skafkt64r1iy"
              onEditorChange={handleEditorChange}
              value={content}
              init={{
                placeholder: "Nhập nội dung bài viết của bạn",
              }}
            />
          </Form.Item>

          <Form.Item
            name="category"
            label="Danh mục"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TreeSelect
              style={{
                width: "100%",
              }}
              dropdownStyle={{
                maxHeight: 400,
                overflow: "auto",
              }}
              treeData={treeDataPush}
              placeholder="Chọn danh mục"
            />
          </Form.Item>

          <Form.Item
            name="taggss"
            label="Thẻ (từ khóa)"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              mode="tags"
              placeholder="Thêm thẻ"
              style={{
                width: "100%",
              }}
              options={options}
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              style={{ background: "var(--btn-primary-color)", color: "#FFF" }}
            >
              {titleSubmit}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default Posts;
// GET dữ liệu dạng TreeData (cnhp.h2q)
// const getTreeData = (data) => {
//   const treeData = [];
//   data?.forEach((category) => {
//     if (category.Level === 1) {
//       treeData.push({
//         title: category.CategoryPostName,
//         value: category.CategoryPostID,
//         children: [],
//       });
//     } else {
//       const parentId = category.ParentID;
//       treeData?.forEach((parent) => {
//         if (parent.value === parentId) {
//           parent.children.push({
//             title: category.CategoryPostName,
//             value: category.CategoryPostID,
//           });
//         }
//       });
//     }
//   });
//   return treeData;
// };

// const handleChange = (value) => {
//     console.log(`selected ${value}`);
//   };
