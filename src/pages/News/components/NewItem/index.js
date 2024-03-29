import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Typography } from 'antd';
import { ImgStyled, Wrapper, WrapperNewInfo } from './styles';
import { TitleStyled, themeStyles } from '../GlobalStyles';

const { Title } = Typography;
const NewItem = ({listNew, index}) => {
    return (
        <Wrapper>
            <Link to={`/tin-tuc/chi-tiet/${listNew.title}`}>
                <ImgStyled key={listNew.id}  src={listNew.image} />
            </Link>
            <WrapperNewInfo>
                <Link to={`/tin-tuc/chi-tiet/${listNew.Title}`}>
                    <TitleStyled color={themeStyles.mainColor} level={3}>{listNew.Title}</TitleStyled>
                </Link>
                <p>{listNew.PublicationTime}</p>
                <p>{listNew.Summary}</p>
            </WrapperNewInfo>
        </Wrapper>
    )
}

export default NewItem