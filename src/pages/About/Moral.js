import React from "react";
import { Content, Title, TitleText, ValueTile, WapperContent, WrapperValue } from './style/styleMessage'
import { Divider, Col, Row } from 'antd'

import img1 from '../../common/images/chuamucdaoduc1.png';
import img2 from '../../common/images/chuamucdaoduc2x.png';
import img3 from '../../common/images/chuamucdaoduc3x.png';

const Moral = () => {
  return (
    <WapperContent>
        <Title>Chuẩn mực đạo đức</Title>
        <Divider />

        <Content>
            <Row>
                <Col span={12}>
                    <div>
                        <WrapperValue> 
                            <ValueTile>1</ValueTile>
                            <TitleText>Cấp nước Hải Phòng hoạt động theo hiến pháp và pháp luật</TitleText>
                        </WrapperValue>
                        <span>Cấp nước Hải Phòng hoạt động trên cơ sở tuân thủ các quy định của pháp luật. Xây dựng và thực hiện các quy chế quản lý nội bộ đảm bảo tính đúng đắn, trung thực, khách quan, công bằng, dân chủ và bình đẳng giới.</span>
                    </div>
                </Col>

                <Col span={12}>
                    <img src={img1}></img>
                </Col>
            </Row>
        </Content>

        <Divider />

        <Content>
            <Row>
                <Col span={12}>
                    <img src={img2}></img>
                </Col>
                <Col span={12}>
                    <div>
                        <WrapperValue> 
                            <ValueTile>2</ValueTile>
                            <TitleText>Mọi hoạt động của công ty đều hướng tới con người và xã hội</TitleText>
                        </WrapperValue>
                        <span>Trong mọi hoạt động của Cấp nước Hải Phòng, con người là trung tâm, là tài sản quý giá nhất. Phục vụ lợi ích của cộng đồng, của xã hội là mục tiêu luôn được đặt lên hàng đầu trong hoạt động sản xuất kinh doanh.</span>
                    </div>
                </Col>
            </Row>
        </Content>

        <Divider />

        <Content>
            <Row>
                <Col span={12}>
                    <div>
                        <WrapperValue> 
                            <ValueTile>3</ValueTile>
                            <TitleText>Luôn nêu cao ý thức trách nhiệm, tinh thần tận tâm với công việc, tận tụy với khách hàng, công khai minh bạch trong mọi hoạt động</TitleText>
                        </WrapperValue>
                        <span>“Chuyên nghiệp - Văn minh - Hiệu quả” là khẩu hiệu hành động của mỗi thành viên Cấp nước Hải Phòng.</span>
                    </div>
                </Col>

                <Col span={12}>
                    <img src={img3}></img>
                </Col>
            </Row>
        </Content>

        <Divider />
            
        {/* <Content>
            <Row>
                <Col span={12}>
                    <img src={img4}></img>
                </Col>

                <Col span={12}>
                    <div>
                        <WrapperValue> 
                            <ValueTile>4</ValueTile>
                            <TitleText>Cấp nước Hải Phòng hoạt động theo hiến pháp và pháp luật</TitleText>
                        </WrapperValue>
                    </div>
                </Col>

            </Row>
        </Content>

         <Divider />

        <Content>
                <Col span={12}>
                    <div>
                        <WrapperValue> 
                            <ValueTile>5</ValueTile>
                            <TitleText>Cấp nước Hải Phòng phấn đấu xứng đáng với niềm tin của xã hội và của đất nước</TitleText>
                        </WrapperValue>
                    </div>
                </Col>

                <Col span={12}>
                    <img src={img5}></img>
                </Col>

            <Divider />
        </Content> */}
        
    </WapperContent>
  )
};

export default Moral;
