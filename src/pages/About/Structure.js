import React from "react";
import { Divider, Typography } from 'antd';
import { ImageTree, TextAbout, Wrapper, WrapperAbout } from './style/styleStructure';
import img1 from '../../common/images/caplanhdaoimg.png'
const { Title } = Typography;

const Structure = () => {
  return (
    <Wrapper>
        <Title style={{fontWeight: 600, fontSize: '36px', color: '#154398'}}>Mô hình tổ chức ban lãnh đạo</Title>
        <WrapperAbout>
            <TextAbout>CÔNG TY CỔ PHẦN CẤP NƯỚC THÀNH PHỐ HẢI PHÒNG</TextAbout>
        </WrapperAbout>

        <ImageTree src={img1}></ImageTree>

        <Divider/>
    </Wrapper>
  )
};

export default Structure;
