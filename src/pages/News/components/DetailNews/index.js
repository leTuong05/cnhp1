import React from 'react'
import { TagItem, Wrapper, WrapperPostRelated, WrapperTag } from './styles'
import { Col, Row } from 'antd'
import { Line, TitleStyled } from '../GlobalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faPen } from '@fortawesome/free-solid-svg-icons'
import PostCategory from '../PostCategory'
import { Link } from 'react-router-dom'

const listTags = [
    'Đảng và đoàn thể'
]
const listNews = [
    {
        id: 1,
        title: 'Đoàn hội thao Công ty đạt Giải Nhất toàn đoàn Hội thao chào mừng kỷ niệm 15 năm ngày thành lập Đảng bộ Khối Doanh nghiệp',
        datetime: '11/10/2022 14:52:59',
        summary: 'Sáng 17/7, tại Trường Đại học Hàng hải Việt Nam, Đảng ủy Khối Doanh nghiệp thành phố tổ chức Hội thao chào mừng Kỷ niệm 15 năm Ngày thành lập Đảng bộ Khối Doanh nghiệp thành phố Hải...',
        
    },
    {
        id: 2,
        title: 'Công ty Cổ phần Cấp nước Hải Phòng tham gia môn bóng đá nam – môn thể thao đầu tiên trong hội thao chào mừng kỷ niệm 15 năm Ngày thành lập Đảng bộ Khối Doanh nghiệp...',
        datetime: '11/10/2022 14:52:59',
        summary: 'Ngày 02/7/2022, tại Trung tâm thể thao Đằng Lâm, Đảng ủy Khối...',
        
    },
    {
        id: 3,
        title: 'Giao lưu bóng đá giữa Công ty Cổ phần Cấp nước Hải Phòng và Đài Phát thanh & Truyền hình Hải Phòng',
        datetime: '11/10/2022 14:52:59',
        summary: 'Thiết thực kỷ niệm 97 năm ngày Báo chí Việt Nam 21/6 và hướng tới kỷ niệm 93 năm ngày thành lập Công đoàn Việt Nam 28/7. Được sự nhất trí của Đảng ủy, Ban Lãnh đạo 2 đơn vị, ngày 28/6/2022, tại...',
        
    },
    {
        id: 4,
        title: 'CBCNV Công ty tích cực tham gia "Ngày hội hiến máu"',
        datetime: '11/10/2022 14:52:59',
        summary: 'Hưởng ứng Ngày hội “Hiến máu tình nguyện” do Đảng ủy Khối Doanh nghiệp phối hợp với Ban chỉ đạo Vận động hiến máu tình nguyện thành phố tổ chức tại Trường Chính trị Tô Hiệu vào sáng 25/6, gần 70 CBCNV Công ty đã tích cực hưởng ứng và tham gia...',
        
    },
    {
        id: 5,
        title: 'Giao lưu bóng đá hưởng ứng Tháng Công nhân năm 2022',
        datetime: '11/10/2022 14:52:59',
        summary: 'Hưởng ứng Tháng Công nhân năm 2022 và phát động phong trào thể dục thể thao trong CBCNV, chiều ngày 27/5, tại Sân vận động Trường Đại học Hàng Hải, Công đoàn Công ty CP Cấp nước Hải Phòng đã sôi nổi tổ chức chương trình giao hữu bóng đá 11 người...',
        
    },
]
const DetailNews = () => {
    return (
        <Wrapper>
            <Row>
                <Col span={16}>
                    <TitleStyled size={'24px'}> Cấp nước Hải Phòng - đồng hành cùng tiến trình chuyển đổi số của thành phố</TitleStyled>
                    <p className='info'>
                        <span className='datetime'><FontAwesomeIcon className='icon' icon={faClock} /> 11/10/2022 14:52:59</span>
                        <span className='author'><FontAwesomeIcon className='icon' icon={faPen} />Ngọc Huyền</span>

                    </p>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row gutter={[30]}>
                <Col span={16}>
                    {/* Content */}

                    <WrapperTag>
                        {listTags.map((tag) => (
                            <Row>
                                <Col>
                                    <Link>
                                        <TagItem>
                                            {tag}
                                        </TagItem>
                                    </Link>
                                </Col>
                            </Row>
                        ))}
                    </WrapperTag>
                    <Link className='post-prev'>
                        <FontAwesomeIcon className='icon-angle' icon={faAngleLeft} />
                        <span>Bài viết trước</span>
                    </Link>

                    <WrapperPostRelated>
                        <div className='title'>
                            <TitleStyled size='24px' >Bài viết liên quan</TitleStyled>
                            <Line></Line>
                        </div>
                        <div className='list-post-related'>
                            {listNews.map((news, index)=>(
                            <p>
                                <Link className='post-item'>{news.title}</Link>
                            </p>
                            ))}
                        </div>
                    </WrapperPostRelated>
                </Col>
                <Col span={8}>
                    <PostCategory />
                </Col>
            </Row>

        </Wrapper>
    )
}

export default DetailNews