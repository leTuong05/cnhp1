import React from 'react'
import { ImgStyled, ListStyled, Wrapper } from './styles'
import { Avatar, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        title: 'twiceonce',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
const RateItem = () => {
    return (
        <Wrapper>
            <ListStyled
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={require('../../../../../common/images/sanpham-1.png')} />}
                            title={

                                <div>
                                    <span>{item.title}</span>
                                    <p>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                </div>


                            }
                            description={
                                <div>
                                    <p className='datetime'>2021-12-12 20:09</p>
                                    <p className='description'>Giao hàng nhanh. Là một trong những khách hàng trải nghiệm mua hàng trực tiếp trên web chính thức
                                        của công ty rất an tâm Hình ảnh chỉ mang tính chất bình luận.</p>
                                    <div className='img-feedback'>
                                        <img src={require('../../../../../common/images/sanpham-1.png')} />
                                        <img src={require('../../../../../common/images/sanpham-1.png')} />
                                    </div>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />

        </Wrapper>
    )
}

export default RateItem