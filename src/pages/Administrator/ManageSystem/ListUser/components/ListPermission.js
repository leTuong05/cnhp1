import CustomButton from '../../../../../components/Button/ButtonPrimary';
import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { fetchDeleteRole, fetchRole, fetchRoleId } from '../../../../../reducers/roleSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from './ModalEdit';
function ListPermission() {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataInfo, setDataInfo] = useState(undefined);

    const [dataInfoo, setDataInfoo] = useState(undefined);

    // useEffect(() => {
    //     setDataInfo(dataInfoo);
    // }, [dataInfoo]);

    const dispatch = useDispatch();

    const { confirm } = Modal;

    const getList = () => {
        dispatch(
            fetchRole({
                PageSize: 10,
                CurrentPage: 1,
                TextSearch: ''
            })
        );
    };
    useEffect(() => {
        getList();
    }, []);
    const dataRole = useSelector((state) => state?.role?.role?.getRole?.Object);
    const dataRoldID = useSelector((state) => state?.role?.roleId?.getRoleId?.Object);
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            width: 70,
            className: 'serial',
            render: (value, record, index) => index + 1
        },
        {
            title: 'Nhóm quyền',
            dataIndex: 'RoleName'
        },
        {
            title: 'Quyền',
            dataIndex: 'Description',
            width: 900
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (value, record) => (
                <div className="action">
                    <div>{value}</div>
                    {hoveredRow == record.key && (
                        <>
                            <Row gutter={8} className="edit">
                                <Col span={12}>
                                    <CustomButton
                                        className={'icon-edit icon'}
                                        onClick={() => {
                                            setIsModalOpen(true);
                                            setDataInfo(record);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPen} />
                                    </CustomButton>
                                </Col>
                                <Col span={12}>
                                    <CustomButton
                                        className={'icon-delete icon'}
                                        onClick={() => {
                                            confirm({
                                                title: 'Are you sure delete this task?',
                                                icon: <ExclamationCircleFilled />,
                                                content: 'Some descriptions',
                                                okText: 'Yes',
                                                okType: 'danger',
                                                cancelText: 'No',
                                                onOk() {
                                                    dispatch(
                                                        fetchDeleteRole({
                                                            RoleID: record.RoleID
                                                        })
                                                    );
                                                },
                                                onCancel() {
                                                    console.log('Cancel');
                                                }
                                            });
                                        }}
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

    return (
        <div>
            <>
                <CustomTable
                    columns={columns}
                    dataSource={dataRole}
                    onRow={(record, rowIndex) => {
                        return {
                            onMouseEnter: () => {
                                setHoveredRow(record.key);
                            }, // mouse enter row
                            onMouseLeave: () => {
                                setHoveredRow(null);
                            } // mouse leave row
                        };
                    }}
                    bordered
                />
                {dataInfo ? (
                    <ModalEdit
                        open={isModalOpen}
                        onCancel={() => {
                            setIsModalOpen(false);
                        }}
                        closeModal={() => {
                            setIsModalOpen(false);
                            // setDataInfo('');
                            dispatch(
                                fetchRoleId({
                                    getRoleId: [],
                                    isLoading: false,
                                    error: null
                                })
                            );
                        }}
                        dataInfo={dataInfo}
                        dataRoldID={dataRoldID}
                    />
                ) : (
                    <></>
                )}
            </>
        </div>
    );
}

export default ListPermission;
