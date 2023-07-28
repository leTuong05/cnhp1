import CustomButton from '../../../../../components/Button/ButtonPrimary';
import CustomTable from '../../../../../components/Table';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { fetchRole } from '../../../../../reducers/roleSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from './ModalEdit';
function ListPermission() {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataInfo, setDataInfo] = useState(undefined);

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
    //     {
    //         key: '1',
    //         groupPermission: 'Giám đốc',
    //         permission: (
    //             <div>
    //                 - Giám đốc
    //                 <br />
    //                 - Quản lý chủ đề/đề tài: Truy cập trang; Đăng ký chủ đề/đề tài; Cập nhật thông tin; Xóa thông tin; Thêm chủ đề/đề tài; Import chủ đề/đề tài; Xuất file; Duyệt chủ đề/đề tài
    //                 <br />
    //                 - Quản lý sản phẩm: Truy cập trang; Thêm sản phẩm; Cập nhật sản phẩm; Xóa sản phẩm; Thêm nhận xét; Duyệt nội dung; Hoàn trả sản phẩm; Xuất file; Nhập xếp loại; Chuyển duyệt; Chuyển duyệt luồng tắt; Chuyển lãnh đạo duyệt; Thu hồi; Chuyển phát sóng; Phát sóng; Sửa bảng kê; Chuyển sản xuất; Chuyển xếp lịch; Biên dịch lại
    //                 <br />
    //                 - Quản lý lịch phát sóng: Truy cập trang; Nhập lịch phát sóng; Sửa lịch phát sóng; Xóa lịch phát sóng; Cập nhật phát lại chương trình; Export file; Import file
    //                 <br />
    //                 - Quản lý phân quyền: Truy cập trang; Thêm quyền; Cập nhật quyền; Xóa quyền
    //                 <br />
    //             </div>
    //         ),
    //         status: 'Đang hoạt động'
    //     },
    //     {
    //         key: '2',
    //         groupPermission: 'Phó Giám đốc',
    //         permission: 'Nội dung....'
    //     }
    // ];

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
                        onOk={() => {
                            setIsModalOpen(false);
                        }}
                        dataInfo={dataInfo}
                    />
                ) : (
                    <></>
                )}
            </>
        </div>
    );
}

export default ListPermission;
