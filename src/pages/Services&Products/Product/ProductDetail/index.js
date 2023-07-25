import React, { useEffect, useState } from 'react'
import { Line, ProductPrice, ProductQuantity, ProductRate, Wrapper, WrapperButton, WrapperDescription, WrapperInfo } from './styles'
import { Button, Carousel, Col, Rate, Row } from 'antd'
import { TitleStyled } from '../../../News/components/GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { WrapperRate } from './styles';
import RateComponent from '../components/RateComponent';
import ProductBestSaler from '../components/ProductBestSaler';
import { GetBestSellProduct } from '../../../../services/apis/bestSaleProduct';

const listImage = [
    require('../../../../common/images/sanpham-1.png'),
    require('../../../../common/images/sanpham-1.png'),
    require('../../../../common/images/sanpham-1.png'),
    require('../../../../common/images/sanpham-1.png'),



]

const ProductDettail = () => {
    let carouselRef = null;
    const [listBest, setListBest] = useState([]);

    useEffect(() => {
        const getBest = async () => {
            const response = await GetBestSellProduct({
                "PageSize": 10,
                "CurrentPage": 1,
                "CategoryPostID": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
            });
            console.log(response);
        }
        getBest()
    },[])

    const handleButtonClick = (slideNumber) => {
        carouselRef.goTo(slideNumber);
    };
    return (
        <Wrapper>
            <WrapperInfo>

                <Row>
                    <Col span={8}>

                        <div>
                            <Carousel ref={(ref) => (carouselRef = ref)}>
                                {/* Các mục trong carousel */}
                                {listImage.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} />
                                    </div>
                                ))}
                            </Carousel>
                            <div className='list-img'>
                                {listImage.map((image, index) => (
                                    <div className='item'>
                                        <img src={image} onClick={() => handleButtonClick(index)} />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </Col>
                    <Col span={8}>
                        <TitleStyled size='24px' color='#212529' weight='600'>
                            Nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500 ml
                        </TitleStyled>

                        <ProductRate>
                            <span className='rate-star'>
                                <FontAwesomeIcon className='star' icon={faStar} />
                                <FontAwesomeIcon className='star' icon={faStar} />
                                <FontAwesomeIcon className='star' icon={faStar} />
                                <FontAwesomeIcon className='star' icon={faStar} />
                                <FontAwesomeIcon className='star' icon={faStar} />
                            </span>
                            <span className='rate-text'>
                                5 đánh giá
                            </span>
                        </ProductRate>

                        <ProductPrice>
                            <p className='price'>
                                <span className='underline'>đ</span>
                                <span>50000</span>
                            </p>
                            <p>
                                <span className='price-sale'>
                                    <span className='underline'>đ</span>
                                    <span>100000</span>
                                </span>

                                <span className='sale-percent'>
                                    -50%
                                </span>
                            </p>
                        </ProductPrice>

                        <ProductQuantity>
                            <span className='title'>Số lượng</span>
                            <span className='control'>
                                <Button className='decrease'><FontAwesomeIcon icon={faMinus} /></Button>
                                <span>1</span>
                                <Button className='increase'><FontAwesomeIcon icon={faPlus} /></Button>
                            </span>
                            <span className='total'>190 sản phẩm có sẵn</span>
                        </ProductQuantity>
                        <WrapperButton>
                            <div>
                                <Button className='btn-cart'>
                                    <span><FontAwesomeIcon icon={faCartShopping} /></span>
                                    <span>Thêm giỏ hàng</span>
                                </Button>
                            </div>
                            <div>
                                <Button className='btn-buy'>
                                    Mua ngay
                                </Button>
                            </div>
                        </WrapperButton>
                    </Col>
                </Row>


            </WrapperInfo>
            <Row gutter={15} >
                <Col span={18} className='content'>
                    <WrapperDescription>
                        <div className='title'>
                            <TitleStyled size='18px' weight='600' >Mô tả</TitleStyled>
                            <Line />
                        </div>
                        <div className='description'>

                        </div>
                    </WrapperDescription>
                    <WrapperRate>
                        <div className='title'>
                            <TitleStyled size='18px' weight='600' >Đánh giá Nước uống tinh khiết HaiPhong Water - Thùng 24 chai 500 ml </TitleStyled>
                            <Line />
                        </div>
                        <RateComponent>

                        </RateComponent>
                    </WrapperRate>
                </Col>
                <Col span={6}>
                    <ProductBestSaler />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default ProductDettail