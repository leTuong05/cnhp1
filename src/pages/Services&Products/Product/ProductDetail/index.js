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
import { useParams } from 'react-router-dom';
import { getProductBestSell, getProductDetail } from '../../../../services/apis/products';


const listImage = [
    require('../../../../common/images/sanpham-1.png'),
    require('../../../../common/images/sanpham-1.png'),
    require('../../../../common/images/sanpham-1.png'),
    require('../../../../common/images/sanpham-1.png'),
]

const ProductDettail = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    console.log(id);
    let carouselRef = null;
    const [listBest, setListBest] = useState([]);

    useEffect(() => {
        const getBest = async () => {
            const response = await getProductBestSell();
            setListBest(response.Object);
        }
        getBest()
    }, [])

    useEffect(() => {
        const getDetail = async () => {
            const response = await getProductDetail(id)
            setProductDetail(response.Object)
        }
        getDetail()
    }, [id])
    console.log(productDetail);
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
                            {productDetail.ProductName}
                        </TitleStyled>

                        <ProductRate>
                            <span className='rate-star'>
                                <Rate disabled defaultValue={5} />
                            </span>
                            <span className='rate-text'>
                                {productDetail.QuantityRating} đánh giá
                            </span>
                        </ProductRate>

                        <ProductPrice>
                            <p className='price'>
                                <span className='underline'>đ</span>
                                <span>{productDetail.Price}</span>
                            </p>
                            {productDetail.Discount === 0 ? <></> : (
                                <p>
                                    <span className='price-sale'>
                                        <span className='underline'>đ</span>
                                        <span>{productDetail.Discount}</span>
                                    </span>

                                    <span className='sale-percent'>
                                        -50%
                                    </span>
                                </p>
                            )}
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
                        <div dangerouslySetInnerHTML={{ __html: productDetail.Description }} className='description'>
                        </div>
                    </WrapperDescription>
                    <WrapperRate>
                        <div className='title'>
                            <TitleStyled size='18px' weight='600' >Đánh giá {productDetail.ProductName} </TitleStyled>
                            <Line />
                        </div>
                        
                                <RateComponent id={id} listRate={productDetail.Stars}>
                                </RateComponent>
                        
                    </WrapperRate>
                </Col>
                <Col span={6}>
                    <ProductBestSaler listBest={listBest} />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default ProductDettail