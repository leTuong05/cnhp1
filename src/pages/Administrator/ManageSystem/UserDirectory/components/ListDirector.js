import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import CustomButton from '../../../../../components/Button/ButtonPrimary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;
function ListDirector() {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dataSource = [
        {
            key: '1',
            positions: 'Giám đốc',
            note: 'Phó giám đốc'
        },
        {
            key: '2',
            positions: 'Giám đốc',
            note: 'Phó giám đốc'
        },
        {
            key: '3',
            positions: 'Trưởng phòng',
            note: 'Phó giám đốc'
        }
    ];

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
            dataIndex: 'image'
        },
        {
            title: 'Tài khoản',
            dataIndex: 'account'
        },
        {
            title: 'Họ Tên',
            dataIndex: 'name'
        },
        {
            title: 'Email / SĐT',
            dataIndex: 'email'
        },
        {
            title: 'NHÓM QUYỀN',
            dataIndex: 'permission'
        },
        {
            title: 'Chức danh',
            dataIndex: 'positions',
            render: (value, record) => (
                <div className="action">
                    <div>{value}</div>
                    {hoveredRow == record.key && (
                        <>
                            <Row gutter={8} className="edit">
                                <Col span={12}>
                                    <CustomButton className={'icon-edit icon'} onClick={showModal}>
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
                                                    console.log('OK');
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
                dataSource={dataSource}
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
        </div>
    );
}

export default ListDirector;
