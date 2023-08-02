import React, { useState } from 'react'
import { Col, Pagination, Row, Typography } from 'antd';
import { TitleStyled, Wrapper, WrapperContent, WrapperItem, WrapperPagination } from "./styles";
import { Line } from '../GlobalStyles';
import { Link } from "react-router-dom";

import PostCategory from '../PostCategory';
import NewItem from '../NewItem';

const News = ({ title, listNews, listTags, listPostCategory }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;

    const displayListNews = listNews.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Wrapper>
            <TitleStyled level={2}>
                {title}
                <Line />
            </TitleStyled>
            <WrapperContent>
                <Row gutter={30}>
                    <Col span={16}>
                        <WrapperItem>

                            {displayListNews.map((listNew, index) => (
                                <NewItem listNew={listNew} />
                            ))}
                        </WrapperItem>

                    </Col>
                    <Col span={8}>
                        <PostCategory listTags={listTags} listPostCategory={listPostCategory} />
                    </Col>
                </Row>
            </WrapperContent>
            <WrapperPagination>
                <Pagination
                    showSizeChanger={false}
                    defaultCurrent={1}
                    total={listNews.length}
                    pageSize={pageSize}
                    onChange={handlePageChange}
                />
            </WrapperPagination>
        </Wrapper>
    )
}

export default News