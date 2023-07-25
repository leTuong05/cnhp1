import { Row, Col, Button } from "antd";
import {
    LinkOutlined,
    DownloadOutlined,
    ShoppingCartOutlined,
    SearchOutlined,
    PhoneFilled,
} from "@ant-design/icons";
import { LayoutStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/authReducer";

const TopBar = () => {
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <LayoutStyled>
            <Row
                gutter={[24]}
                justify="space-between"
                align="middle"
                style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "1200px",
                    height: "42px",
                    margin: "auto",
                }}
                className="custom-width"
            >
                <Col style={{ display: "flex", alignItems: "center" }}>
                    <PhoneFilled />
                    <span className="online-support" style={{ marginLeft: "5px" }}>
                        {" "}
                        Hỗ trợ trực tuyến 24/7: &nbsp;
                    </span>
                    <span className="hotline">3.5115.858</span>
                </Col>
                <Col>
                    <Row gutter={30} align="middle" className="layout-action">
                        <Col>
                            <Row className="icon-button">
                                <SearchOutlined onClick={() => navigate("/tim-kiem")} />
                            </Row>
                        </Col>
                        <Col>
                            <Row className="icon-button">
                                <ShoppingCartOutlined />
                            </Row>
                        </Col>
                        <Col>
                            <Row
                                justify="space-between"
                                align="middle"
                                className="online-support"
                            >
                                <LinkOutlined style={{ color: "black" }} />
                                <span>&nbsp;Liên kết website</span>
                            </Row>
                        </Col>
                        <Col>
                            <Row
                                justify="space-between"
                                align="middle"
                                className="online-support"
                            >
                                <DownloadOutlined style={{ color: "black" }} />
                                <span>&nbsp;Tải ứng dụng</span>
                            </Row>
                        </Col>
                        {user.isAuthenticated && (
                            <Col>
                                <Row className="online-support">
                                    <span style={{cursor: 'pointer'}} onClick={() => navigate('/tong-quan')}>Xin chào {user?.user?.Username}</span>
                                </Row>
                            </Col>
                        )}
                        {user.isAuthenticated ? (
                            <Col>
                                <Button
                                    className="button-red"
                                    onClick={() => dispatch(logout())}
                                >
                                    Đăng xuất
                                </Button>
                            </Col>
                        ) : (
                            <Col>
                                <Button
                                    className="button-red"
                                    onClick={() => navigate("/dang-nhap")}
                                >
                                    Đăng nhập
                                </Button>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </LayoutStyled>
    );
};

export default TopBar;