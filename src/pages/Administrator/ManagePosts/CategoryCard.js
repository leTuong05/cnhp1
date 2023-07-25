import React, { useEffect, useState } from 'react'
import { Button, Col, Divider, Popconfirm, Row, message , Form, Card, Input, Space, Table, Tag} from 'antd';
import { Wapper } from './style';
import {DeleteOutlined, EditOutlined, PlusCircleOutlined, PlusSquareFilled} from '@ant-design/icons'
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addNewTags, getAllCategoryTags, updateTags } from '../../../services/apis/tagsCategory';
import { fetAddTags, fetDeleteTagsList, fetTagsList, fetUpdateTagsList, fetchTags, selectTags, selectTagsList, selectTagsLists } from '../../../reducers/tagsSlice';
// import { addListener } from '@reduxjs/toolkit';


const { Title } = Typography;

const style = (background) => {
    return {
        background: `${background}`,
        padding: '8px 0',
        height: '100%',
        borderRadius: '8px'
    }
}

const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, __, index) => index + 1
    },
    {
      title: 'Tên thẻ',
      dataIndex: 'TagsName',
      key: 'TagsName',
    },
    {
      title: 'Mô tả',
      dataIndex: 'Note',
      key: 'Note',
    },
]

const cancel = (e) => {
    // console.log(e);
    message.error('Hủy bỏ');
};

const { Search } = Input;



