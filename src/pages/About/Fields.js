import React from "react";
import {ContentBusiness, IconText, TitleBusiness, TitleCustom, WrapperBusiness } from "./style/styleAbout";
import { Col, Divider, Row } from "antd";
import img1 from '../../common/images/caclinhvuckinhdoanh.svg'

const style = {
  background: '#717692',
  padding: '8px 0',
  borderRadius: '4px',
  height: '43px',
  display: 'flex'
};

const Fields = () => {
  return <WrapperBusiness>
    <img src={img1} style={{width: '100%'}}>
    </img>

    <TitleBusiness>
      <h1>Các ngành nghề kinh doanh</h1>
      <div style={{border: '2px solid #ccc'}}></div>
    </TitleBusiness>

    <ContentBusiness>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{margin: '30px 30px'}}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Khai thác, xử lý và cung cấp nước.</p>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Hoạt động tư vấn hệ thống quản lý chất lượng nước</p>
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{margin: '30px 30px'}}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Xây dựng công trình cấp, thoát nước.</p>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Quản lý các công trình cấp nước nội ngoại thành thành phố Hải Phòng</p>
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{margin: '30px 30px'}}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Sản xuất đồ uống không cồn, nước khoáng (sản xuất nước tinh lọc)</p>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Tư vấn đấu thầu xây lắp, cung ứng vật tư, thiết bị, công trình cấp thoát nước</p>
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{margin: '30px 30px'}}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Lắp đặt hệ thống cấp, thoát nước</p>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Hướng dẫn quy trình vận hành, bảo dưỡng thiết bị ngành nước.</p>
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{margin: '30px 30px'}}
      >
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Dịch vụ lập quy hoạch, dự án đầu tư, thẩm tra, thẩm định dự án cấp nước</p>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div style={style}>
            <IconText/>
            <p>Xây dựng đường dây và trạm biến áp không giới hạn quy mô cấp nước.</p>
          </div>
        </Col>
      </Row>
    </ContentBusiness>
  </WrapperBusiness>
};

export default Fields;
