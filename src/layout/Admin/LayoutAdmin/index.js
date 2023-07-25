import React, { useState } from 'react';
import { BreadcrumbStyled, MenuStyled, Wrapper, WrapperContent } from './styles';
import MainLayout from '../../MainLayout';
import { Col, Row } from 'antd';
import { AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}
const items = [
    getItem('Tổng quan', '/tong-quan', <MailOutlined />),

    getItem('Quản lý phiếu', 'sub1', <AppstoreOutlined />, [getItem('Hóa đơn nước', '/hoa-don-nuoc'), getItem('Đơn hàng', '/don-hang')]),
    getItem('Dịch vụ', 'sub2', <AppstoreOutlined />, [getItem('Lắp đặt/Sửa chữa máy nước', '/dv-lap-dat-may-nuoc'), getItem('Sang tên hợp đồng DVCN', '/dv-sang-ten-hop-dong'), getItem('Cấp lại hợp đồng DVCN', '/dv-cap-lai-hop-dong'), getItem('Đăng ký thanh toán tiền nước', '/dv-thanh-toan-tien-nuoc'), getItem('Sửa chữa (ĐH, mạng lưới cấp nước sau đồng hồ)', '/dv-sua-chua'), getItem('Đăng ký thay đổi thông tin', '/dv-thong-tin-khach-hang'), getItem('Tra cứu sử dụng nước', '/dv-tra-cuu')]),
    getItem('Sản phẩm', 'sub3', <AppstoreOutlined />, [getItem('Kho hàng', '/kho-hang')]),
    getItem('Quản lý bài đăng', 'sub4', <AppstoreOutlined />, [getItem('Danh mục - Bài viết', '/danh-sach-bai-viet'), getItem('Danh mục thẻ', '/danh-muc-the')]),
    getItem('Lịch tạm ngừng cấp nước', '/lich-cap-nuoc', <MailOutlined />),

    getItem('Quản lý bài đăng', 'sub7', <AppstoreOutlined />, [getItem('Danh mục - Bài viết', '/danh-sach-bai-viet'), getItem('Danh mục thẻ', '/danh-muc-the')]),
    getItem('Đơn vị hành chính', 'sub5', <SettingOutlined />, [getItem('Tổ quản lý', '/to-quan-ly')]),
    getItem('Quản trị hệ thống', 'sub6', <SettingOutlined />, [getItem('Phòng ban - Chức vụ', '/phong-ban-chuc-vu'), getItem('Danh bạ người dùng', '/danh-ba-nguoi-dung'), getItem('Phân quyền', '/phan-quyen'), getItem('Danh bạ doanh nghiệp', '/danh-ba-doanh-nghiep'), getItem('danh bạ khách hàng', '/danh-ba-khach-hang')]),
    getItem('Đơn giá - Định mức', '/don-gia-dinh-muc', <MailOutlined />)
];

const LayoutAdmin = ({ children }) => {
    const [mode, setMode] = useState('inline');
    const navigate = useNavigate();

    return (
        <Wrapper>
            <MainLayout />
            {/* <BreadcrumbStyled
                separator=">"
                items={[
                    {
                        title: 'Home'
                    },
                    {
                        title: 'Application Center',
                        href: ''
                    },

                    {
                        title: 'An Application'
                    }
                ]}
            /> */}
            <WrapperContent>
                <Row gutter={15}>
                    <Col span={4} style={{ height: '100vh' }}>
                        <MenuStyled
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode={mode}
                            onClick={({ key }) => {
                                navigate(key);
                            }}
                            items={items}
                        ></MenuStyled>
                    </Col>
                    <Col span={20}>{children}</Col>
                </Row>
            </WrapperContent>
        </Wrapper>
    );
};

export default LayoutAdmin;