const CategoryCard = () => {
    const [form] = Form.useForm();
    const [selectedRow, setSelectedRow] = useState(null);
    const [dataListTags, setdataListTags] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [nameValue, setNameValue] = useState('');
    const [noteValue, setNoteValue] = useState('');

    const [nameValueInittial, setNameValueInitial] = useState('');
    const [noteValueInittial, setNoteValueInitial] = useState('')

    const [searchedData, setSearchedData] = useState([]);//get data sau khi tìm kiếm
    const [tagsNameList, setTagsNameList] = useState([]);//get data TagsName sau khi tìm kiếm

    const dispatch = useDispatch();

    const tagsLists = useSelector((state) => state?.tags?.tagsList?.tagsList?.Object?.Data);


    // console.log("dataListTags: >>", tagsLists);
    const extractTagsName = tagsLists?.map((item) => item.TagsName);

    // console.log("extractTagsName:>>>", extractTagsName);

    useEffect(() => {
        setTagsNameList(extractTagsName);
    }, [])

    //call api
    useEffect(() => {
        dispatch(fetchTags());
    },[])
    
    // get data List
    useEffect(() => {
        dispatch(fetTagsList(
            {
                "CurrentPage": currentPage,
                "PageSize": 20,
                "TextSearch": ""
            }
        ));
    }, []);

    useEffect(() => {
        setdataListTags(tagsLists);
    }, [])
      
    const confirm = () => {
        dispatch(fetDeleteTagsList(selectedRow.TagsID))
        .then(() =>{
            dispatch(fetTagsList(
                {
                    "CurrentPage": currentPage,
                    "PageSize": 20,
                    "TextSearch": ""
                }
            ));
            message.success('Xóa thành công');  
        })
    };

    const onFinish = () => {
        dispatch(fetAddTags({
            "TagsID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "TagsName": nameValueInittial,
            "TagsCode": "",
            "Note": noteValueInittial,
        })).then(() => {
            dispatch(fetTagsList(
                {
                    "CurrentPage": currentPage,
                    "PageSize": 20,
                    "TextSearch": ""
                }
            ));
            setNameValueInitial('');
            setNoteValueInitial('');
          })

        dispatch(
            updateTags({
                "TagsID": selectedRow.TagsID,
                "TagsName": selectedRow.TagsName,
                "TagsCode": "",
                "Note": selectedRow.Note,
            })).then(() => {
                dispatch(fetTagsList(
                    {
                        "CurrentPage": currentPage,
                        "PageSize": 20,
                        "TextSearch": ""
                    }
                ));
                setNameValueInitial('');
                setNoteValueInitial('');
            })
    }; 

    const handleRowClick = (record) => {
        setSelectedRow(record);
    }
    // console.log("selectedRow>>",selectedRow?.TagsName);

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
        setSelectedRow({
          ...selectedRow,
          TagsName: event.target.value
        });
        //cập nhật lại giá trị setSelectedRow: ..tạo bản sao , tiêp theo sẽ ghi đè TagsName = event.target.value
    };

    const handleNoteChange = (event) => {
        setNoteValue(event.target.value);
        setSelectedRow({
          ...selectedRow,
          Note: event.target.value
        });
        //cập nhật lại giá trị setSelectedRow: ..tạo bản sao , tiêp theo sẽ ghi đè Note = event.target.value
    };

    const handleNameInitialChange = (event) => {
        setNameValueInitial(event.target.value);
    }
    const handleNoteInitialChange = (event) => {
        setNoteValueInitial(event.target.value);
    }
    // console.log("nameValueInittial>>>", nameValueInittial);


    //search card
    const handleSearch = (value) => {
        const filteredData = tagsLists.filter((item) => {
            return item.TagsName.toLowerCase().includes(value.toLowerCase());
          });
        setSearchedData(filteredData);
    }


    const handleChangeSearch = (event) => {
        // console.log(event.target.value);
    }

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
                    width: '100%',
                }}
            />
            <div style={style('#fff')}>
            <Card
                title="Danh sách thẻ"
                bordered={false}
                style={{
                    width: '100%',
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
                />
            </Card>
            </div>
        </Col>

        {/* layour right */}
        <Col className="gutter-row" span={8} style={{height: '100vh'}}>
           <div style={style('#f7f7f7')}>
                <Row>
                    <Col span={8}>
                        <h1
                            style={{
                                marginLeft: '20px',
                                fontWeight: 600,
                                fontSize: '16px',
                                marginTop: '8px'
                            }}
                        >
                            {
                                selectedRow ? "Cập nhật thẻ" : "Thêm thẻ"
                            }
                        </h1>
                    </Col>
                    <Col span={8} offset={8} >
                        <div style={{float: 'right', marginRight: '8px'}}>
                            {
                                selectedRow ? <PlusCircleOutlined style={{marginRight: '12px',fontSize: '16px', marginTop: '8px'}}/> : ''
                            }
                            {/* <EditOutlined style={{marginRight: '12px',fontSize: '16px', marginTop: '8px'}}/> */}
                            
                            <Popconfirm
                                title="Xóa thẻ"
                                description={`Bạn chắc chắn muốn xóa thẻ ${selectedRow?.TagsName} này không ?`}
                                onConfirm={confirm}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                {/* <Button style={{border: 'none' , boxShadow: 'none'}}> */}
                                    { selectedRow ? <DeleteOutlined style={{marginRight: '12px',fontSize: '16px', marginBottom: '9px'}}/> : '' } 
                                {/* </Button> */}
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>

                <Form
                    form={form}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    {/* nhap thong tin */}
                    <Form.Item>
                        {/* ten */}
                        <Row style={{margin: '10px 0 0 20px'}}>
                            <Title level={5} > Tên thẻ
                            <span style={{color: 'red'}}>*</span>
                            </Title>
                            {
                                selectedRow ?   (
                                    <>
                                        <Input placeholder="Nhập tên" onChange={handleNameChange} value={selectedRow?.TagsName} />
                                        {/* selectedRow?.TagsName */}
                                    </>
                                ) : (
                                    <>
                                    <Input placeholder="Nhập tên" onChange={handleNameInitialChange}  value={nameValueInittial}/>
                                </>
                                )
                            }
                        </Row>

                        {/* mo ta */}
                        <Row style={{margin: '10px 0 0 20px'}}>
                            <Title level={5} >Mô tả
                            <span style={{color: 'red'}}>*</span>
                            </Title>
                            {
                                selectedRow ? (
                                    <>
                                        <Input placeholder="Nhập mô tả" onChange={handleNoteChange} value={selectedRow?.Note} style={{height: '90px'}}/>
                                    </>
                                ) : (
                                    <Input placeholder="Nhập mô tả" onChange={handleNoteInitialChange} style={{height: '90px'}} 
                                        value={noteValueInittial}
                                    />
                                )
                            }
                        </Row>
                    </Form.Item>

                    {/* button */}
                    <Form.Item>
                        <Row justify="end" style={{margin: '20px 20px 0 0'}}>
                                <Button htmlType="submit" type='primary' style={{float: 'right', display: 'block', background: 'var(--btn-primary-color)', width: '108px'}}>Ghi lại</Button>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        </Col>
        </Row>
    </Wapper>
  )
}

export default CategoryCard