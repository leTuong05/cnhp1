import { Button, Modal, Form, Input, Radio, Row, Col, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { fetchRoleId } from '../../../../../reducers/roleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, fetchFuncByCategory, fetchFunction } from '../../../../../reducers/functionSlice';

function ModalEdit({ open, onOk, onCancel, closeModal, dataInfo, dataRoldID }) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();

    console.log('dataInfo>>>', dataInfo);

    // role ID
    const getRoleId = () => {};
    useEffect(() => {
        // getRoleId();
        dispatch(fetchRoleId(dataInfo?.RoleID));
    }, [dataInfo]);

    console.log('dataRoldID', dataRoldID);

    //---------//

    // funcByCate

    const getFunction = () => {
        dispatch(fetchFunction());
    };
    useEffect(() => {
        getFunction();
    }, []);

    // const dataFunc = useSelector((state) => state?.category?.category?.getCategory?.Object);

    //---------//
    // const dataRoleId = useSelector((state) => state?.role?.roleId?.getRoleId?.Object);
    const [fields, setFields] = useState([]);
    const [valueRadio, setValueRadio] = useState(dataInfo.Type);
    console.log('valueRadio', valueRadio);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValueRadio(e.target.value);
    };
    const onChangeChecked = (e) => {
        console.log(`checked = ${e.target.value}`);
    };
    useEffect(() => {
        // Kiểm tra nếu dataInfo có giá trị, thì cập nhật fields
        if (dataInfo) {
            setFields([
                {
                    name: ['RoleName'],
                    value: dataInfo.RoleName
                }
            ]);
            console.log(dataInfo);
        }
    }, [dataInfo]);
    return (
        <Modal title="Basic Modal" footer={null} open={open} onOk={onOk} onCancel={onCancel} width={1200}>
            <Form layout="vertical" fields={fields} onFinish={onFinish}>
                <Form.Item label="Tên nhóm quyền" name="RoleName" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Nhập tên" />
                </Form.Item>
                <Form.Item name="radio-group" label="Radio">
                    <Radio.Group defaultValue={valueRadio} onChange={onChange}>
                        <Radio value={9}> System admin </Radio>
                        <Radio value={1}> Nhân viên </Radio>
                        <Radio value={2}> Khách hàng </Radio>
                    </Radio.Group>
                </Form.Item>
                {dataRoldID?.CategoryRole.map((item) => (
                    <Form.Item name="checkbox-group" label={item.category.Description}>
                        <Row gutter={30}>
                            {item.getInfors.map((child) => (
                                <Col>
                                    <Checkbox
                                        value={child.FunctionID}
                                        style={{
                                            lineHeight: '32px'
                                        }}
                                        onChange={onChangeChecked}
                                        checked={child.Status}
                                    >
                                        {child.Description}
                                    </Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Form.Item>
                ))}

                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={closeModal}>
                        Hoàn tất
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default ModalEdit;
