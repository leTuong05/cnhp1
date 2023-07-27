import React, { useEffect, useState } from 'react';
import { Button, Col, Divider, Form, Input, InputNumber, List, Modal, Popover, Row, Table, Tooltip } from 'antd';
import { ModalStyled, TableStyled, WrapperAction, WrapperProduct, WrapperProductQuantity } from './styles';
import { EyeOutlined } from '@ant-design/icons/lib/icons';
import OrderDetail from '../OrderDetail';
import { CancelOrder, GetAllOrderForAdmin, GetListOrder, UpdateOrder } from '../../../../../services/apis/Order';
import { ReactComponent as ActionAccept } from '../../../../../common/images/button-accept.svg'
import { ReactComponent as ActionDelete } from '../../../../../common/images/button-delete.svg'
import { ReactComponent as ActionComplete } from '../../../../../common/images/button-complete.svg'
import { handleCompleteOrder, handleConfirmOrder, handleDeleteOrder } from '../HandleAction';
import TitleComponent from '../../../../../components/TitleComponent';
import moment from 'moment';


const ListOrder = ({ textSearch, requestFromDate, requestToDate, deliveryFromDate, deliveryToDate, status }) => {
    const [orderID, setOrderID] = useState();
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [listOrders, setListOrders] = useState([])
    const [moneyRepay, setMoneyRepay] = useState(0)
    const [reasonCancel, setReasonCancel] = useState("")
    // const dataWithSTT = listOrders.map((item, index) => ({
    //     ...item,
    //     index: index + 1, // Tính toán giá trị STT bằng cách thêm 1 vào index
    // }));
    const handleHide = () => {
        setShowOrderDetail(false)
    }
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleRowClick = (record, id) => {
        setShowOrderDetail(true)
        setOrderID(record.OrderID)
        console.log("record", record.OrderID);
    };
    const fetchData = async () => {
        try {
            const response = await GetListOrder(
                "",
                1,
                50,
                "",
                "",
                "",
                "",
                0
            );
            setListOrders(response.Object.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }



    };
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, __, index) => index + 1
        },
        {
            title: <div className='title'>
                <span>Mã đơn hàng</span>
                <br />
                <span className='italic'>Người yêu cầu</span>
            </div>,
            dataIndex: 'age',
            width: 250,
            render: (_, record) => (
                <div>
                    <span className='text-ellipsis'>{record.OrderID}</span>
                    <br />
                    <span className='italic'>{record.FullNameOrder}</span>
                </div>
            ),
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'listProduct',
            width: 250,
            render: (_, record) => (
                <WrapperProduct>
                    {record.listProduct.map((product, index) => (
                        <>
                            <Row key={index} gutter={10}>
                                <Col>
                                    <img className='product-image' src={product.Image} />
                                </Col>
                                <Col>
                                    <p className='product-name text-ellipsis'>{product.ProductName}</p>
                                    <p className='product-view'><span><EyeOutlined /></span>1</p>
                                </Col>
                            </Row>
                            {index !== record.listProduct.length - 1 && <Divider className='custom-divider' />}
                        </>
                    ))}

                </WrapperProduct>
            ),
        },
        {
            title: 'Số lượng',
            dataIndex: '',
            render: (_, record) => (
                <>
                    {record.listProduct.map((product, index) => (
                        <WrapperProductQuantity>
                            <div className='product-quantity'>{product.Quantity} </div>
                            {index !== record.listProduct.length - 1 && <Divider className='custom-divider' />}
                        </WrapperProductQuantity>
                    ))
                    }
                </>
            )
        },
        {
            title: <div className='title'>
                <span>Số điện thoại</span>
                <br />
                <span className='italic'>Địa chỉ</span>
            </div>,
            dataIndex: '',
            render: (_, record) => (
                <>
                    <span>{record.PhoneNumberOrder}</span>
                    <br />
                    <span className='italic'>{record.AddressOrder}</span>
                </>
            )
        },
        {
            title: <div className='title'>
                <span>Ngày yêu cầu</span>
                <br />
                <span className='italic'>Ngày giao hàng</span>
            </div>,
            dataIndex: 'age',
            with: 200,
            render: (_, record) => (
                <>
                    <span>{moment(record.CreateDate).format('DD/MM/YYYY')}</span>
                    <br />
                    <span className='italic'>{record.DeliveryDate ? moment(record.DeliveryDate).format('DD/MM/YYYY'):""}</span>
                </>

            )
        },
        {
            title: 'Trạng thái',
            dataIndex: '',
            render: (_, record) => (
                <div>
                    {record.StatusOrder !== 3 && record.StatusOrder !== 4 && (
                        <WrapperAction className='action'>
                            {record.isAccept && (
                                <Tooltip placement="bottom" title={'Xác nhận'}>
                                    <span className='action-icon'>
                                        <ActionAccept onClick={(event) => {
                                            event.stopPropagation();
                                            handleConfirmOrder(record,setListOrders)

                                            

                                        }} />
                                    </span>
                                </Tooltip>
                            )}
                            {record.isDelete && (
                                <Tooltip placement="bottom" title={'Huỷ bỏ'}>
                                    <span className='action-icon'>
                                        <ActionDelete onClick={(event) => {
                                            event.stopPropagation();
                                            setShowModalDelete(true)
                                            setOrderID(record.OrderID)
                                        }

                                        } />
                                    </span>
                                </Tooltip>
                            )}

                            {record.isComplete && (
                                <Tooltip placement="bottom" title={'Hoàn thành'}>
                                    <span className='action-icon'>
                                        <ActionComplete onClick={(event) => {
                                            event.stopPropagation();
                                            handleCompleteOrder(record,setListOrders)
                                            
                                        }} />
                                    </span>
                                </Tooltip>
                            )}

                        </WrapperAction>
                    )}

                    {record.StatusOrder === 4 ? (
                        <span className='  item-black'>Đã huỷ</span>
                    ) : record.StatusOrder === 3 ? (
                        <span className=' item-green'>Đã giao</span>
                    ) : record.StatusOrder === 2 ? (
                        <span className=' item-blue'>Đang giao</span>
                    ) : record.StatusOrder === 1 ? (
                        <span className='item-orange'>Chờ xác nhận</span>
                    ) : null}
                </div>
            )
        },
    ];

    console.log("id >>", textSearch);

    useEffect(() => {
        const getListOrders = async () => {
            const response = await GetListOrder(
                textSearch || "",
                1,
                50,
                requestToDate || "",
                requestFromDate || "",
                deliveryToDate || "",
                deliveryFromDate || "",
                status || 0
            );
            setListOrders(response.Object.data)
        }
        getListOrders();
    }, [textSearch, requestFromDate, requestToDate, deliveryFromDate, deliveryToDate, status])
    console.log(listOrders);
    // useEffect(() => {
    //     const getListOrders = async () => {
    //         const response = await GetAllOrderForAdmin({
    //             CurrentPage: 1,
    //             PageSize: 50,
    //             Status: 0,
    //             TextSearch: textSearch || "",
    //             RequestFromDate: requestFromDate || "",
    //             RequestToDate: requestToDate || "",
    //             DeliveryFromDate: deliveryFromDate || "",
    //             DeliveryToDate: deliveryToDate || "",
    //             Status: status || 0
    //         });
    //         setListOrders(response.Object.data)
    //     }
    //     getListOrders();
    // }, [textSearch, requestFromDate, requestToDate, deliveryFromDate, deliveryToDate, status])

    const handleCancel = () => {
        setShowModalDelete(false);
    };

    const handleOk = async () => {
        console.log(reasonCancel);
        handleDeleteOrder(orderID,reasonCancel,setListOrders)
        setShowModalDelete(false)
        // try {
        //     await CancelOrder({
        //         OrderID: orderID,
        //         ReasonCancel: reasonCancel
        //     });

        //     fetchData();
        //     setShowModalDelete(false)
        // } catch (error) {
        //     console.error('Error fetching orders:', error);
        // }
    };
    return (
        <div>
            <TableStyled
                bordered
                rowSelection={rowSelection}
                columns={columns}
                dataSource={listOrders}
                scroll={{ y: 600 }}
                pagination={{
                    total: listOrders.length, // Tổng số bản ghi
                    // Số bản ghi hiển thị trong một trang
                    showSizeChanger: true, // Cho phép người dùng thay đổi số bản ghi hiển thị trên mỗi trang
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`, // Hiển thị thông tin số bản ghi đang hiển thị
                }}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record, record.orderID),
                })}
            />
            {showOrderDetail && (
                <OrderDetail
                    id={orderID}
                    open={showOrderDetail}
                    onCancel={handleHide}
                />
            )}
            {showModalDelete && (
                <ModalStyled title={<TitleComponent title={'Huỷ đơn hàng'}></TitleComponent>}
                    open={showModalDelete}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText={'Xác nhận'}
                    cancelText={'Đóng'}
                >
                    <p>Huỷ đơn hàng có mã: {orderID}</p>
                    <Form layout="vertical" autoComplete="off">
                        <Form.Item name="name" label="Số tiền hoàn lại">
                            <InputNumber style={{ width: '100%' }} onChange={(value) => setMoneyRepay(value)} />
                        </Form.Item>
                        <Form.Item name="age" label="Lý do huỷ">

                            <Input onChange={(event) => setReasonCancel(event.target.value)} />
                        </Form.Item>
                    </Form>
                </ModalStyled>
            )}

        </div>
    );
};
export default ListOrder;