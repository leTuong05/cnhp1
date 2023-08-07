import React, { useEffect, useState } from 'react'
import { Body, Header, PeopleCare, TagItem, TagPopular, Wrapper } from './styles'
import { Col, Divider, List, Row, Typography } from 'antd'
import { TitleStyled, themeStyles } from '../GlobalStyles'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
// import { getCategoryTabPosts} from '../../../../services/apis/categoryTabPost'

const { Title } = Typography

const listTagPost = [
    'Hoạt động sản xuất',
    'Đảng và đoàn thể',
    'Tiết kiệm',
    'Tin tức liên quan'
]

const listTagShareholder= [
    'Báo cáo tài chính',
    'Báo cáo thường niên',
    'Báo cáo quản trị',
    'Thông tin cổ đông',
    'Đại hội cổ đông thường niên'
]


const listPostNews = [
    {
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '10/10/2022 08:08:08'
    },
    {
        title: 'Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố',
        datetime: '10/10/2022 08:08:08'
    },
]
const listPostShareholder = [
    {
        title: 'Báo cáo tài chính riêng giữa niên độ năm 2022',
        datetime: '10/10/2022 08:08:08'
    },
    {
        title: 'Báo cáo thường niên năm 2021',
        datetime: '10/10/2022 08:08:08'
    },
    {
        title: 'Báo cáo tình hình quản trị Công ty (6 tháng đầu năm 2022)',
        datetime: '10/10/2022 08:08:08'
    },
]
const PostCategory = () => {
    const [listTag, setListTag] = useState([])
    const [listPostCategory, setListPostCategory] = useState([])

    const location = useLocation();

    // useEffect(() => {
    //     const getListTabPost = async () => {
    //         const res = await getCategoryTabPosts()
    //         setListPostCategory(res.Object.ListMostInterested)
    //         setListTag(res.Object.ListPopularTags)
    //     }
    //     getListTabPost();
    // },[])

    console.log("ktra>>>: ", listPostCategory);

    // useEffect(() => {
    //     if (location.pathname.includes('tin-tuc')) {
    //         setListTag(listTagPost)
    //         setListPostCategory(listPostNews)
    //     }
    //     else if (location.pathname.includes('chat-luong-nuoc')) {
    //         setListTag(listTag)
    //         setListPostCategory(listPostCategory)
    //     }else if(location.pathname.includes('co-dong')){
    //         setListTag(listTagShareholder)
    //         setListPostCategory(listPostShareholder)
    //     }
    // })

    return (
        <Wrapper>
            <Header>
                <TitleStyled level={2} weight={700} color='white'> Danh mục bài viết</TitleStyled>
                <Divider className='divider' />
            </Header>
            <Body>
                <PeopleCare>
                    <TitleStyled weight={600} color='#000'>Nhiều người quan tâm</TitleStyled>
                    <List className='list-post'
                        dataSource={listPostCategory}
                        renderItem={(item) => (
                            <List.Item className='post-item'>
                                <Link to={'#'}><TitleStyled weight={600} size='14px'>{item.Title}</TitleStyled></Link>
                                <p className='datetime'>{item.PublicationTime}</p>
                            </List.Item>
                        )}
                    />
                </PeopleCare>
                <TagPopular>
                    <TitleStyled weight={600} color='#000'>Tag phổ biến</TitleStyled>
                    <Row className='list-tag'>
                        {listTag.map((tag, index) => (
                            <Link to={'#'}>
                                <Col className='tag-item' key={index}>
                                    {tag.TagsName}
                                </Col>
                            </Link>


                        ))}

                    </Row>

                </TagPopular>
            </Body>
        </Wrapper>
    )
}

export default PostCategory