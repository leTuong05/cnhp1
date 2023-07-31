import { Button, Modal, Form, Input, Radio, Row, Col, Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { fetchRoleId } from '../../../../../reducers/roleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, fetchFuncByCategory, fetchFunction } from '../../../../../reducers/functionSlice';

function ModalEdit({ open, onOk, onCancel, closeModal, dataInfo }) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const dispatch = useDispatch();
    const getRoleId = () => {
        dispatch(fetchRoleId(dataInfo?.RoleID));
    };
    useEffect(() => {
        getRoleId();
    }, []);

    // category
    const getCategory = () => {
        dispatch(fetchCategory());
    };
    useEffect(() => {
        getCategory();
    }, []);

    const dataCategory = useSelector((state) => state?.category?.category?.getCategory?.Object?.Data);

    //----//

    // funcByCate

    const getFuncByCategory = () => {
        dispatch(fetchFuncByCategory(6));
    };
    useEffect(() => {
        getFuncByCategory();
    }, []);

    const dataFuncByCategory = useSelector((state) => state?.category?.category?.getCategory?.Object);

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
    const dataRoleId = useSelector((state) => state?.role?.roleId?.getRoleId?.Object);
    const [fields, setFields] = useState([]);
    const [valueRadio, setValueRadio] = useState(null);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValueRadio(e.target.value);
    };
    useEffect(() => {
        // Kiểm tra nếu dataInfo có giá trị, thì cập nhật fields
        if (dataRoleId) {
            setFields([
                {
                    name: ['RoleName'],
                    value: dataRoleId.RoleName
                }
            ]);
            setValueRadio(dataRoleId.Type);
            console.log('dataRoleId', dataRoleId);
        }
    }, [dataRoleId]);
    console.log('dataCategory', dataCategory);
    return (
        <Modal title="Basic Modal" footer={null} open={open} onOk={onOk} onCancel={onCancel} width={1200}>
            <Form layout="vertical" fields={fields} onFinish={onFinish}>
                <Form.Item label="Tên nhóm quyền" name="RoleName" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="Nhập tên" />
                </Form.Item>
                <Form.Item name="radio-group" label="Radio">
                    <Radio.Group value={valueRadio} onChange={onChange}>
                        <Radio value={9}> System admin </Radio>
                        <Radio value={1}> Nhân viên </Radio>
                        <Radio value={2}> Khách hàng </Radio>
                    </Radio.Group>
                </Form.Item>
                {dataCategory?.map((item) => (
                    <Form.Item name="checkbox-group" label={item.Description}>
                        <Checkbox.Group style={{ width: '100%' }}>
                            <Row>
                                {item.ltFunctionID?.map((childItem) => {
                                    <Col>
                                        <Checkbox
                                            value={childItem.FunctionID}
                                            style={{
                                                lineHeight: '32px'
                                            }}
                                        >
                                            {childItem.FunctionDescription}
                                        </Checkbox>
                                    </Col>;
                                })}
                            </Row>
                        </Checkbox.Group>
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
