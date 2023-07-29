import React from 'react'
import { Wrapper, WrapperItem, WrapperTitle } from './styles'
import { TitleStyled } from '../../../../News/components/GlobalStyles'
import { Link } from 'react-router-dom'

const data = [
    {
        id: 1,
        name: 'Nước uống tinh khiết Hải Phòng Water - Thùng 24 chai 500ml',
        price: 50000,
        image: require('../../../../../common/images/sanpham-1.png')
    },
    {
        id: 2,
        name: 'Nước uống tinh khiết Hải Phòng Water - Thùng 24 chai 500ml',
        price: 50000,
        image: require('../../../../../common/images/sanpham-2.png')
    },
]
const ProductBestSaler = ({listBest}) => {
    return (
        <Wrapper>
            <WrapperTitle>
                <TitleStyled size='22px' weight='600'>Sản phẩm bán chạy</TitleStyled>
                <div className='line'></div>
            </WrapperTitle>

            <WrapperItem>
                {listBest.map((item) => (
                    <Link to={`/san-pham-va-dich-vu/san-pham/${item.ProductID}`}>
                        <img className='image' src={item.Image} />
                        <TitleStyled size='16px' >{item.ProductName}</TitleStyled>
                        <p className='price'>{item.Price} <span>đ</span></p>
                    </Link>
                ))}

            </WrapperItem>
        </Wrapper>
    )
}

export default ProductBestSaler