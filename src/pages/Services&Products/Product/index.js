import React, { useEffect, useState } from 'react'
import { Sort, Wrapper } from './styles'

import { Col, Row, Select } from 'antd'
import ProductItem from './components/ProductItem'
import { useNavigate } from 'react-router-dom'
import { getAllProduct } from '../../../services/apis/products'
const products = [
    {
        id: 1,
        name: 'Nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500 ml',
        price: 50000,
        priceSale: 50000,
        image: require('../../../common/images/sanpham-1.png')
    },
    {
        id: 1,
        name: 'Nước uống tinh khiết HaiPhong Water - Bình 19 lít có vòi',
        price: 50000,
        priceSale: 50000,
        image: require('../../../common/images/sanpham-2.png')
    },
    {
        id: 1,
        name: 'Nước uống tinh khiết HaiPhong Water - Bình 19 lít không có vòi',
        price: 50000,
        priceSale: 50000,
        image: require('../../../common/images/sanpham-3.png')
    },
    {
        id: 1,
        name: 'Nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500 ml',
        price: 50000,
        priceSale: 50000,
        image: require('../../../common/images/sanpham-1.png')
    },
    {
        id: 1,
        name: 'Nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500 ml',
        price: 50000,
        priceSale: 50000,
        image: require('../../../common/images/sanpham-2.png')
    },
]
const Product = () => {
    const [productList, setProductList] = useState([]);
    const [typeOfSort, setTypeOfSort] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        const getListProduct = async () => {
            const res = await getAllProduct({
                typeOfSort,
                TextSearch: "",
                PageSize: 20,
                CurrentPage: 1,
                IsOutOfStock: 0,
            });
            setProductList(res.Object.listProductResponse);
            console.log(typeof(res.Object.listProductResponse));
        };
        getListProduct();
    }, [typeOfSort]);
    console.log(productList);
    return (
        <Wrapper >
            <h2>Danh sach san pham</h2>
            <Sort>
                <span className='label'>Sắp xếp theo: </span>
                <Select
                    defaultValue="lucy"
                    style={{
                        width: 200,
                    }}
                    // onChange={handleChange}
                    options={[
                        {
                            value: 'Teen ',
                            label: 'Tên sản phẩm',
                        },
                        {
                            value: 'lucy',
                            label: 'Giá từ thấp đến cao',
                        },
                        {
                            value: 'Yiminghe',
                            label: 'Giá từ cao đến thấp',
                        },

                    ]}
                />
            </Sort>

            <Row gutter={20}>
                {productList.map((product) => (
                    <Col span={6}>
                        <ProductItem key={product.ProductID} product={product} />
                    </Col>
                ))}


            </Row>
        </Wrapper>
    )
}

export default Product