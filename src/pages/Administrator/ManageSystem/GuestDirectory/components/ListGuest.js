import CustomButton from '../../../../../components/Button/ButtonPrimary';
import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;
function ListGuest() {
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
            accout: 'Giám đốc',
            Note: 'Phó giám đốc'
        },
        {
            key: '2',
            accout: 'Giám đốc',
            Note: 'Phó giám đốc'
        },
        {
            key: '3',
            accout: 'Trưởng phòng',
            Note: 'Phó giám đốc'
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
            title: 'Mã khách hàng',
            dataIndex: 'ma'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'địa chỉ dùng nước',
            dataIndex: 'dchi',
            width: 300,
            render: (value, record) => (
                <div className="action">
                    <div>{value}</div>
                    {hoveredRow == record.key && (
                        <>
                            <Row gutter={8} className="edit">
                                <Col span={12}>
                                    <CustomButton
                                        className={'icon-edit icon'}
                                        // onClick={showModal}
                                    >
                                        <FontAwesomeIcon icon={faPen} />
                                    </CustomButton>
                                </Col>
                                <Col span={12}>
                                    <CustomButton
                                        className={'icon-delete icon'}
                                        // onClick={() => {
                                        //     confirm({
                                        //         title: 'Are you sure delete this task?',
                                        //         icon: <ExclamationCircleFilled />,
                                        //         content: 'Some descriptions',
                                        //         okText: 'Yes',
                                        //         okType: 'danger',
                                        //         cancelText: 'No',
                                        //         onOk() {
                                        //             console.log('OK');
                                        //         },
                                        //         onCancel() {
                                        //             console.log('Cancel');
                                        //         }
                                        //     });
                                        // }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </CustomButton>
                                </Col>
                            </Row>
                        </>
                    )}
                </div>
            )
        },
        {
            title: 'Loại',
            dataIndex: 'type'
        }
    ];

    return (
        <>
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
        </>
    );
}

export default ListGuest;
