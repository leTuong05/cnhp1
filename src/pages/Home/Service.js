import React from "react";
import { useNavigate } from "react-router-dom";

// import thanhtoantructuyen from "../../common/images/imageHome_page/thanhtoantructuyen";
import hoaDonDienTu from "../../common/images/imageHome_page/hoa-don-dien-tu.png";
import dangkithaydoithongtin from "../../common/images/imageHome_page/dangkithaydoithongtin.png";
import lapdatmoi from "../../common/images/imageHome_page/lapdatmoi.png";
import suachua from "../../common/images/imageHome_page/suachua.png";
import lapdatdichuyenmay from "../../common/images/imageHome_page/lapdatdichuyenmay.png";
import sangtenhopdong from "../../common/images/imageHome_page/sangten.png";
import caplaihopdong from "../../common/images/imageHome_page/caplaihopdong.png";
import { Wapper } from "./style";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel, Card, Row, Image, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Glider from "react-glider";
import "glider-js/glider.min.css";

const Service = () => {
  const navigate = useNavigate();

  return (
    <>
      <Wapper>
        <Glider draggable hasArrows slidesToShow={6} slidesToScroll={1}>
          <Card
            style={{
              height: 218,
              width: 244,
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
            }
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
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
            }
          >
            <Row>
              <Image preview={false} src={dangkithaydoithongtin} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Đăng kí thay đổi thông tin
              </Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
            }
          >
            <Row>
              <Image preview={false} src={lapdatdichuyenmay} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Lắp đặt di chuyển máy
              </Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
            }
          >
            <Row>
              <Image preview={false} src={sangtenhopdong} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Sap tên hợp đồng DVCN
              </Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
            }
          >
            <Row>
              <Image preview={false} src={lapdatmoi} />
            </Row>
            <Row>
              <Typography.Text className="text">Lắp đặt mới</Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
            }
          >
            <Row>
              <Image preview={false} src={suachua} />
            </Row>
            <Row>
              <Typography.Text className="text">Sữa chữa</Typography.Text>
            </Row>
          </Card>

          <Card
            style={{
              height: 218,
              width: 244,
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
            }
          >
            <Row>
              <Image preview={false} src={caplaihopdong} />
            </Row>
            <Row>
              <Typography.Text className="text">
                Cấp lại hợp đồng DVCN
              </Typography.Text>
            </Row>
          </Card>
        </Glider>
      </Wapper>
    </>
  );
};

export default Service;
