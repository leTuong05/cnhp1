import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Space,
  Input,
  Button,
  Table,
  message,
  Popconfirm,
} from "antd";
import { Tree } from "antd";
import { Select } from "antd";
import { WrapperManagePost } from "./style";
import { useNavigate } from "react-router-dom";
import {
  fetchCancelPostList,
  fetchCategoryPost,
  fetchDeletePostList,
  fetchPostList,
  fetchRePostList,
} from "../../../reducers/categoryPostsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { fetDeleteTagsList } from "../../../reducers/tagsSlice";
import moment from "moment";
import iconEdit from "../../../common/images/imageHome_page/edit.png";
import cacel from "../../../common/images/imageHome_page/cacel.png";
import xoa from "../../../common/images/imageHome_page/delete.png";
import danglai from "../../../common/images/imageHome_page/repost.png";
import TitleComponent from "../../../components/TitleComponent";

// GET dữ liệu dạng TreeData
// const getTreeData = (data) => {
//   const treeData = [];
//   data?.forEach((category) => {
//     if (category.Level === 1) {
//       treeData.push({
//         key: category.CategoryPostID,
//         title: category.CategoryPostName,
//         children: [],
//       });
//     } else {
//       const parentId = category.ParentID;
//       treeData?.forEach((parent) => {
//         if (parent.key === parentId) {
//           parent.children.push({
//             key: category.CategoryPostID,
//             title: category.CategoryPostName,
//           });
//         }
//       });
//     }
//   });
//   return treeData;
// };
// const getTreeData = () => {
//   const treeData = [];
//     data?.forEach((category) => {
//       // if (category.Level === 1) {
//         treeData.push({
//           key: category.CategoryPostID,
//           title: category.CategoryPostName,
//           // children: [],
//         });
//       // }
//       // else {
//       //   const parentId = category.ParentID;
//       //   treeData?.forEach((parent) => {
//       //     if (parent.key === parentId) {
//       //       parent.children.push({
//       //         key: category.CategoryPostID,
//       //         title: category.CategoryPostName,
//       //       });
//       //     }
//       //   });
//       // }
//     });
//     return treeData;
// }

const options = [
  {
    value: 2,
    label: "Đang đăng",
  },
  {
    value: 3,
    label: "Đã gỡ",
  },
];

const { Search } = Input;

