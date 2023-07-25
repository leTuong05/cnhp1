import React, { useEffect, useState } from 'react'
import { Card, Col, Form, Input, Menu, Row, Select, Space, Tree, TreeSelect } from "antd"
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import TinyEditor from '../../Products/components/TinyEditor';
import { Wrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryPost, fetchGetDetailByID, fetchInsertPostList, fetchPostList, fetchUpdatePostList } from '../../../../reducers/categoryPostsSlice';
import { fetchTags } from '../../../../reducers/tagsSlice';
import { useLocation, useNavigate } from "react-router-dom";

const { TextArea } = Input;

// GET dữ liệu dạng TreeData
const getTreeData = (data) => {
  const treeData = [];
  data?.forEach((category) => {
    if (category.Level === 1) {
      treeData.push({
        title: category.CategoryPostName,
        value: category.CategoryPostID,
        children: [],
      });
    } else {
      const parentId = category.ParentID;
      treeData?.forEach((parent) => {
        if (parent.value === parentId) {
          parent.children.push({
            title: category.CategoryPostName,
            value: category.CategoryPostID,
          });
        }
      });
    }
  });
  return treeData;
};

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};

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


    const location = useLocation()
    // const { type, record } = location.state || {} //lay Params qua navigate
    // const type= location.state.type || {} //lay Params qua navigate
    const {record} = location.state || {} //lay Params qua navigate
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    const title = type === "add" ? "Thêm bài viết" : "Sửa bài viết";
    const titleSubmit = type === "add" ? "Đăng bài" : "Sửa bài";

    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    // const [value, setValue] = useState(['0-0-0']);

    const postCategoryList = useSelector((state) => state?.postCategory?.listsCategory?.listsCategory?.Object?.data)
    // console.log("postCategoryList>>", postCategoryList);
    const tagsList = useSelector((state) => state?.tags?.tags?.tags?.Object)
    // console.log(tagsList);
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

    console.log("titleInitial", getPostDetail);

    //get data detail by ID
    useEffect(() => {
      if(type === "edit") {
        dispatch(fetchGetDetailByID(record?.PostID))
      }
    }, [])

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

    

    //submit
    const submitFormPost = () => {
      dispatch(fetchInsertPostList({
        Title: valueTitle,
        Summary: valueSummary,
        CategoryPostID: valueCategoryID,
        Content: textContent,
        // ListTagsID: [
        //   valueTagsID
        // ],
      })
      )
    }
    const valueCate = getPostDetail?.CategoryPostID || valueCategoryID ;

    const submitEditPost = () => {
      dispatch(fetchUpdatePostList({
        PostID: getPostDetail?.PostID,
        Title: titleInitial,
        Summary: valueSummary,
        CategoryPostID: valueCate,
        Content: textContent,
        // ListTagsID: [
        //   valueTagsID
        // ],
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
    // console.log("options", options);

    //getCategory
    useEffect(() =>{
      dispatch(fetchCategoryPost());
    }, []);

    //get Tags list
    useEffect(() => {
      dispatch(fetchTags());
    },[]);
    
    const onChange = (newValue) => {
      console.log(newValue);
      setValue(newValue);
    };

    const handleChange = (value) => {
      console.log(`Selected: ${value}`);
    };

    const treeDataPush = getTreeData(postCategoryList);
    // console.log("treeDataPush", treeDataPush);

    const handleChangeTitleInitial = (event) => {
      console.log(event.target.value);
      setTitleInitial(event.target.value);
    };

    const handleChangeTitle = (e) => {
      console.log(e.target.value);
      setValueTitle(e.target.value);
    }
    const handleChangeSummary = (e) => {
      setValueSummary(e.target.value);
    }
    const handleChangeContent = (e) => {
      setValueContent(e.target.value);
    }
    const handleChangeCategoryID = (value) => {
      console.log("Category:",value);
      setValueCategoryID(value);
    }
    const handleChangeTagID = (value) => {
      setValueTagsID(value);
    }

    // const handleEditorChange = (content, editor) => {
    //     console.log("content", content);
    //     setTextContent(editor.getContent({format: 'text'}));
    // };
    // console.log(textContent);
    useEffect(() => {
      setTextContent(value);
    }, [])

    // const [nameValueInittial, setNameValueInitial] = useState('');

    // const handleNameInitialChange = (event) => {
    //   setNameValueInitial(event.target.value);
    // }

    const defaultValueCategory = record ? getPostDetail?.CategoryPostName : null;
  
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
                > 
                {
                    record 
                    ?  
                    (<Input defaultValue={getPostDetail?.Title} onChange={handleChangeTitleInitial} placeholder='Nhập tiêu đề' />) 
                    : 
                    (<Input onChange={handleChangeTitle} placeholder='Nhập tiêu đề'/>)
                }
                </Form.Item>
                <Row flexDirection="column" flexWrap="wrap"  style={{marginBottom: '10px'}}>
                    <Col span={24} style={{fontSize: '16px', fontWeight: 600, marginBottom: '10px'}}>Hình thu nhỏ</Col>
                    <Col span={24} style={{marginBottom: '10px'}}>Dung lượng file tối đa 1MB, định dạng:... JPEG, .PNG</Col>
                    <Upload {...props}>
                      <Row/>
                      <Button icon={<UploadOutlined />}>Thêm video</Button>
                    </Upload>
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
                  (<TextArea onChange={handleChangeSummary} rows={4} defaultValue={getPostDetail?.Summary} placeholder="Nhập nội dung"/>)
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
                        // handleEditorChange={handleEditorChange}
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
                        defaultValue={defaultValueCategory}
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