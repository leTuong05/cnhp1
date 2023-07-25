import { Col, List, Modal, Row, Steps } from 'antd'
import React, { useEffect, useState } from 'react'
import TitleComponent from '../../../../../components/TitleComponent'
import { StepsStyled, WrapperBody, WrapperCheckout, WrapperProduct } from './styles'
import { ReactComponent as OrderStep1Icon } from '../../../../../common/images/order-step-1.svg'
import { ReactComponent as OrderStep2Icon } from '../../../../../common/images/order-step-2.svg'
import { ReactComponent as OrderStep3Icon } from '../../../../../common/images/order-step-3.svg'
import { ReactComponent as OrderStep4Icon } from '../../../../../common/images/order-step-4.svg'
import { ReactComponent as OrderStep5Icon } from '../../../../../common/images/order-step-delete.svg'
import { GetOrderDetails } from '../../../../../services/apis/Order'
import moment from 'moment/moment'


const OrderDetail = ({ onCancel, id, open }) => {
    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        const getOrderDetail = async () => {
            const response = await GetOrderDetails(id);
            setOrderDetail((prev) => [...prev, response.Object])
            console.log(response.Object);
        }
        getOrderDetail();
    }, [id]);


    const statusName = (statusOrder) => {
        let name;
        if (statusOrder === 1) {
            name = 'Chờ xác nhận'
        } else if (statusOrder === 2) {
            name = 'Đang giao'
        } else if(statusOrder === 3) {
            name = 'Đã giao'
        }else{
            name = 'Đã huỷ'
        }

        return name;
    }
    console.log("orderDetail", orderDetail[0]?.listProduct);
    const statusDetails = orderDetail[0]?.listStatus;
    console.log(statusDetails);
    const lastStatus = statusDetails?.length > 0 ? statusDetails[statusDetails.length - 1] : null;
    const lastStatusName = lastStatus ? statusName(lastStatus.StatusOrder)  : '';
    const products = orderDetail[0]?.listProduct;

    const statusCurrent = lastStatus?.StatusOrder;
    console.log(statusCurrent);


    const stepsItems = statusDetails?.map((statusItem) => (
        {
            title: `${moment(statusItem.CreateDate).format('HH:mm:ss')} ${moment(statusItem.CreateDate).format('DD/MM/YYYY')}`,
            description: statusName(statusItem.StatusOrder),
        }))

    const stepsDelete = [
        {
            key: 1,
            title: 'Chờ xác nhận',
            icon: <OrderStep1Icon className='custom-color-icon1' />,
        },
        {
            key: 2,
            title: 'Đã huỷ',
            icon: <OrderStep5Icon />,
        },
    ]

    const steps = [
        {
            key: 1,
            title: 'Chờ xác nhận',
            icon: <OrderStep1Icon className='custom-color-icon1' />,
        },
        {
            key: 2,
            title: 'Đang giao hàng',
            icon: <OrderStep2Icon className='custom-color-icon2' />,
        },
        {
            key: 3,
            title: 'Đã giao',
            icon: <OrderStep3Icon className='custom-color-icon3' />,
        },
        {
            key: 4,
            title: 'Đánh giá',
            icon: <OrderStep4Icon className='custom-color-icon4' />,
        },
    ];
    const stepsItems1 = steps.map((step, index) => {
        const statusItem = orderDetail[0]?.ListStatusDetails?.find((status) => status.StatusOrder === index + 1);
        return {
            ...step,
            description: statusItem ? `${moment(statusItem.CreateDate).format('HH:mm:ss')} ${moment(statusItem.CreateDate).format('DD/MM/YYYY')}` : '',
        };
    });
    return (
        <Modal
            width={1200}
            title={<TitleComponent title={'Chi tiết đơn hàng'}></TitleComponent>}
            open={open}

            onCancel={onCancel}
            footer={null}
        >
            <WrapperBody>
                <List
                    dataSource={orderDetail}
                    renderItem={(item) => (
                        <>
                            <List.Item className='top-modal'>
                                <p>
                                    <span className='order-id'>ID đơn hàng: {item.OrderID}</span>
                                    <span>|</span>
                                    <span className='status'> {lastStatusName}</span>
                                </p>
                            </List.Item>
                            <List.Item className='procedure'>
                                <StepsStyled current={statusDetails?.length === 3 ? 3 : statusDetails?.length - 1} labelPlacement="vertical" items={lastStatus.StatusOrder === 4 ? stepsDelete : stepsItems1} />
                            </List.Item>
                            <List.Item className='wrapper-order-address'>
                                <Row style={{ width: '100%' }}>
                                    <Col span={16} className='order-address'>
                                        <p className='title'>Địa chỉ nhận hàng</p>
                                        <p>{item.FullNameOrder}</p>
                                        <p>{item.PhoneNumberOrder}</p>
                                        <p>{item.AddressOrder}</p>
                                    </Col>
                                    <Col span={8}>
                                        <Steps
                                            progressDot
                                            current={0}
                                            direction="vertical"
                                            items={[...stepsItems].reverse()}
                                        />
                                    </Col>
                                </Row>
                            </List.Item>
                            <List.Item className='wrapper-product'>
                                <Row style={{ width: '100%' }}>
                                    <Col span={16} className=''>
                                        <p className='title'>Sản phẩm</p>
                                        {products.map((product, index) => (
                                            <WrapperProduct>
                                                <img src={require('../../../../../common/images/sanpham-1.png')} />
                                                <div>
                                                    <p className='product-name'>{product.ProductName}</p>
                                                    <p className='quantity'>x <span>{product.Quantity}</span></p>
                                                    <p className='price'>{product.TotalPrice.toLocaleString()}<span className='underline'>đ</span></p>
                                                    <p className='sale-price'>{product.SalePrice.toLocaleString()}<span className='underline'>đ</span></p>
                                                </div>
                                            </WrapperProduct>
                                        ))}
                                    </Col>
                                    <Col span={8}>
                                        <WrapperCheckout>
                                            <div className='checkout-item'>
                                                <p className='title'>Tạm tính ({products.length} sản phẩm)</p>
                                                <p>{ }<span className='underline'>đ</span></p>

                                            </div>
                                            <div className='checkout-item'>
                                                <p className='title'>Phí vận chuyển</p>
                                                <p>0 <span className='underline'>đ</span></p>

                                            </div>
                                            <div className='checkout-item'>
                                                <p className='title'>Tổng cộng</p>
                                                <p className='total'>{item.TotalPrice}<span className='underline'>đ</span></p>

                                            </div>
                                            <div className='checkout-item'>
                                                <p className='title'>Phương thức thanh toán</p>
                                                <p>{item.PaymentTypeName}</p>

                                            </div>
                                        </WrapperCheckout>
                                    </Col>
                                </Row>
                            </List.Item>
                        </>
                    )}
                />
            </WrapperBody>
        </Modal>
    )
}

export default React.memo(OrderDetail)