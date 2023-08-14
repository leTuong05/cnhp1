import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Divider,
  Popconfirm,
  Row,
  message,
  Form,
  Card,
  Input,
  Space,
  Table,
  Tag,
} from "antd";
import { Wapper } from "./style";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  PlusSquareFilled,
} from "@ant-design/icons";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewTags,
  getAllCategoryTags,
  updateTags,
} from "../../../services/apis/tagsCategory";
import {
  fetAddTags,
  fetDeleteTagsList,
  fetTagsList,
  fetUpdateTagsList,
  fetchTags,
  selectTags,
  selectTagsList,
  selectTagsLists,
} from "../../../reducers/tagsSlice";
import TitleComponent from "../../../components/TitleComponent";
// import { addListener } from '@reduxjs/toolkit';

const { Title } = Typography;

const style = (background) => {
  return {
    background: `${background}`,
    padding: "8px 0",
    height: "100%",
    borderRadius: "8px",
  };
};

const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Tên thẻ",
    dataIndex: "TagsName",
    key: "TagsName",
  },
  {
    title: "Mô tả",
    dataIndex: "Note",
    key: "Note",
  },
];

const cancel = (e) => {
  // console.log(e);
  message.error("Hủy bỏ");
};

const { Search } = Input;

const CategoryCard = () => {
  const [form] = Form.useForm();
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataListTags, setdataListTags] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [nameValue, setNameValue] = useState("");
  const [noteValue, setNoteValue] = useState("");

  const [nameValueInittial, setNameValueInitial] = useState("");
  const [noteValueInittial, setNoteValueInitial] = useState("");

  const [searchedData, setSearchedData] = useState([]); //get data sau khi tìm kiếm
  const [tagsNameList, setTagsNameList] = useState([]); //get data TagsName sau khi tìm kiếm

  // const [title, setTitle] = useState("")

  const title = selectedRow ? "Sửa thẻ" : "Thêm thẻ";

  const dispatch = useDispatch();

  const tagsLists = useSelector(
    (state) => state?.tags?.tagsList?.tagsList?.Object
  );

  console.log("dataListTags: >>", tagsLists);
  const extractTagsName = tagsLists
    ? tagsLists?.map((item) => item.TagsName)
    : null;

  // console.log("extractTagsName:>>>", extractTagsName);

  useEffect(() => {
    setTagsNameList(extractTagsName);
  }, []);

  //call api
  // useEffect(() => {
  //     dispatch(fetchTags());
  // },[])

  // get data List
  useEffect(() => {
    dispatch(
      fetTagsList({
        CurrentPage: currentPage,
        PageSize: 20,
        TextSearch: "",
      })
    );
  }, []);

  // useEffect(() => {
  //     setdataListTags(tagsLists);
  // }, [])

  const handleDelete = () => {
    dispatch(fetDeleteTagsList(selectedRow.TagsID)).then(() => {
      dispatch(
        fetTagsList({
          CurrentPage: currentPage,
          PageSize: 20,
          TextSearch: "",
        })
      );
      message.success("Xóa thành công");
    });
  };

  const confirm = () => {
    handleDelete();
    // setSelectedRow(searchedData.length > 0 ? searchedData[0] : tagsLists[0]);
    // form.resetFields();
    setSelectedRow(null);
  };

  const onFinish = () => {
    dispatch(
      fetAddTags({
        TagName: nameValueInittial,
        Note: noteValueInittial,
      })
    ).then(() => {
      dispatch(
        fetTagsList({
          CurrentPage: currentPage,
          PageSize: 20,
          TextSearch: "",
        })
      );
      setNameValueInitial("");
      setNoteValueInitial("");
    });

    dispatch(
      fetUpdateTagsList({
        TagID: selectedRow.TagsID,
        TagName: selectedRow.TagsName,
        Note: selectedRow.Note,
      })
    ).then(() => {
      dispatch(
        fetTagsList({
          CurrentPage: currentPage,
          PageSize: 20,
          TextSearch: "",
        })
      );
    });
  };

  // const onFinish = () => {

  // }

  //   console.log("selectedRow", selectedRow);

  const handleRowClick = (record) => {
    console.log(record);
    setSelectedRow(record);
  };
  console.log("selectedRow>>", selectedRow?.TagsName);

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
    setSelectedRow({
      ...selectedRow,
      TagsName: event.target.value,
    });
    //cập nhật lại giá trị setSelectedRow: ..tạo bản sao , tiêp theo sẽ ghi đè TagsName = event.target.value
  };

  const handleNoteChange = (event) => {
    setNoteValue(event.target.value);
    setSelectedRow({
      ...selectedRow,
      Note: event.target.value,
    });
    //cập nhật lại giá trị setSelectedRow: ..tạo bản sao , tiêp theo sẽ ghi đè Note = event.target.value
  };

  const handleNameInitialChange = (event) => {
    setNameValueInitial(event.target.value);
  };
  const handleNoteInitialChange = (event) => {
    setNoteValueInitial(event.target.value);
  };
  // console.log("nameValueInittial>>>", nameValueInittial);

  //search card
  const handleSearch = (value) => {
    const filteredData = tagsLists.filter((item) => {
      return item.TagsName.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedData(filteredData);
  };

  const handleChangeSearch = (event) => {
    // console.log(event.target.value);
  };

  const handleADD = () => {
    setSelectedRow(null);
  };

  return (
    <Wapper>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {/* layout left  */}
        <Col className="gutter-row" span={16}>
          <Search
            placeholder="Nhập tên thẻ"
            onSearch={handleSearch}
            onChange={handleChangeSearch}
            style={{
              width: "100%",
            }}
          />
          <div style={style("#fff")}>
            <Card
              title={
                <>
                  <TitleComponent title={"Danh sách thẻ"} />
                </>
              }
              bordered={false}
              style={{
                width: "100%",
              }}
            >
              <Table
                columns={columns}
                dataSource={searchedData.length > 0 ? searchedData : tagsLists}
                bordered
                rowKey="TagsID"
                onRow={(record) => ({
                  onClick: () => handleRowClick(record),
                })}
                // onChange={handleOnchangeTable}
                pagination={{
                  current: currentPage,
                  pageSize: 10,
                  total: 50,
                  onChange: (page, pageSize) => {
                    // console.log(`Page: ${page}, PageSize: ${pageSize}`);
                    setCurrentPage(page);
                  },
                  // showSizeChanger: true,
                  // pageSizeOptions: ['10', '20'],
                }}
              />
            </Card>
          </div>
        </Col>

        {/* layour right */}
        <Col className="gutter-row" span={8} style={{ height: "100vh" }}>
          <div style={style("#f7f7f7")}>
            <Row style={{ marginBottom: "20px" }}>
              <Col span={8}>
                <h1
                  style={{
                    marginLeft: "20px",
                    fontWeight: 600,
                    fontSize: "16px",
                    marginTop: "8px",
                  }}
                >
                  {/* {selectedRow ? "Sửa thẻ" : "Thêm thẻ"} */}
                  {title}
                </h1>
              </Col>
              <Col span={8} offset={8}>
                <div style={{ float: "right", marginRight: "8px" }}>
                  {selectedRow ? (
                    <PlusCircleOutlined
                      style={{
                        marginRight: "12px",
                        fontSize: "16px",
                        marginTop: "8px",
                      }}
                      onClick={() => handleADD()}
                    />
                  ) : (
                    ""
                  )}
                  {/* <EditOutlined style={{marginRight: '12px',fontSize: '16px', marginTop: '8px'}}/> */}

                  <Popconfirm
                    title="Xóa thẻ"
                    description={`Bạn chắc chắn muốn xóa thẻ ${selectedRow?.TagsName} này không ?`}
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    {selectedRow ? (
                      <DeleteOutlined
                        style={{
                          marginRight: "12px",
                          fontSize: "16px",
                          marginBottom: "9px",
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </Popconfirm>
                </div>
              </Col>
            </Row>

            <Form
              form={form}
              onFinish={onFinish}
              autoComplete="off"
              layout="vertical"
            >
              <Row style={{ margin: "10px 0 0 20px" }}>
                {/* nhap thong tin */}
                <Form.Item>
                  {/* ten */}
                  <Title level={5}>
                    {" "}
                    Tên thẻ
                    <span style={{ color: "red" }}>*</span>
                  </Title>
                  {selectedRow ? (
                    <>
                      <Input
                        placeholder="Nhập tên"
                        onChange={handleNameChange}
                        value={selectedRow?.TagsName}
                        style={{ width: "100vh" }}
                      />
                    </>
                  ) : (
                    <>
                      <Input
                        placeholder="Nhập tên"
                        onChange={handleNameInitialChange}
                        value={nameValueInittial}
                        style={{ width: "100vh" }}
                      />
                    </>
                  )}
                </Form.Item>
              </Row>

              <Row style={{ margin: "10px 0 0 20px" }}>
                <Form.Item>
                  {/* mo ta */}
                  <Title level={5}>
                    Mô tả
                    <span style={{ color: "red" }}>*</span>
                  </Title>
                  {selectedRow ? (
                    <>
                      <Input
                        placeholder="Nhập mô tả"
                        onChange={handleNoteChange}
                        value={selectedRow?.Note}
                        style={{ height: "90px", width: "100vh" }}
                      />
                    </>
                  ) : (
                    <Input
                      placeholder="Nhập mô tả"
                      onChange={handleNoteInitialChange}
                      style={{ height: "90px", width: "100vh" }}
                      value={noteValueInittial}
                    />
                  )}
                </Form.Item>
              </Row>

              {/* button */}
              <Form.Item>
                <Row justify="end" style={{ margin: "20px 20px 0 0" }}>
                  <Button
                    htmlType="submit"
                    type="primary"
                    style={{
                      float: "right",
                      display: "block",
                      background: "var(--btn-primary-color)",
                      width: "108px",
                    }}
                  >
                    Ghi lại
                  </Button>
                </Row>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </Wapper>
  );
};

export default CategoryCard;
