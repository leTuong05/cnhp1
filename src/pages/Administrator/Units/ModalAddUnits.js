import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Input, Modal, Row, Select } from 'antd';
import Title from 'antd/es/skeleton/Title';
import { WapperModal } from '../../../components/Style/style';
import { useDispatch, useSelector } from 'react-redux';
import { fetGetListRegionHP, fetGetListStaff, fetchCreateManageTeam, fetchDeteleManageTeam, fetchGetRegion, fetchGetRegionAll, fetchGetRegionByRegionID, fetchgetListAll } from '../../../reducers/managementTeamSlice';
import { TreeSelect } from 'antd';

const ModalAddUnits = (props) => {
    const dispatch = useDispatch();
    const {title, onOk, handlehideModal, isModalVisiable, selectedRow} = props
    const { SHOW_PARENT } = TreeSelect;

    const [form] = Form.useForm();
    const nameValue = Form.useWatch('name', form);  

    const [valueTinh, setValueTinh] = useState('');
    const [valueHuyen, setValueHuyen] = useState('')
    const [valueXa, setValueXa] = useState('')

    const [nameManagement, setNameManagement] = useState('');
    const [codeManagement, setCodeManagement] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [employee, setEmployee] = useState('');
    const [area, setArea] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [repasword, setRepasword] = useState('');

    const [valueSelected, setValueSelected] = useState('')

    const [initialNameManagement, setInitialNameManagement] = useState('');
    // const [codeManagement, setCodeManagement] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [address, setAddress] = useState('');
    // const [employee, setEmployee] = useState('');
    // const [area, setArea] = useState('');
    // const [account, setAccount] = useState('');
    // const [password, setPassword] = useState('');
    // const [repasword, setRepasword] = useState('');

    const onSearch = (value) => {
        console.log('search:', value);
    };

    const onChange = (value) => {
        setValueTinh(value)
    }

    const onChangeLevelOne = (value) => {
        setValueHuyen(value)
    }

    const onSearchLeveTwo = (value) => {
        setValueXa(value)
    }
    
    const getRegionAll = () => {
        dispatch(fetchGetRegionAll());
    }
    //region ALL
    useEffect(() => {
        getRegionAll();
    }, [])

    //region Huyen/Quan
    const getRegion = () => {
        dispatch(fetchGetRegion(valueTinh));
    }

    useEffect(() => {
        getRegion();
    }, [valueTinh])

    //region xa/phuong
    const regionByID = () => {
        dispatch(fetchGetRegionByRegionID(valueHuyen))
    }
    useEffect(() => {
        regionByID();
    }, [valueHuyen])

    const getListStaff = () => {
        dispatch(fetGetListStaff())
    }

    useEffect(() => {
        getListStaff();
    }, [])

    const createManagement = () => {
        dispatch(fetchCreateManageTeam(
            {
                "ManagementTeamName": nameManagement,
                "ManagementTeamCode": codeManagement,
                "PhoneNumber": phoneNumber,
                "Address": address,
                "Staff": [
                  {
                    "UserID": employee
                  }
                ],
                "UserName": account,
                "Password": password,
                "RePassword": repasword,
                "ProvinceID": valueTinh,
                "DistrictID": valueHuyen,
                "WardID": valueXa
              }
        ))
    }

    //add To Quan Ly
    useEffect(() => {
        createManagement();
    }, [])

   
    const getRegionHP = () => {
        dispatch(fetGetListRegionHP());
    }

    useEffect(() => {
        getRegionHP();
    }, [])

    const listRegionAll = useSelector((state) => state?.manage?.regionAll?.regionAll?.Object)
    const listRegion = useSelector((state) => state?.manage?.region?.region?.Object)
    const listRegionByID = useSelector((state) => state?.manage?.regionByRegionID?.regionByRegionID?.Object)
    const listStaff = useSelector((state) => state?.manage?.listStaff?.staffAll?.Object)
    const listRegionHP = useSelector((state) => state?.manage?.regionListHP?.regionHP?.Object)
    console.log("listRegionHP>>>>>",listRegionHP);

    const treeData = [];
    {
        listRegionHP && listRegionHP?.forEach((item) => {
            treeData?.push({
                title: item.RegionName,
                value: item.RegionID,
                children: [],
            })
            if (item.RegionLevel === 3) {
                item.list.forEach((child) => {
                  treeData[treeData.length - 1].children.push({
                    title: child.RegionName,
                    value: child.RegionID,
                  });
                });
            }
        })
    }

    useEffect(() => {
        setValueSelected(selectedRow)
    }, [selectedRow])

    const optionsStaff = [];
    {
        listStaff && listStaff?.forEach((item) => {
            optionsStaff.push({
                value: item.UserID,
                label: item.FullName,
            });
        })
    }

    // console.log("valueSelected", valueSelected);

    const options = [];
    {
        listRegionAll && listRegionAll?.forEach((item) => {
            options.push({
                value: item.RegionID,
                label: item.RegionName,
            });
        })
    }

    const optionsLevelOne = [];
    {
        listRegion && listRegion?.forEach((item) => {
            optionsLevelOne.push({
                value: item.RegionID,
                label: item.RegionName,
            });
        })
    }

    const optionsLevelTwo = [];
    {
        listRegionByID && listRegionByID?.forEach((item) => {
            optionsLevelTwo.push({
                value: item.RegionID,
                label: item.RegionName,
            });
        })
    }

    const onFinish = () => {
    }

    const handleChangeName = (e) => {
        setNameManagement(e.target.value)
    }

    const handleDeparment = (e) => {
        setCodeManagement(e.target.value)
    }

    const handlePhone = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleEmployee = (value) => {
        setEmployee(value.value)
    }

    // const handleArea = (e) => {
    //     setArea(e.target.value)
    // }

    const handleAccount = (e) => {
        setAccount(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleResspassword = () => {

    }

    console.log(valueTinh,valueHuyen,valueXa);

    // const [value, setValue] = useState(['0-0-0']);

    const onChangeTree = (value) => {
        console.log('onChange ', value);
        // setValue(value);
    };

    const handleTreeArea = (value) => {
        console.log(value.toString());
        setArea(value.toString());
    }

    const tProps = {
        treeData,
        onChangeTree,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Chọn nội dung',
        style: {
        width: '100%',
        },
    };

    //name moi Edit
    const handleChangeNameEdit = (e) => {
        setInitialNameManagement(e.target.value);
        setValueSelected({
            ...valueSelected,
            ManagementTeamName: e.target.value
        })
    }
    // console.log("selectedRow: ", selectedRow);

    return (
        <>
            <WapperModal style={{width: '900px'}} title={title} visible={isModalVisiable} onOk={onOk} onCancel={handlehideModal}>
                <Form autoComplete="off" form={form} onFinish={onFinish} layout='vertical'>
                    <Row>
                        <Col span={24}>
                            <Form.Item 
                                name="name" 
                                label="Tên tổ quản lý"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                            >
                            {
                                selectedRow && selectedRow ? (
                                    <>
                                        <Input defaultValue={selectedRow?.ManagementTeamName} onChange={handleChangeNameEdit}  placeholder='Nhập nội dụng' style={{ width: '100%', display: 'block' }}/>         
                                    </>

                                ) : (
                                    <>
                                        <Input defaultValue={initialNameManagement} onChange={handleChangeName}  placeholder='Nhập nội dụng' style={{ width: '100%', display: 'block' }}/>         
                                    </>
                                )
                            }

                            {/* {
                                selectedRow && selectedRow ? (console.log('1')) : (console.log('0'))
                            } */}
                                {/* <Input value={""} onChange={handleChangeName}  placeholder='Nhập nội dụng' style={{ width: '100%', display: 'block' }}/>          */}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12}>
                            <Form.Item name="codeDepart" label="Mã tổ chức"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input onChange={handleDeparment} placeholder='Nhập nội dụng' />
                            </Form.Item>
                        </Col>
                        <Col span={1}>
                        </Col>
                        <Col span={11}>
                            <Form.Item name="phone" label="Số điện thoại"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input onChange={handlePhone} placeholder='Nhập nội dụng' />
                            </Form.Item>
                        </Col>
                    </Row>

                   

                    <Row>
                        <Col span={24}>
                            <Form.Item name="address" label="Địa chỉ"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input onChange={handleAddress}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item name="employee" label="Nhân viên trong công ty"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                {/* <Input onChange={handleEmployee} /> */}
                                <Select
                                    mode="tags"
                                    showSearch
                                    placeholder="Chọn nội dung"
                                    optionFilterProp="children"
                                    onChange={handleEmployee}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={optionsStaff}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={7}>
                            <Form.Item name="account" label="Tài khoản"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input onChange={handleAccount} />
                            </Form.Item>
                        </Col>
                        <Col span={1}>
                        </Col>
                        <Col span={7}>
                                <Form.Item name="pass" label="Mật khẩu"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input onChange={handlePassword} />
                                </Form.Item>
                        </Col>
                        <Col span={1}>
                        </Col>
                        <Col span={7}>
                                <Form.Item name="repass" label="Mật khẩu xác nhận"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >
                                    <Input onChange={handleResspassword} />
                                </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item name="kv" label="Khu vực quản lý"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                {/* <Input onChange={handleArea} /> */}
                                <TreeSelect {...tProps} onChange={handleTreeArea}/>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item>
                                <Button htmlType="submit" type='primary' style={{float: 'right', display: 'block', background: 'var(--btn-primary-color)', width: '108px'}}>Ghi lại</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </WapperModal>
        </>
    )
}

export default ModalAddUnits

// <Row>
// <Col span={7}>
//     <Form.Item name="tinh" label="Tỉnh/Thành phố"
//         rules={[
//             {
//             required: true,
//             },
//         ]}
//     >
//     <Select
//         showSearch
//         placeholder="Chọn nội dung"
//         optionFilterProp="children"
//         onChange={onChange}
//         onSearch={onSearch}
//         filterOption={(input, option) =>
//         (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//         }
//         options={options}
//     />
//     </Form.Item>
// </Col>
// <Col span={1}></Col>
// <Col span={7}> 
//     <Form.Item name="thanh pho" label="Quận/Huyện"
//         rules={[
//             {
//             required: true,
//             },
//         ]}
//         >
//         <Select
//             showSearch
//             placeholder="Chọn nội dung"
//             optionFilterProp="children"
//             onChange={onChangeLevelOne}
//             onSearch={onSearch}
//             filterOption={(input, option) =>
//             (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//             }
//             options={optionsLevelOne}
//         />
//     </Form.Item>
// </Col>
// <Col span={1}></Col>
// <Col span={7}> 
//     <Form.Item name="quanhuyen" label="Xã/Phường"
//         rules={[
//             {
//             required: true,
//             },
//         ]}
//         >
//         <Select
//             showSearch
//             placeholder="Chọn nội dung"
//             optionFilterProp="children"
//             onChange={onSearchLeveTwo}
//             onSearch={onSearch}
//             filterOption={(input, option) =>
//             (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
//             }
//             options={optionsLevelTwo}
//         />
//     </Form.Item>
// </Col>
// </Row>