import React from "react";
import { Card, Col, Row } from 'antd';
import { TextContent, WapperContent, WapperImage } from "./style/styleAbout";

import img1 from '../../common/images/timeline.svg'
import img2 from '../../common/images/timeLineHistory2.svg'
import img3 from '../../common/images/timeLineHistory3.svg'
import img4 from '../../common/images/quatrinhhinhthanh.png'

const style = {
  background: '#fff',
  padding: '8px 0',
};

const History = () => {
  return <>
    <Card
        title="Quá trình hình thành"
        bordered={false}
        style={{
          width: '100%',
          paddingTop: '50px',
        }}
      >
      <WapperContent>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
        <Col className="gutter-row" span={6}>
          <div style={{fontSize: '16px'}}>Trải qua hơn một thế kỷ hình thành, xây dựng và phát triển, từ một nhà máy nước Lán Tháp nhỏ bé tại Uông Bí - Quảng Ninh, đến nay hệ thống cấp nước thành phố Hải Phòng đã trở thành một hệ thống cấp nước hoàn thiện và tin cậy đáp ứng hoàn toàn nhu cầu sử dụng nước của nhân dân và sự phát triển kinh tế - xã hội của thành phố.</div>
        </Col>
        <Col className="gutter-row" span={18}>
          <div>
            <img src={img4} style={{width: '100%'}}></img>
          </div>
        </Col>
      </Row>
      </WapperContent>
      <TextContent>Từ ngày tiếp quản hệ thống cấp nước đến nay hình thức tổ chức và tên gọi Công ty cũng có những thay đổi:</TextContent>
    
      {/* timeline horizontal */}
      <WapperImage>
        <img src={img1} style={{width: '100%'}}></img>
        <img src={img3} style={{margin: '120px 0 30px', width: '100%'}}></img>
      </WapperImage>
      </Card>
  </>;
};

export default History;
