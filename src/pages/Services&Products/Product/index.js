import React, { useEffect, useState } from 'react';
import { Sort, Wrapper } from './styles';

import { Col, Row, Select } from 'antd'
import ProductItem from './components/ProductItem'
import { useNavigate } from 'react-router-dom'
import { getAllProduct1 } from '../../../services/apis/products'

const Product = () => {
    const [productList, setProductList] = useState([]);
    const [typeOfSort, setTypeOfSort] = useState(1);

    const navigate = useNavigate();
    const handleSelect = (value) => {
        setTypeOfSort(value);
    };
    useEffect(() => {
        const getListProduct = async () => {
            const res = await getAllProduct1(50, 1, typeOfSort);
            setProductList(res.Object.listProduct);
            console.log(typeof res.Object.listProduct);
        };
        getListProduct();
    }, [typeOfSort]);
    console.log(productList);
    return (
        <Wrapper>
            <h2>Danh sach san pham</h2>
            <Sort>
                <span className="label">Sắp xếp theo: </span>
                <Select
                    defaultValue="Tên sản phẩm"
                    style={{
                        width: 200
                    }}
                    onChange={handleSelect}
                    options={[
                        {
                            value: 1,
                            label: 'Tên sản phẩm'
                        },
                        {
                            value: 2,
                            label: 'Giá từ thấp đến cao'
                        },
                        {
                            value: 3,
                            label: 'Giá từ cao đến thấp'
                        }
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
    );
};

export default Product;