const ManagePosts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataChildrenCategory, setDataChildrenCategory] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [keySelect, setKeySelect] = useState([]);
  const [disableSelection, setDisableSelection] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const postCategoryList = useSelector(
    (state) => state?.postCategory?.listsCategory?.listsCategory?.Object
  );
  const postList = useSelector(
    (state) => state?.postCategory?.postList?.postList?.Object
  );

  console.log(postList);

  //treeData
  // const treeData = getTreeData(postCategoryList);

  //DANH MỤC
  const treeData = [];
  postCategoryList?.forEach((item) => {
    const parent = {
      key: item.CategoryPostID,
      title: item.CategoryPostName,
      children: [],
    };
    treeData.push(parent);

    if (item.GetList && item.GetList.length > 0) {
      item.GetList.forEach((child) => {
        const childNode = {
          key: child.CategoryPostID,
          title: child.CategoryPostName,
        };
        parent.children.push(childNode);
      });
    }
  });

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (_, __, index) => index + 1,
    },
    {
      title: "TIÊU ĐỀ BÀI VIẾT",
      dataIndex: "Title",
    },
    {
      title: "NGÀY ĐĂNG",
      dataIndex: "PublicationTime",
      render: (text) => {
        const PublicationTime = moment(text).format("DD/MM/YYYY");
        return PublicationTime;
      },
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "Status",
      render: (value, record) => {
        if (value == 3) {
          return (
            <>
              <div className="set-hover" style={{ display: "flex" }}>
                {/* <Button
                  onClick={() => navigateToPost("edit", record)}
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "8px",
                    backgroundColor: "#b7eb8f",
                  }}
                >
                  <EditOutlined style={{ fontSize: "14px" }} />
                </Button> */}
                <div onClick={() => navigateToPost("edit", record)}>
                  <img src={iconEdit}></img>
                </div>

                <Popconfirm
                  title="Xóa thẻ"
                  description={`Bạn chắc chắn muốn xóa thẻ này không ?`}
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  {/* <Button
                    // onClick={(record) => handleDelete(record)}
                    style={{
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "8px",
                      background: "#ffccc7",
                    }}
                  >
                    <DeleteOutlined style={{ fontSize: "14px" }} />
                  </Button> */}
                  <div>
                    <img src={xoa}></img>
                  </div>
                </Popconfirm>

                <Popconfirm
                  title="Đăng lại bài viết"
                  description={`Bạn chắc chắn muốn đăng lại bài viết này không ?`}
                  onConfirm={confirmRepost}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  {/* <Button
                    onClick={(record) => handleCacel(record)}
                    style={{
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#91caff",
                    }}
                  >
                    <ReloadOutlined style={{ fontSize: "14px" }} />
                  </Button> */}
                  <div onClick={(record) => handleCacel(record)}>
                    <img src={danglai}></img>
                  </div>
                </Popconfirm>
              </div>
            </>
          );
        } else if (value == 2) {
          return (
            <>
              <div style={{ display: "flex" }}>
                {/* <Button
                  onClick={() => navigateToPost("edit", record)}
                  style={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "8px",
                    backgroundColor: "#b7eb8f",
                  }}
                >
                  <EditOutlined style={{ fontSize: "14px" }} />
                </Button> */}
                <div onClick={() => navigateToPost("edit", record)}>
                  <img src={iconEdit}></img>
                </div>

                <Popconfirm
                  title="Xóa thẻ"
                  description={`Bạn chắc chắn muốn xóa thẻ này không ?`}
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  {/* <Button
                    // onClick={(record) => handleDelete(record)}
                    style={{
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "8px",
                      background: "#ffccc7",
                    }}
                  >
                    <DeleteOutlined style={{ fontSize: "14px" }} />
                  </Button> */}
                  <div>
                    <img src={xoa}></img>
                  </div>
                </Popconfirm>

                <Popconfirm
                  title="Gỡ bài viết"
                  description={`Bạn chắc chắn muốn gỡ bài viết này không ?`}
                  onConfirm={confirmCacel}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  {/* <Button
                    onClick={(record) => handleRepost(record)}
                    style={{
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#fff1b8",
                    }}
                  >
                    <CloseCircleOutlined style={{ fontSize: "14px" }} />
                  </Button> */}
                  <div>
                    <img
                      src={cacel}
                      onClick={(record) => handleRepost(record)}
                    ></img>
                  </div>
                </Popconfirm>
              </div>
            </>
          );
        }
      },
    },
  ];

  const handleRowClick = (record) => {
    console.log("recordddd", record.PostID);
    setSelectedRow(record);
  };
  const cancel = (e) => {
    // console.log(e);
    message.error("Hủy bỏ");
  };

  const handleRepost = (record) => {
    console.log("repost", record);
  };

  const handleCacel = (record) => {
    console.log("repost", record);
  };

  //get danh muc
  useEffect(() => {
    dispatch(fetchCategoryPost());
  }, []);

  //get listPost
  const getList = () => {
    dispatch(
      fetchPostList({
        PageSize: 20,
        CurrentPage: currentPage,
        TextSearch: "",
        Status: 0,
        CategoryPostID: keySelect,
      })
    );
  };

  //hàm SEARCH theo textSearch
  const onSearch = (value) => {
    console.log(value);
    dispatch(
      fetchPostList({
        PageSize: 20,
        CurrentPage: currentPage,
        TextSearch: value,
        Status: 0,
        CategoryPostID: keySelect,
      })
    );
  };

  //LỌC TRẠNG THÁI
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    dispatch(
      fetchPostList({
        PageSize: 20,
        CurrentPage: currentPage,
        TextSearch: "",
        Status: value,
        CategoryPostID: keySelect,
      })
    );
  };

  useEffect(() => {
    getList();
  }, [keySelect]); //dùng dependencies : useEffect chỉ được gọi khi keySelect thay đổi

  // console.log("data: >>>>", postCategoryList);
  const onSelect = (keys) => {
    // console.log("keys:", keys);
    const string = keys.join("");
    setKeySelect(string);
  };

  //cập nhât table data
  useEffect(() => {
    setTableData(postList);
  });

  //xóa thành công
  const confirm = () => {
    dispatch(fetchDeletePostList(selectedRow.PostID)).then(() => {
      getList();
      message.success("Xóa thành công ");
    });
  };

  //gỡ bài đăng
  const confirmCacel = () => {
    dispatch(fetchCancelPostList(selectedRow.PostID)).then(() => {
      getList();
      message.success("Gỡ bài đăng thành công ");
    });
  };

  //đăng lại
  const confirmRepost = () => {
    dispatch(fetchRePostList(selectedRow.PostID)).then(() => {
      getList();
      message.success("Đăng lại bài thành công ");
    });
  };

  const handleEdit = (record) => {
    // console.log("record=====", record);
    // Get the data from the row
    const { id, title, content } = record;

    // Navigate to the `/dang-bai` page
    navigate("/dang-bai", {
      state: { id, title, content },
    });
  };

  // console.log(selectedRow);

  const navigateToPost = (type, record) => {
    const state = type === "edit" ? { record } : null;
    const url = `/dang-bai?type=${type}`;

    navigate(url, { state });
  };

  return (
    <WrapperManagePost>
      <Row gutter={16}>
        <Col span={4}>
          <Card
            title={
              <>
                <TitleComponent title={"Danh sách danh mục"} />
              </>
            }
            bordered={false}
          >
            <Tree
              multiple={false}
              defaultExpandAll
              onSelect={onSelect}
              treeData={treeData}
            />
          </Card>
        </Col>

        <Col span={20}>
          <Card
            title={
              <>
                <TitleComponent title={"Danh sách bài viết"} />
              </>
            }
          >
            <Row gutter={16}>
              <Col span={16}>
                <Space direction="vertical">
                  <Search
                    placeholder="Nhập tiêu đề bài viết"
                    onSearch={onSearch}
                    style={{
                      width: "70vh",
                    }}
                  />
                </Space>
              </Col>
              <Col span={5}>
                <Select
                  // mode="tags"
                  style={{
                    width: "100%",
                  }}
                  placeholder="Trạng thái"
                  onChange={handleChange}
                  options={options}
                />
              </Col>
              <Col span={3}>
                <Button
                  type="primary"
                  style={{
                    background: "var(--btn-primary-color)",
                    width: "100%",
                  }}
                  onClick={() => navigateToPost("add")}
                >
                  Thêm bài viết
                </Button>
              </Col>
            </Row>
            <Row>
              <Table
                bordered
                columns={columns}
                dataSource={tableData}
                style={{ width: "100%", marginTop: "20px" }}
                onRow={(record) => ({
                  onClick: () => handleRowClick(record),
                })}
                // onEdit={handleEdit}
              />
            </Row>
          </Card>
        </Col>
      </Row>
    </WrapperManagePost>
  );
};

export default ManagePosts;
