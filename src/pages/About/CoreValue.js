import React from 'react'
import {WapperContent, Title, ValueTile, TitleText, TextDetail, WrapperValue} from './style/styleMessage';
import { Col, Divider, Row } from 'antd';
import img1 from '../../common/images/giatricoitloiimg1.png'
import img2 from '../../common/images/giatricoitloiimg2.png'
import img3 from '../../common/images/giatricoitloiimg3.png'

const CoreValue = () => {
  return (
    <>
        <WapperContent>
            <Title>Tầm nhìn</Title>
            <Divider />
            <Row>
                <Col span={10} order={1}>
                    <div>Tiếp tục là một trong những đơn vị cấp nước hàng đầu toàn quốc, tương đương với tầm khu vực.</div>
                    <img src={img1} style={{margin: '32px 0 0 0', textAlign: 'center'}}>
                    </img>
                </Col>
                <Col span={14} order={2}>
                    <div style={{position: 'relative'}}>
                        <img src={img2} style={{width: '100%', height: '318px'}}></img>
                        <div style={{position: 'absolute', top: '140px', left: '40px'}}>
                            <h1 style={{fontSize: '32px', fontWeight: '600', color: '#fff', maxWidth: '540px'}}>“Trở thành doanh nghiệp phân phối nước thuộc nhóm dẫn đầu cả nước”</h1>
                            <div style={{fontWeight: '600px', fontSize: '13px', color: "#fff", marginTop: '20px'}}>
                                <Row>
                                    <Col span={10}>TẦM NHÌN CẤP NƯỚC HẢI PHÒNG</Col>
                                    <Col span={8} style={{bottom: '4px'}}>
                                        <hr style={{display: 'inline-block', width: '80%', margin: '4px 0 0 10px', borderLeft: '2px solid #fff' }}>
                                        </hr>
                                    </Col>
                                    <Col span={6}></Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Title>Sứ mệnh</Title>
            
            <Divider />
            <TextDetail>
                Đảm bảo đáp ứng đủ nhu cầu nước phục vụ sản xuất, phát triển kinh tế và sinh hoạt của người dân. Vận hành cung ứng nước sạch, ổn định, đặc biệt là cung cấp nước an toàn tuyệt đối cho mọi người dân. Kinh doanh có hiệu quả, với chất lượng và dịch vụ tốt nhất.
                <div style={{position: 'absolute', top: '230px', left: '60px'}}>
                    <h1 style={{fontWeight: 600, fontSize: '48px', color: '#154398'}}>
                        Cấp nước Hải Phòng
                    </h1>

                    <h1 style={{fontWeight: 600, fontSize: '32px', color: '##154398'}}>
                        Chuyên nghiệp - Văn minh - Hiệu quả
                    </h1>
                </div>
            </TextDetail>

            <Title>Khẩu hiệu</Title>
            <Divider />
            <div>
                <img src={img3}></img>
            </div>

            <Title>Giá trị cốt lõi</Title>
            <Divider />

            <Row gutter={[16, 24]}>
                <Col className="gutter-row" span={8}>
                        <div>
                            <WrapperValue> 
                                <ValueTile>1</ValueTile>
                                <TitleText>Chuyên</TitleText>
                            </WrapperValue>
                            <span>Chuyên là chuyên nghiệp, biểu hiện ở tác phong làm việc, thái độ tập trung, chuyên môn thành thạo, tuân thủ chuẩn mực nghề nghiệp.</span>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <div>
                            <WrapperValue> 
                                <ValueTile>2</ValueTile>
                                <TitleText>Tâm</TitleText>
                            </WrapperValue>
                            <span>Hợp là sự hợp lực, hợp tác, hòa hợp, biết gắn kết, liên kết tạo nên tinh thần đồng đội và sức mạnh tập thể.</span>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <div>
                            <WrapperValue> 
                                <ValueTile>3</ValueTile>
                                <TitleText>Hợp</TitleText>
                            </WrapperValue>
                            <span>Hợp là sự hợp lực, hợp tác, hòa hợp, biết gắn kết, liên kết tạo nên tinh thần đồng đội và sức mạnh tập thể.</span>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <div>
                            <WrapperValue> 
                                <ValueTile>4</ValueTile>
                                <TitleText>Chất</TitleText>
                            </WrapperValue>
                            <span>Chất là chất lượng, biểu hiện bằng sự hài lòng của các bên liên quan khi giao dịch, sử dụng sản phẩm, dịch vụ của Cấp nước Hải Phòng.</span>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <div>
                            <WrapperValue> 
                                <ValueTile>5</ValueTile>
                                <TitleText>Mới</TitleText>
                            </WrapperValue>
                            <span>Mới là sự đổi mới, là tư duy sáng tạo, thúc đẩy sáng kiến trên cơ sở mang lại giá trị, lợi ích cho khách hàng và cộng đồng.</span>
                        </div>
                </Col>
                <Col className="gutter-row" span={8}>
                        <div>
                            <WrapperValue> 
                                <ValueTile>6</ValueTile>
                                <TitleText>Bền</TitleText>
                            </WrapperValue>
                            <span>Bền là tính bền vững, luôn tiếp cận các vấn đề và hành động vì mục tiêu lâu dài, sẵn sàng hy sinh lợi ích trước mắt vì những giá trị bền lâu.</span>
                        </div>
                </Col>
            </Row>
        </WapperContent>
    </>
  )
};

export default CoreValue;
