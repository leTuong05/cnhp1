import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../../services/apis/products';
import { Select, Row, Col, Image } from 'antd';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [typeOfSort, setTypeOfSort] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        const getListProduct = async () => {
            const res = await getAllProduct({
                typeOfSort,
                TextSearch: '',
                PageSize: 20,
                CurrentPage: 1,
                IsOutOfStock: 0
            });
            setProductList(res.Object.listProductResponse);
            console.log(productList);
        };
        getListProduct();
    }, [typeOfSort]);

    return (
        <div>
            <div>Danh sách sản phẩm</div>
            <Row>
                Sắp xếp theo:
                <Select
                    defaultValue="1"
                    onChange={(value) => setTypeOfSort(value)}
                    options={[
                        { value: 1, label: 1 },
                        { value: 2, label: 2 },
                        { value: 3, label: 3 }
                    ]}
                />
            </Row>
            <div>
                <Row gutter={[16, 16]}>
                    {productList.map((product) => {
                        return (
                            <Col span={6} onClick={() => navigate(`${product.ProductID}`)}>
                                <Image src={product.FileUrl} preview={false} />
                                <div>{product.ProductName}</div>
                                <div>
                                    {product.AverageRating}&nbsp;{product.QuantityRating}
                                </div>
                                <div>{(product.Price * (100 - product.Discount)) / 100}</div>
                                <div>{product.Price}</div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Products;
