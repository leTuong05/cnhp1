import React, { useState, useEffect } from 'react';
import CustomTabs from '../../../components/Tabs';
import { Row, Col, Image } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productImg from '../../../common/images/imageAdministrator_page/product.png';
import { EyeOutlined } from '@ant-design/icons';
import CustomButton from '../../../components/Button/ButtonPrimary';
import { colors } from '../../../styles';
import CustomModal from './components/Modal';
import { ProductsStyled } from './styles';
import CustomTable from '../../../components/Table';
import { getAllProductInCard } from '../../../services/apis/cart';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getAdminProduct, getAllProduct } from '../../../services/apis/products';
import { useDispatch } from 'react-redux';
import { fetchDeleteProduct } from '../../../reducers/productSlice';
const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataProduct, setDataProduct] = useState([]);
    const [hoveredRow, setHoveredRow] = useState(null);

    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            render: (value, record, index) => index + 1
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'ProductName',
            render: (text, record) => (
                <a style={{ display: 'flex' }}>
                    {record.Image ? (
                        <div style={{ width: '100px', height: '100px', backgroundColor: 'gray' }}>
                            <img src={record.Image} alt={text} />
                        </div>
                    ) : (
                        <div style={{ width: '100px', height: '100px', backgroundColor: 'gray' }}>
                            <Image src="error" />
                        </div>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>{text}</span>
                        <div>
                            <EyeOutlined /> 1.000
                        </div>
                    </div>
                </a>
            )
        },
        {
            title: 'Giá',
            dataIndex: 'Price',
            sorter: (a, b) => a.price - b.price
        },
        {
            title: 'Giảm Giá(%)',
            dataIndex: 'Discount',
            sorter: (a, b) => a.discout - b.discout
        },
        {
            title: 'Kho hàng',
            dataIndex: 'QuantityStock',
            sorter: (a, b) => a.warehouse - b.warehouse
        },
        {
            title: 'Doanh số',
            dataIndex: 'Sold',
            sorter: (a, b) => a.revenue - b.revenue,
            render: (value, record) => (
                <div className="action">
                    <div>{value}</div>
                    {hoveredRow === record.ProductID && (
                        <>
                            <Row gutter={8} className="edit">
                                <Col span={12}>
                                    <CustomButton
                                        className={'icon-edit icon'}
                                        onClick={() => {
                                            setIsModalOpen(true);
                                            // setDataInfo(record);
                                            // console.log(record.PositionID);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faPen} />
                                    </CustomButton>
                                </Col>
                                {/* <Col span={12}>
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
                                        //             dispatch(
                                        //                 fetchDeletePosition({
                                        //                     PositionID: record.PositionID,
                                        //                     IsDelete: true
                                        //                 })
                                        //             ).then(() => {
                                        //                 // getList();
                                        //                 message.success('Xóa thành công ');
                                        //             });
                                        //         },
                                        //         onCancel() {
                                        //             console.log('Cancel');
                                        //         }
                                        //     });

                                        //     console.log('record', record.PositionID);
                                        // }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </CustomButton>
                                </Col> */}
                            </Row>
                        </>
                    )}
                </div>
            )
        }
    ];
    const data = dataProduct;

    const items = [
        {
            key: '1',
            label: `Tất cả`,
            children: (
                <CustomTable
                    rowKey="ProductID"
                    columns={columns}
                    dataSource={data}
                    rowSelection={rowSelection}
                    onRow={(record, rowIndex) => {
                        return {
                            onMouseEnter: () => {
                                setHoveredRow(record.ProductID);
                            }, // mouse enter row
                            onMouseLeave: () => {
                                setHoveredRow(null);
                            } // mouse leave row
                        };
                    }}
                />
            )
        },
        {
            key: '2',
            label: `Hết hàng`,
            children: <CustomTable columns={columns} dataSource={data} rowSelection={rowSelection} />
        }
    ];
    const getList = async () => {
        try {
            const response = await getAdminProduct();
            setDataProduct(response.Object?.listProduct);
            // debugger;
            return response;
        } catch (error) {
            // debugger;
            return error;
        }
    };
    const operations = (
        <div className="group-btn">
            <CustomButton onClick={showModal}>Thêm sản phẩm</CustomButton>
            <CustomButton
                backgroundColor="transparent"
                color={colors.black}
                onClick={() => {
                    for (const id of selectedRowKeys) {
                        dispatch(
                            fetchDeleteProduct({
                                ProductID: id
                            })
                        ).then(() => {
                            getList();
                        });
                    }
                }}
            >
                Xóa
            </CustomButton>
        </div>
    );
    console.log('dataProduct', dataProduct);

    useEffect(() => {
        getList();
    }, []);
    return (
        <ProductsStyled>
            <CustomTabs items={items} title={'Danh sách'} operations={operations} />
            <div
                style={{
                    marginBottom: 16
                }}
            >
                <span
                    style={{
                        marginLeft: 8
                    }}
                >
                    {hasSelected}
                </span>
            </div>
            <CustomModal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                onClick={() => {
                    setIsModalOpen(false);
                }}
            />
        </ProductsStyled>
    );
};

export default Products;
