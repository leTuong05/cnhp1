import CustomButton from '../../../../../components/Button/ButtonPrimary';
import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal, Input } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import ModalUpdate from './ModalUpdate';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeletePosition, fetchPosition, fetUpdatePosition } from '../../../../../reducers/positionSlice';
import { UpdateListPosition } from '../../../../../services/apis/positions';
import { message } from 'antd';
const { confirm } = Modal;
function ListPositions({ filteredPosition, listpositionView }) {
    const [dataListView, setdataListView] = useState(null);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataInfo, setDataInfo] = useState(undefined);

    const [dataDefault, setDataDefault] = useState(null);

    const [searchedData, setSearchedData] = useState([]);
    const dispatch = useDispatch();
    const { Search } = Input;

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDataSubmit = (data) => {
        setdataListView((prev) => [...prev, data]);
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        const filteredData = dataDefault?.filter((item) => {
            return item.PositionName.toLowerCase().includes(value.toLowerCase());
        });
        setSearchedData(filteredData);
    };

    useEffect(() => {
        setdataListView(filteredPosition);
    }, [filteredPosition]);

    useEffect(() => {
        setDataDefault(listpositionView);
    }, [listpositionView]);

    const onFinish = () => {
        dispatch(
            fetUpdatePosition({
                PositionID: dataInfo.PositionID,
                PositionName: dataInfo.PositionName,
                Note: dataInfo.Note
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
    };
    const handlePositionChange = (e) => {
        setDataInfo({
            ...dataInfo,
            PositionName: e.target.value
        });
    };

    const handleNoteChange = (e) => {
        setDataInfo({
            ...dataInfo,
            Note: e.target.value
        });
    };

    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            width: 70,
            className: 'serial',
            render: (value, record, index) => index + 1
        },
        {
            title: 'Tên chức danh',
            dataIndex: 'PositionName'
        },
        {
            title: 'Ghi chú',
            dataIndex: 'Note',
            key: 'note',
            width: 300,
            render: (value, record) => (
                <div className="action">
                    <div>{value}</div>
                    {hoveredRow === record.PositionID && (
                        <>
                            <Row gutter={8} className="edit">
                                <Col span={12}>
                                    <CustomButton
                                        className={'icon-edit icon'}
                                        onClick={() => {
                                            setIsModalOpen(true);
                                            setDataInfo(record);
                                            // console.log(record.PositionID);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPen} />
                                    </CustomButton>
                                </Col>
                                <Col span={12}>
                                    <CustomButton
                                        className={'icon-delete icon'}
                                        onClick={
                                            () => handleDelete(record)
                                            // {
                                            // confirm({
                                            //     title: 'Are you sure delete this task?',
                                            //     icon: <ExclamationCircleFilled />,
                                            //     content: 'Some descriptions',
                                            //     okText: 'Yes',
                                            //     okType: 'danger',
                                            //     cancelText: 'No',
                                            //     onOk() {
                                            //         dispatch(
                                            //             fetchDeletePosition({
                                            //                 PositionID: record.PositionID
                                            //             })
                                            //         ).then(() => {
                                            //             dispatch(
                                            //                 fetchPosition({
                                            //                     TextSearch: '',
                                            //                     PageSize: 20,
                                            //                     CurrentPage: 1
                                            //                 })
                                            //             );
                                            //             message.success('Xóa thành công ');
                                            //         });
                                            //     },
                                            //     onCancel() {
                                            //         console.log('Cancel');
                                            //     }
                                            // });
                                            // // console.log(record.PositionID);
                                            // // }
                                        }
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </CustomButton>
                                </Col>
                            </Row>
                        </>
                    )}
                </div>
            )
        }
    ];

    const handleDelete = (record) => {
        Modal.confirm({
            title: 'Xóa',
            content: 'Bạn chắc chắn muốn xóa tổ quản lý này không?',
            onOk: () => {
                dispatch(fetchDeletePosition(record.PositionID)).then(() => {
                    dispatch(
                        fetchPosition({
                            TextSearch: '',
                            PageSize: 20,
                            CurrentPage: 1
                        })
                    );
                    message.success('Xóa thành công ');
                });
            }
        });
        console.log('??>>>>>>>', record);
    };

    return (
        <>
            <Search placeholder="input search text" onChange={handleSearch} style={{ width: 200 }} />
            <CustomTable
                columns={columns}
                dataSource={dataListView?.length > 0 ? dataListView : dataDefault}
                onRow={(record, rowIndex) => {
                    return {
                        onMouseEnter: () => {
                            setHoveredRow(record.PositionID);
                        }, // mouse enter row
                        onMouseLeave: () => {
                            setHoveredRow(null);
                        } // mouse leave row
                    };
                }}
                bordered
            />
            <ModalUpdate
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                onDataSubmit={handleDataSubmit}
                dataInfo={dataInfo}
                onFinish={onFinish}
                onPositionChange={handlePositionChange}
                onNoteChange={handleNoteChange}
                closeModalClick={() => {
                    setIsModalOpen(false);
                }}
            />
        </>
    );
}

export default ListPositions;
