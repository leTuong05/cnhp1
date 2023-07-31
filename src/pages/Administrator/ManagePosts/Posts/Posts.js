import React, { useEffect, useState } from 'react'
import { Card, Col, Form, Input, Menu, Row, Select, Space, Tree, TreeSelect } from "antd"
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import TinyEditor from '../../Products/components/TinyEditor';
import { Wrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryPost, fetchGetDetailByID, fetchInsertPostList, fetchPostList, fetchUpdatePostList } from '../../../../reducers/categoryPostsSlice';
import { fetTagsList, fetchTags } from '../../../../reducers/tagsSlice';
import { useLocation, useNavigate } from "react-router-dom";

const { TextArea } = Input;

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

const Posts = () => {
    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);
    const [value, setValue] = useState();
    const [valueTitle, setValueTitle] = useState("");
    const [valueSummary, setValueSummary] = useState("");
    const [valueContent, setValueContent] = useState("");
    const [valueCategoryID, setValueCategoryID] = useState("");
    const [textContent, setTextContent] = useState("");
    const [valueTagsID, setValueTagsID] = useState("");
    const location = useLocation();
    const [fileList, setFileList] = useState([]);

    // const { type, record } = location.state || {} //lay Params qua navigate
    // const type= location.state.type || {} //lay Params qua navigate
    const {record} = location.state || {} //lay Params qua navigate
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    console.log('record>>>>:', record);

    const title = type === "add" ? "Thêm bài viết" : "Sửa bài viết";
    const titleSubmit = type === "add" ? "Đăng bài" : "Sửa bài";

    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    // const [value, setValue] = useState(['0-0-0']);

    const postCategoryList = useSelector((state) => state?.postCategory?.listsCategory?.listsCategory?.Object)
    const tagsList = useSelector((state) => state?.tags?.tagsList?.tagsList?.Object)
    const [titleInitial, setTitleInitial] = useState('');
    const [defaultTitle, setDefaultTitle] = useState('');

    const getPostDetail = useSelector((state) => state?.postCategory?.getPostDetail?.getPostDetailByID?.Object)

    // console.log("getPostDetail: ", getPostDetail?.Title);

    // useEffect(()=> {
    //   setTitleInitial(getPostDetail?.Title || '');
    // }, [getPostDetail])

    useEffect(() => {
      if (getPostDetail) {
        setTitleInitial(getPostDetail.Title);
        setDefaultTitle(getPostDetail.Title);
      }
    }, [getPostDetail]);

    // console.log("titleInitial", getPostDetail);

    //get data detail by ID
    useEffect(() => {
      if(type === "edit") {
        dispatch(fetchGetDetailByID(record?.PostID))
      }
    }, [])


    //get TAGS danh sách -> select Tags
    useEffect(() => {
      dispatch(
        fetTagsList({
          "PageSize": 20,
          "CurrentPage": 1,
          "TextSearch": ""
      })
      )
    }, [])

    const file = fileList ? Object.values(fileList)[0] : null;
    console.log("fileList>>>>", file);

    //CREATE
    const submitFormPost = () => {
      dispatch(fetchInsertPostList(
        {
          Title: valueTitle,
          file: file,
          Summary: valueSummary,
          CategoryPostID: valueCategoryID,
          Content: 'textContent',
          listTag: valueTagsID
        }
      )
      )
    }

    //get list ALL
    const getList = () => {
      dispatch(fetchPostList({
        PageSize: 20,
        CurrentPage: 1,
        TextSearch: "",
        CategoryPostID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        Status: 0   
      }))
    }

    const onFinish = () => {
        if (type === "add") {
          submitFormPost();
          getList();
          message.success('Thêm bài viết thành công!');
          navigate('/danh-sach-bai-viet');
        } else if (type === "edit") {
          submitEditPost();
          getList();
          message.success('Sửa bài viết thành công!');
          navigate('/danh-sach-bai-viet');
        }
    };

    
    const valueCate = getPostDetail?.CategoryPostID || valueCategoryID ;

    const submitEditPost = () => {
      dispatch(fetchUpdatePostList({
        PostID: getPostDetail?.PostID,
        Title: titleInitial,
        Summary: valueSummary,
        CategoryPostID: valueCate,
        Content: textContent,
        ListTagsID: valueTagsID
      })
      )
    }

    //data dropdown Tags 
    const options = [];
    tagsList?.forEach((item) => {
      options.push({
        value: item.TagsID,
        label: item.TagsName,
      })
    })

    //getCategory
    useEffect(() =>{
      dispatch(fetchCategoryPost());
    }, []);

    //get Tags list
    useEffect(() => {
      dispatch(fetchTags());
    },[]);
    
    const onChange = (newValue) => {
      // console.log(newValue);
      setValue(newValue);
    };

    const handleChange = (value) => {
      // console.log(`Selected: ${value}`);
    };

    // get SELECT DANH MỤC
    const treeDataPush = [];
    postCategoryList?.forEach((item) => {
      const parent = {
        title: item.CategoryPostName,
        value: item.CategoryPostID,
        children: []
      };
      treeDataPush.push(parent);
      if (item.GetList && item.GetList.length > 0) {
        item.GetList.forEach((child) => {
          const childNode = {
            title: child.CategoryPostName,
            value: child.CategoryPostID,
          }
          parent.children.push(childNode);
        })
      }
  });

    const handleChangeTitleInitial = (event) => {
      // console.log(event.target.value);
      setTitleInitial(event.target.value);
    };

    const handleChangeTitle = (e) => {
      // console.log(e.target.value);
      setValueTitle(e.target.value);
    }
    const handleChangeSummary = (e) => {
      setValueSummary(e.target.value);
    }
    const handleChangeContent = (e) => {
      setValueContent(e.target.value);
    }
    const handleChangeCategoryID = (value) => {
      setValueCategoryID(value);
    }
    const handleChangeTagID = (value) => {
      setValueTagsID(value.toString());
    }

    console.log(valueTagsID);

    const handleEditorChange = (content, editor) => {
        // console.log("content", content);
        setTextContent(editor.getContent({format: 'text'}));
    };
    // console.log(textContent);
    useEffect(() => {
      setTextContent(value);
    }, [])

    // console.log('valueContent>>', textContent);
    // const [nameValueInittial, setNameValueInitial] = useState('');

    // const handleNameInitialChange = (event) => {
    //   setNameValueInitial(event.target.value);
    // }

    const defaultValueCategory = record ? record?.CategoryPostID : null;

    const defatTags = record ? record?.TagsIDList : null
    // 1API lấy được category postName


    return (
        <Wrapper>
            <Card
                title = {title}
            >
              <Form form={form} 
                    onFinish={onFinish} 
                    layout="vertical" 
                    autoComplete="off">

                <Form.Item  name="title" label="Tiêu đề"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  // key={record.CategoryPostID}
                > 
                {
                    record 
                    ?  
                    (<Input defaultValue={record?.Title} onChange={handleChangeTitleInitial} placeholder='Nhập tiêu đề' />) 
                    : 
                    (<Input onChange={handleChangeTitle} placeholder='Nhập tiêu đề'/>)
                }
                </Form.Item>
                <Row flexDirection="column" flexWrap="wrap"  style={{marginBottom: '10px'}}>
                    <Col span={24} style={{fontSize: '16px', fontWeight: 600, marginBottom: '10px'}}>Hình thu nhỏ</Col>
                    <Col span={24} style={{marginBottom: '10px'}}>Dung lượng file tối đa 1MB, định dạng:... JPEG, .PNG</Col>
                    <Form.Item
                      valuePropName='fileList'
                      getValueFromEvent={(event) => {
                        return event?.fileList;
                      }}
                      rules={[
                        {
                          validator(_,fileList) {
                            return new Promise((resolve, reject) => {
                              if(fileList && fileList[0].size > 90000000) {
                                reject("File size exceeded");
                              } else {
                                resolve("Success")
                              }
                            })
                          }
                        }
                      ]}
                    >
                        <Upload 
                          maxCount={1}
                          beforeUpload={(file) => {
                            return new Promise((resolve, reject) => {
                              if(file.size > 9000000) {
                                reject("File size exceeded");
                                // message.error("File size exceeded");
                              } else {
                                resolve("Success")
                              }
                            })
                          }}
                          customRequest={(info) => {
                            setFileList([info.file])
                          }}
                          showUploadList={false}
                          defaultValue={file || null}
                          >
                          <Row/>
                          <Button icon={<UploadOutlined />}>Thêm video</Button>
                        </Upload>
                        {fileList[0]?.name}
                    </Form.Item>
                </Row>
                <Form.Item name="summary" label="Tóm tắt"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                {
                  record ?
                  (<TextArea onChange={handleChangeSummary} rows={4} defaultValue={record?.Summary} placeholder="Nhập nội dung"/>)
                  :
                  (<TextArea onChange={handleChangeSummary} rows={4} placeholder="Nhập nội dung"/>)
                }
                    
                </Form.Item>
                <Form.Item name="content" label="Nôi dung bài viết"
                  // rules={[
                  //   {
                  //     required: true,
                  //   },
                  // ]}
                >
                    <TinyEditor 
                        handleEditorChange={handleEditorChange}
                        value={value}
                    />
                </Form.Item>
                
                <Form.Item name="category" label="Danh mục" 
                    rules={[
                    {
                      required: !!record?.find ? true : false,
                    },
                  ]}
                >
                    <TreeSelect
                        style={{
                          width: '100%',
                        }}
                        dropdownStyle={{
                          maxHeight: 400,
                          overflow: 'auto',
                        }}
                        treeData={treeDataPush}
                        placeholder="Chọn danh mục"
                        onChange={handleChangeCategoryID}
                        defaultValue={type === "edit" ? defaultValueCategory : null}
                    />
                </Form.Item>

                <Form.Item name="tags" label="Thẻ (từ khóa)">
                    <Select
                      mode="tags"
                      placeholder="Thêm thẻ"
                      onChange={handleChangeTagID}
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      defaultValue={type === "edit" ? defatTags : null}
                     />
                </Form.Item>
                
                <Form.Item>
                    <Button htmlType="submit" style={{background: "var(--btn-primary-color)", color: "#FFF"}}>{titleSubmit}</Button>
                </Form.Item>

              </Form>
            </Card>
        </Wrapper>
    )
}

export default Posts