import React from "react";
import img1 from '../../common/images/thuNgoimg1.png'
import img2 from '../../common/images/sp-line 1.png'
import { Card, Col, Row } from 'antd';
import { ImageContent, Title } from "./style/styleAbout";

const style = {
  background: '#fff',
  padding: '8px 0',
};

const OpenLetter = () => {
  return <>
    <Card
        title="Thư ngỏ"
        bordered={false}
        style={{
          width: '100%',
          paddingTop: '50px',
        }}
      >
        <ImageContent src={img1}></ImageContent>
        <Title>
          <span style={{fontSize: '16px', fontWeight: 600}}>Kính thưa quý khách hàng !</span>
          <img src={img2}></img>
           </Title>
        <Row 
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
           <Col className="gutter-row" span={8}>
              <div style={style}>
                <p>Công ty cấp nước Hải Phòng xin gửi đến Quý Khách hàng lời chúc sức khỏe và lời cảm ơn chân thành.</p><br></br>
<p>Hiện nay nguồn nước ngày một ô nhiễm, nhu cầu về nước sạch ngày càng trở nên cấp thiết hơn, Cuộc sống hiện đại thúc đẩy ngành công nghiệp nước uống tiện dụng phát triển mạnh mẽ, tuy nhiên bên cạnh số ít nhãn hàng chính thống quản lý nghiêm ngặt tiêu chuẩn chất lượng sản phẩm thì đa số các cơ sở sản xuất đều không đạt chất lượng, không đáp ứng được quy trình khắt khe về sản xuất nước tinh khiết.</p>
<br></br>
Khách hàng vẫn chịu thiệt thòi khi dùng sản phẩm mà không biết quy trình công nghệ xử lý ra sao? Chất lượng nguồn nước như thế nào? Thấu hiểu nhu cầu, băn khoăn của người tiêu dùng, Nước Uống Hải Phòng Water với đội ngũ chuyên viên kỹ thuật có nhiều năm kinh nghiệm trong ngành sản xuất nước uống, nước sinh hoạt cùng các nhân viên sản xuất đã được trải </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}><p>qua lớp tập huấn kiến thức an toàn vệ sinh thực phẩm, luôn tâm huyết mang tới khách hàng một sản phẩm chất lượng nhất, an toàn nhất. 
              </p><br></br>
<p>Bên cạnh đó, nước sinh hoạt của công ty cấp nước Hải Phòng cũng mạng lại cho khách hàng những dòng nước sạch và tinh khiết nhất, an toàn nhất.
</p><br></br>
Ngoài ra, để đảm bảo tất cả các khách hàng được sử dụng nguồn nước uống chất lượng cao của chúng tôi thì cty cũng đặc biệt chú trọng giá thành sản phẩm. Bằng cách giao sản phẩm trực tiếp từ nhà sản xuất đến người tiêu dùng đã cắt giảm được nhiều chi phí ở khâu trung gian, sản phẩm nước uống tinh khiết HaiPhong Water thực sự mang lại lợi ích kinh tế cho khách hàng nhờ mô hình bán hàng trực tiếp. Nước Uống HaiPhong Water được đóng trong bình 19L có vòi và không có vòi, đóng trong thùng 24 chai 500ml thích hợp với mọi lứa tuổi. Không những đảm bảo </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
              <p>tuyệt đối tiêu chuẩn an toàn vệ sinh thực phẩm mà còn ngọt hơn nhờ trung hòa PH đạt chuẩn. thực sự vượt trội về chất lượng. Nước uống tinh khiết HaiPhong Water đích thực là một sản phẩm hảo hạng mà quý khách đang quan tâm.
              </p><br></br>
Công ty cấp nước Hải Phòng với dòng sản phẩm Nước Uống Cao Cấp HaiPhong Water và nước uống sinh hoạt rất mong được đón nhận sự ủng hộ nhiệt tình của Quý Khách hàng tiêu dùng. Sự hài lòng của Quý vị là động lực cho chúng tôi. Một lần nữa, xin chân thành cảm ơn sự quan tâm và ủng hộ của Quý vị.
Trân trọng kính chào!
              </div>
              <img src={img2}></img>
              <h3 style={{marginTop: '10px'}}>CÔNG TY CỔ PHẦN CẤP NƯỚC HẢI PHÒNG</h3>
              <h1>CHỦ TỊCH HỘI ĐỒNG THÀNH VIÊN</h1>
            </Col>
        </Row>
      </Card>
  </>;
};

export default OpenLetter;
