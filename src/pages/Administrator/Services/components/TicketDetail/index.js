import { Button, Col, Divider, Image, List, Modal, Row, Steps, Upload, message } from 'antd'
import React, { useState } from 'react'
import TitleComponent from '../../../../../components/TitleComponent'
import { StepsStyled, WrapperBody, WrapperCheckout, WrapperProduct } from './styles'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { GetTicket } from '../../../../../services/apis/Service'
import moment from 'moment'

const data = {
    AddressUseWater: "xóm 3",
    BussinessCode: null,
    Content: "cấp lại hđ",
    CreateDate: "2022-11-29T13:45:31+07:00",
    CreateUser: "a9c45d1e-9144-41d4-a637-04f64a6507ee",
    DistrictID: 4051,
    Email: null,
    Fullname: "tuần trần",
    FullnameNew: null,
    GuestAddressUseWater: "xóm 4- Quán Toàn",
    GuestCode: "PD29001558",
    GuestName: "Trần Tuấn Linh",
    GuestPhone: "0963049748",
    GuestType: 1,
    GuestTypeName: null,
    OrganizationName: null,
    PermanentAddress: null,
    PhoneNumber: "09838235544",
    ProvinceID: 4050,
    PurposeUseType: "00000000-0000-0000-0000-000000000000",
    PurposeUseTypeName: null,
    RepresentativeName: null,
    RequestType: 0,
    RequestTypeName: null,
    TicketListCode: "R16583",
    TicketListID: "90e235b6-209b-4e93-bda1-68e7bea0936f",
    TicketStatus: 1,
    TicketStatusName: "Mới",
    TicketType: 4,
    TicketTypeName: "Cấp lại hợp đồng DVCN",
    WardID: 4052,
}


const TicketDetail = ({ onCancel, visible, id }) => {
    const [ticket, setTicket] = useState({});
    

    useEffect(() => {
        const getTicket = async () => {
            const response = await GetTicket(id);
            setTicket(response.Object)
        }
        getTicket()
    }, [id])

    const ticketTypeName = (ticketType) => {
        let name;
        if (ticketType === 1) name = 'Lắp đặt máy nước'
        else if (ticketType === 2) name = 'Di chuyển máy nước'
        else if (ticketType === 3) name = 'Sang tên hợp đồng DVCN'
        else if (ticketType === 4) name = 'Cấp lại hợp đồng DVCN'
        else name = 'Sửa chữa (đồng hồ, mạng lưới cấp nước sau đồng hồ'

        return name;
    }
    console.log(ticket);
    const [infoFile, setInfoFile] = useState([]);
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                setInfoFile([...infoFile, info.file.name]);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const handleUploadChange = (info) => {
        console.log(info.file.status.name);
        if (info.file.status === 'done') {
            // Lấy thông tin tệp tin đã tải lên
            const uploadedFile = info.file.originFileObj;
            console.log(uploadedFile);
            // Cập nhật biến info bằng cách thêm tệp tin đã tải lên vào mảng
            setInfoFile([...infoFile, uploadedFile]);

            console.log(info);
        } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    };
    return (
        <Modal
            width={1200}
            title={<TitleComponent title={`Chi tiết yêu cầu: ${ticket.CustomerCode ? ticket.CustomerCode : ''} `}></TitleComponent>}
            visible={visible}
            onCancel={onCancel}
            footer={null}
        >
            <WrapperBody>
                <Row>
                    <Col span={12}>
                        <p className='title'>Loại khách hàng:
                            <span> {ticket.GuestType === 1 ? 'Tư nhân' : 'Doanh nghiệp'}</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p className='title'>Trạng thái:
                            {ticket.TicketStatus === 3 ? <span className='status-green'> Hoàn thành</span >
                                : ticket.TicketStatus === 2 ? <span className='status-blue'> Đang hỗ trợ</span>
                                    : ticket.TicketStatus === 1 ? <span className='status-orange'> Mới</span>
                                        : null
                            }

                        </p>
                    </Col>
                </Row>
                <Divider dashed />
                <Row>
                    <Col span={12}>
                        <p className='title'>Mã khách hàng:
                            <span> {ticket.CustomerCode}</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p className='title'>Tên khách hàng:
                            <span> {ticket.CustomerName}</span>
                        </p>
                    </Col>
                </Row>
                <Divider dashed />
                <Row>
                    <Col span={12}>
                        <p className='title'>Điện thoại:
                            <span> {ticket.PhoneNumber}</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p className='title'>Email:
                            <span>{ticket.Email}</span>
                        </p>
                    </Col>
                </Row>
                <Divider dashed />
                <Row>
                    <Col span={24}>
                        <p className='title'>Địa chỉ:
                            <span>{ticket.AddressUseWater}</span>
                        </p>
                    </Col>

                </Row>
                <Divider dashed />
                <Row>
                    <Col span={12}>
                        <p className='title'>Mục đích sử dụng nước:
                            <span>{data.PurposeUseTypeName}</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p className='title'>Ngày yêu cầu:
                            <span>{moment(ticket.CreateDate).format("DD/MM/YYYY  HH:MM")}</span>
                        </p>
                    </Col>
                </Row>
                <Divider dashed />
                <Row>
                    <Col span={12}>
                        <p className='title'>Loại yêu cầu:
                            <span>{ticketTypeName(ticket.TicketType)}</span>
                        </p>
                    </Col>
                    <Col span={12}>
                        <p className='title'>Hình thức yêu cầu:
                            <span> {ticket.RequestType === 1 ? 'Nhanh' : 'Bình thường'}</span>
                        </p>
                    </Col>
                </Row>
                <Divider dashed />
                <Row>
                    <Col span={24}>
                        <p className='title'>Nội dung:
                            <span> {ticket.Content}</span>
                        </p>
                    </Col>

                </Row>
                <Divider dashed />
                <Row>
                    <Col span={24}>
                        <p className='title'>Quản lý hồ sơ:
                        </p>
                    </Col>
                    <Col span={24}>
                        <div className='upload-profile'>
                            {/* {infoFile.length === 0 && <p className='label'>Hợp đồng lắp đặt máy nước</p>} */}
                            <Upload {...props}>
                                <Button>Tải lên</Button>
                            </Upload>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className='paper-contract'>
                            <p className='label'>Giấy chứng minh thư nhân dân/Căn cước công dân</p>
                            <Image
                                width={60}
                                src={require('../../../../../common/images/sanpham-1.png')}
                            />
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className='paper-contract'>
                            <p className='label'>Giấy chứng nhận quyền sở hữu/sử dụng nhà đất</p>
                            <Image
                                width={60}
                                src={require('../../../../../common/images/sanpham-1.png')}
                            />
                        </div>
                    </Col>
                </Row>
            </WrapperBody>
        </Modal>
    )
}

export default TicketDetail