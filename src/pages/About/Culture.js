import React from "react";
import { Col, Divider, Row } from "antd";
import { Image, ImgageText, TextCm, TextNote, Title, TitleText, TitleText1, TitleText2, TitleTextRed, ValueTile, ValueTile1, ValueTile2, WapperContent, WrapperValue } from "./style/styleMessage";
import { CaretRightOutlined, CheckOutlined } from "@ant-design/icons";

import img1 from '../../common/images/thucthuvanhoa2.png'
import img2 from '../../common/images/thucthuvanhoa1.png'
import img3 from '../../common/images/thucthuvanhoa3.png'
import img4 from '../../common/images/thucthuvanhoa4.png'

import icon1 from '../../common/images/thucthuvanhoaIcon1.png'
import icon2 from '../../common/images/thucthuvanhoaIcon2.png'
import icon3 from '../../common/images/thucthuvanhoaicon3.png'


const Culture = () => {
  return (
    <WapperContent>
        <Title>Chuẩn mực đạo đức</Title>
        <Divider />
        <img src={img1}></img>
        <Row>
            <Col span={8}>
                <WrapperValue>
                    <ImgageText>
                        <Image src={icon1}></Image>
                    </ImgageText>
                    <TextNote>Thực hiện nghiêm chỉnh, đầy đủ các nội dung đã cam kết trong Hợp đồng ký với khách hàng.</TextNote>
                </WrapperValue>
            </Col>

            <Col span={8}>
                <WrapperValue>
                    <ImgageText>
                        <Image src={icon2}></Image>
                    </ImgageText>
                    <TextNote>Thực hiện nghiêm chỉnh, đầy đủ các nội dung đã cam kết trong Hợp đồng ký với khách hàng.</TextNote>
                </WrapperValue>
            </Col>

            <Col span={8}>
                <WrapperValue>
                    <ImgageText>
                        <Image src={icon3}></Image>
                    </ImgageText>
                    <TextNote>Thực hiện nghiêm chỉnh, đầy đủ các nội dung đã cam kết trong Hợp đồng ký với khách hàng.</TextNote>
                </WrapperValue>
            </Col>
        </Row>

        <Divider dashed />

        <Row>
            <Col span={12}>
                <img src={img3}></img>
            </Col>
            <Col span={12}>
                <WrapperValue> 
                    <ValueTile1>2</ValueTile1>
                    <TitleText1>Cam kết người lao động</TitleText1>
                </WrapperValue>
                <div style={{color: 'rgb(21, 67, 152)', fontWeight: '700', fontSize: '36px'}}>
                “Người lao động là trung tâm trong hoạt động sản xuất kinh doanh của Cấp nước Hải Phòng”
                </div>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Đảm bảo ổn định công việc và đời sống của người lao động. Mọi người lao động đều được hưởng đầy đủ các quyền lợi theo quy định của pháp luật.</TitleText1>
                </WrapperValue>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Đảm bảo sự minh bạch, công bằng về các chế độ chính sách với người lao động, về công tác tuyển dụng và bổ nhiệm cán bộ.</TitleText1>
                </WrapperValue>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Tạo điều kiện thuận lợi cho người lao động được đào tạo, rèn luyện kiến thức, kỹ năng, nâng cao trình độ. </TitleText1>
                </WrapperValue>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Đảm bảo bí mật thông tin cá nhân, tôn trọng sự riêng tư của người lao động.</TitleText1>
                </WrapperValue>
                
            </Col>
        </Row>

        <Divider dashed />

        <img src={img1}></img>

        <Divider dashed />

        <Row>
            <Col span={12}>
                <TextCm>Cam kết với Thành phố Hà Nội</TextCm>
                <TitleText1>
                    <CheckOutlined style={{marginRight: '10px', color: '#00C590'}} />
                    Cấp nước Hải Phòng cam kết đảm bảo đáp ứng đủ nhu cầu điện phục vụ sản xuất, phát triển kinh tế xã hội và sinh hoạt của nhân dân Thủ đô.</TitleText1>
                <TitleText1>Thực hiện đúng quy hoạch, định hướng phát triển của Thủ đô Hà Nội, đảm bảo mỹ quan môi trường đô thị. Kinh doanh có hiệu quả, với chất lượng và dịch vụ tốt nhất.</TitleText1>

                <TitleText1>
                    <CheckOutlined style={{marginRight: '10px', color: '#00C590'}} />
                    Thực hiện đúng quy hoạch, định hướng phát triển của Thủ đô Hà Nội, đảm bảo mỹ quan môi trường đô thị. Kinh doanh có hiệu quả, với chất lượng và dịch vụ tốt nhất.</TitleText1>
            </Col>
            <Col span={12}>
                <TextCm>
                    Cam kết với cấp nước Hải Phòng</TextCm>
                <TitleText1>
                    <CheckOutlined style={{marginRight: '10px', color: '#00C590'}}/>
                    Cấp nước Hải Phòng cam kết luôn tuân thủ nghiêm các quy định, hướng dẫn và chỉ đạo của Cấp nước Hải Phòng.</TitleText1>
                <TitleText1>
                    <CheckOutlined style={{marginRight: '10px', color: '#00C590'}}/>
                    Tập thể CBCNV Cấp nước Hải Phòng đoàn kết, nhất trí, sáng tạo vượt qua mọi khó khăn phấn đấu hoàn thành tốt chỉ tiêu kinh tế, kỹ thuật và các nhiệm vụ khác do Cấp nước Hải Phòng giao.</TitleText1>
            </Col>
        </Row>

        <Divider dashed />

        <Row>
            <Col span={12}>
                <img src={img4}></img>
            </Col>
            <Col span={12}>
            <WrapperValue> 
                    <ValueTile2>4</ValueTile2>
                    <TitleTextRed>Cam kết với xã hội</TitleTextRed>
            </WrapperValue>

            <div style={{color: 'rgb(21, 67, 152)', fontWeight: '700', fontSize: '36px'}}>
                “Vì sự phát triển chung"
            </div>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Đảm bảo ổn định công việc và đời sống của người lao động. Mọi người lao động đều được hưởng đầy đủ các quyền lợi theo quy định của pháp luật.</TitleText1>
                </WrapperValue>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Đảm bảo sự minh bạch, công bằng về các chế độ chính sách với người lao động, về công tác tuyển dụng và bổ nhiệm cán bộ.</TitleText1>
                </WrapperValue>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Tạo điều kiện thuận lợi cho người lao động được đào tạo, rèn luyện kiến thức, kỹ năng, nâng cao trình độ. </TitleText1>
                </WrapperValue>
                <WrapperValue> 
                    <ValueTile1>
                        <CaretRightOutlined />
                    </ValueTile1>
                    <TitleText1>Đảm bảo bí mật thông tin cá nhân, tôn trọng sự riêng tư của người lao động.</TitleText1>
                </WrapperValue>
            </Col>
        </Row>

        <Divider dashed />

    </WapperContent>
)
};

export default Culture;
