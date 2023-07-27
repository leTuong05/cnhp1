import React from 'react'
import { ProductImage, ProductPrice, ProductRate, Wrapper } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { TitleStyled } from '../../../../News/components/GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { StarOutlined } from '@ant-design/icons'
import { Rate } from 'antd'

const ProductItem = ({ product }) => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Link to={`/san-pham-va-dich-vu/san-pham/${product.ProductID}`} title={product.ProductName}>
                <ProductImage src={product.Image} /></Link>
            <Link to={`${product.ProductID}`} title={product.ProductName}>
                <TitleStyled className='product-name' size='16px' weight='600' >{product.ProductName}</TitleStyled>
            </Link>
            <ProductRate>
                <span className='rate-star'>
                    <Rate disabled defaultValue={5} />
                </span>
                <span className='rate-text'>
                    5 đánh giá
                </span>
            </ProductRate>

            <ProductPrice>
                <p className='price'>
                    <span className='underline'>đ</span>
                    {product.Price.toLocaleString()}
                </p>
                {product.Discount === 0 ? '' : <p className='price-sale'><span className='underline'>đ</span>{product.Discount}</p>}
            </ProductPrice>
        </Wrapper>
    )
}

export default ProductItem