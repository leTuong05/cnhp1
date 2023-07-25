import { Card, Image, Row, Typography } from 'antd';
import React from 'react'
import { useNavigate } from "react-router-dom";

import hoaDonDienTu from "../../common/images/imageHome_page/hoa-don-dien-tu.png";
import { Wapper } from './style';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Service = () => {
  
  const navigate = useNavigate();

  return (
      <Wapper>
          <Card
            style={{
              height: 218,
              width: 244,
              cursor: 'pointer',
            }}
            onClick={() => navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")}
          >
            <Row>
              <Image preview={false} src={hoaDonDienTu} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Hóa đơn điện tử
              </Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: 'pointer',
            }}
            onClick={() => navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")}
          >
            <Row>
              <Image preview={false} src={hoaDonDienTu} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Hóa đơn điện tử
              </Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: 'pointer',
            }}
            onClick={() => navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")}
          >
            <Row>
              <Image preview={false} src={hoaDonDienTu} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Hóa đơn điện tử
              </Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: 'pointer',
            }}
            onClick={() => navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")}
          >
            <Row>
              <Image preview={false} src={hoaDonDienTu} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Hóa đơn điện tử
              </Typography.Text>
            </Row>
          </Card>
          <Card
            style={{
              height: 218,
              width: 244,
              cursor: 'pointer',
            }}
            onClick={() => navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")}
          >
            <Row>
              <Image preview={false} src={hoaDonDienTu} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Hóa đơn điện tử
              </Typography.Text>
            </Row>
          </Card>
          <Card
            style={{
              height: 218,
              width: 244,
              cursor: 'pointer',
            }}
            onClick={() => navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")}
          >
            <Row>
              <Image preview={false} src={hoaDonDienTu} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Hóa đơn điện tử
              </Typography.Text>
            </Row>
          </Card>
          
      </Wapper>
    
  )
}

export default Service