import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import CustomButton from '../../../../../components/Button/ButtonPrimary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { fetchDeleteUser, fetchUser } from '../../../../../reducers/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalAdd from './ModalAdd';

const { confirm } = Modal;
function ListDirector() {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const getListUser = () => {
        dispatch(
            fetchUser({
                PageSize: 10,
                CurrentPage: 1,
                TextSearch: '',
                DepartmentID: '',
                IsActive: 1
            })
        );
    };
    useEffect(() => {
        getListUser();
    }, []);
    const listUserView = useSelector((state) => state?.user?.getUser?.Object);

    console.log('listUserView', listUserView);

    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            width: 70,
            className: 'serial',
            render: (value, record, index) => index + 1
        },
        {
            title: 'Ảnh',
            dataIndex: 'Avatar'
        },
        {
            title: 'Tài khoản',
            dataIndex: 'UserName'
        },
        {
            title: 'Họ Tên',
            dataIndex: 'FullName'
        },
        {
            title: 'Email / SĐT',
            dataIndex: 'Contact'
        },
        {
            title: 'NHÓM QUYỀN',
            dataIndex: 'RoleName'
        },
        {
            title: 'Chức danh',
            dataIndex: 'PositionName',
            render: (value, record) => (
                <div className="action">
                    <div>{value}</div>
                    {hoveredRow == record.key && (
                        <>
                            <Row gutter={8} className="edit">
                                <Col span={12}>
                                    <CustomButton className={'icon-edit icon'}>
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            onClick={() => {
                                                setIsModalOpen(true);
                                            }}
                                        />
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
                                                    dispatch(fetchDeleteUser({ UserID: '3468a55e-19b6-48ce-97ab-784933feaee0' }));
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
            <CustomTable
                columns={columns}
                dataSource={listUserView}
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
            <ModalAdd open={isModalOpen} />
        </div>
    );
}

export default ListDirector;
