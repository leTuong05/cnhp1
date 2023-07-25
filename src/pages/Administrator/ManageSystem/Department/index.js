import React from 'react';
import CustomButton from '../../../../components/Button/ButtonPrimary';
import { colors } from '../../../../styles';
import { Row, Col, Input, Divider } from 'antd';
import ListDepartment from './components/ListDepartment';
import ListPositions from './components/ListPositions';
import { DepartmentStyled } from './styles';
import ModalAdd from './components/ModalAdd';
import { useState, useEffect } from 'react';
import { fetchAddPosition, fetchPosition } from '../../../../reducers/positionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchDepartment } from '../../../../reducers/departmentSlice';
const Department = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newValueName, setNewValueName] = useState('');
    const [newValueNote, setNewValueNote] = useState('');
    const [selectedDepartmentID, setSelectedDepartmentID] = useState(null);

    // TreeData
    const listView = useSelector((state) => state?.department?.department?.departmentGet?.Object);

    const buildTreeData = (data) => {
        const treeData = [];
        data?.forEach((item) => {
            if (item.Level === 1) {
                treeData.push({
                    key: item.DepartmentID,
                    title: item.DepartmentName,
                    children: [] // Add children if needed
                });
            } else {
                const parentKey = item.DepartmentParentID;
                const parentNode = treeData.find((node) => node.key === parentKey);
                if (parentNode) {
                    parentNode.children.push({
                        key: item.DepartmentID,
                        title: item.DepartmentName,
                        children: []
                    });
                }
            }
        });
        return treeData;
    };

    const treeData = buildTreeData(listView);

    const getList = () => {
        dispatch(fetchDepartment());
    };
    useEffect(() => {
        getList();
    }, []);

    // PositionData

    const listpositionView = useSelector((state) => state?.position?.positionGet?.Object?.listPosition);
    const getPositionList = () => {
        dispatch(
            fetchPosition({
                TextSearch: '',
                PageSize: 20,
                CurrentPage: 1
            })
        );
    };

    useEffect(() => {
        getPositionList();
    }, []);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onSelect = (selectedKeys, info) => {
        setSelectedDepartmentID(selectedKeys[0]);
    };

    const filteredPosition = listpositionView?.filter((item) => item.DepartmentID === selectedDepartmentID);
    const onFinish = () => {
        dispatch(
            fetchAddPosition({
                PositionName: newValueName,
                Level: 0,
                Note: newValueNote,
                DepartmentID: '0c741548-a6df-4089-bfd9-0831748ea3b1'
            })
        ).then(() => {
            dispatch(
                fetchPosition({
                    TextSearch: '',
                    PageSize: 20,
                    CurrentPage: 1
                })
            );
        });
        console.log('FINISH');
    };

    return (
        <DepartmentStyled>
            <div className="form-search">
                <Divider />
            </div>
            <div className="head-group">
                <div className="title">Phòng ban - Chức danh</div>
                <CustomButton
                    backgroundColor={colors.primary}
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    Thêm chức danh
                </CustomButton>
            </div>
            <Divider />

            <Row gutter={16}>
                <Col span={5}>
                    <ListDepartment treeData={treeData} onSelect={onSelect} />
                </Col>
                <Col span={19}>
                    <ListPositions listpositionView={listpositionView} filteredPosition={filteredPosition} />
                </Col>
            </Row>

            <ModalAdd
                openModalAdd={isModalOpen}
                onModalAddOk={handleOk}
                onModalAddCancel={handleCancel}
                closeModalAddClick={() => {
                    setIsModalOpen(false);
                }}
                onFormAddFinish={onFinish}
                onNameAddChange={(e) => {
                    setNewValueName(e.target.value);
                    console.log('TAP HERE', e.target.value);
                }}
                onNoteAddChange={(e) => {
                    setNewValueNote(e.target.value);
                    console.log('TAP NOTE HERE', e.target.value);
                }}
            />
        </DepartmentStyled>
    );
};

export default Department;
