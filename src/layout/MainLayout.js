import { Image, Layout, Menu, Divider, Row, Col } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ContentLayout from "./ContentLayout";
import logo from "../common/images/logo-cnhp.png";
import TopBar from "./TopBar";
import FooterContent from "./FooterContent";
import ContentFullWidth from "./ContentFullWidth";
import { LayoutStyled } from "./styled";
import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAllCategoryPost } from "../services/apis/postsCategoryy";
import TitleComponent from "../components/TitleComponent";

const { Header, Content, Footer } = Layout;

function MainLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [newsCategories, setNewsCategories] = useState([])

    useEffect(() => {
        const getAll = async () => {
            const res = await getAllCategoryPost()

            await res.Object.map(item => {
                if (item.CategoryPostName === "Tin tức") {
                    setNewsCategories(item)
                }
            })
        }
        getAll()
    }, [])

    return (
        <LayoutStyled>
            <Layout
                style={{
                    background: "white",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                }}
            >
                <TopBar />
                <Divider style={{ margin: 0 }} />
                <Header
                    className="custom-width"
                    style={{
                        background: "white",
                        marginBottom: "10px",
                        padding: "5px 20px",
                        width: "1200px",
                        margin: "auto",
                    }}
                >
                    <Row
                        style={{ paddingBottom: "15px" }}
                        justify="space-between"
                        align="middle"
                    >
                        <Col>
                            <Link to="/">
                                <Row align="middle">
                                    <Image src={logo} preview={false} width={64} />
                                    <span className="name-branch">
                                        CÔNG TY CỔ PHẦN <br />
                                        CẤP NƯỚC HẢI PHÒNG
                                    </span>
                                </Row>
                            </Link>
                        </Col>
                        <Col>
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={["1"]}
                                disabledOverflow
                            >
                                <Menu.SubMenu
                                    title={
                                        <Link to="/">
                                            <HomeFilled style={{ color: "#ED1117" }} />
                                        </Link>
                                    }
                                ></Menu.SubMenu>
                                <Menu.SubMenu title="Giới thiệu">
                                    <Menu.SubMenu title="Về cấp nước Hải Phòng">
                                        <Menu.Item
                                            onClick={() => {
                                                navigate("/gioi-thieu/ve-cap-nuoc-hai-phong/thu-ngo");
                                            }}
                                        >
                                            Thư ngỏ
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/gioi-thieu/ve-cap-nuoc-hai-phong/lich-su-phat-trien"
                                                );
                                            }}
                                        >
                                            Lịch sử phát triển
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/gioi-thieu/ve-cap-nuoc-hai-phong/cac-linh-vuc-kinh-doanh"
                                                );
                                            }}
                                        >
                                            Các lĩnh vực kinh doanh
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.SubMenu title="Thông điệp lãnh đạo">
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/gioi-thieu/thong-diep-lanh-dao/gia-tri-cot-loi"
                                                );
                                            }}
                                        >
                                            Giá trị cốt lõi
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/gioi-thieu/thong-diep-lanh-dao/chuan-muc-dao-duc"
                                                );
                                            }}
                                        >
                                            Chuẩn mực đạo đức
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/gioi-thieu/thong-diep-lanh-dao/thuc-thi-van-hoa"
                                                );
                                            }}
                                        >
                                            Thực thi văn hóa
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/gioi-thieu/so-do-to-chuc");
                                        }}
                                    >
                                        Sơ đồ tổ chức
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu title="Sản phẩm và dịch vụ">
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/san-pham-va-dich-vu/san-pham");
                                        }}
                                    >
                                        Sản phẩm
                                    </Menu.Item>

                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/san-pham-va-dich-vu/dich-vu");
                                        }}
                                    >
                                        Dịch vụ
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu title="Chăm sóc khách hàng">
                                    <Menu.Item
                                        onClick={() => {
                                            navigate(
                                                "/cham-soc-khach-hang/cac-thu-tuc-khach-hang-can-biet"
                                            );
                                        }}
                                    >
                                        Các thủ tục khách hàng cần biết
                                    </Menu.Item>
                                    <Menu.SubMenu title="Tra cứu thông tin">
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/cham-soc-khach-hang/tra-cuu-thong-tin/lich-tam-ngung-cap-nuoc"
                                                );
                                            }}
                                        >
                                            Lịch tạm ngưng cấp nước
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/cham-soc-khach-hang/tra-cuu-thong-tin/lich-ghi-chi-so-cong-to"
                                                );
                                            }}
                                        >
                                            Lịch ghi chỉ số công tơ
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/cham-soc-khach-hang/tra-cuu-thong-tin/tra-cuu-chi-so-cong-to"
                                                );
                                            }}
                                        >
                                            Tra cứu chỉ số công tơ
                                        </Menu.Item>
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(
                                                    "/cham-soc-khach-hang/tra-cuu-thong-tin/luong-nuoc-tieu-thu"
                                                );
                                            }}
                                        >
                                            Lượng nước tiêu thụ
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/cham-soc-khach-hang/cong-cu-tinh-hoa-don");
                                        }}
                                    >
                                        Công cụ tính hóa đơn
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/cham-soc-khach-hang/gia-nuoc-dinh-muc");
                                        }}
                                    >
                                        Giá nước - Định mức
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/cham-soc-khach-hang/chinh-sach-chung");
                                        }}
                                    >
                                        Chính sách chung
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/cham-soc-khach-hang/chinh-sach-bao-mat");
                                        }}
                                    >
                                        Chính sách bảo mật
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu title="Cổ đông">
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/co-dong/bao-cao-tai-chinh");
                                        }}
                                    >
                                        Báo cáo tài chính
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/co-dong/bao-cao-thuong-nien");
                                        }}
                                    >
                                        Báo cáo thường niên
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/co-dong/bao-cao-quan-tri");
                                        }}
                                    >
                                        Báo cáo quản trị
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/co-dong/thong-tin-co-dong");
                                        }}
                                    >
                                        Thông tin cổ đông
                                    </Menu.Item>
                                    <Menu.Item
                                        onClick={() => {
                                            navigate("/co-dong/dai-hoi-co-dong-thuong-nien");
                                        }}
                                    >
                                        Đại hội cổ đông thường niên
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu title="Tin tức">
                                    {newsCategories?.GetList?.map((item, index) => (
                                        <Menu.Item
                                            onClick={() => {
                                                navigate(`tin-tuc/postCategory=${item.CategoryPostID}`, { state: {categoryPostName: item.CategoryPostName } });
                                            }}
                                        >
                                            {item.CategoryPostName}
                                        </Menu.Item>
                                    ))}

                                </Menu.SubMenu>
                                <Menu.SubMenu
                                    title="Chất lượng nước"
                                    onTitleClick={() => navigate("/chat-luong-nuoc")}
                                ></Menu.SubMenu>
                                <Menu.SubMenu
                                    title="Liên hệ"
                                    onTitleClick={() => navigate("/lien-he")}
                                ></Menu.SubMenu>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Divider style={{ marginTop: "19px", marginBottom: 0 }} />
                <Content>
                    {location.pathname === "/" ||
                        location.pathname === "/dang-nhap"
                        || location.pathname.includes("/gioi-thieu/ve-cap-nuoc-hai-phong/cac-linh-vuc-kinh-doanh")
                        ? (
                            <ContentFullWidth />
                        ) : (
                            <ContentLayout />
                        )}
                </Content>
                <Divider style={{ margin: 0 }} />
                <Footer
                    className="footer"
                    style={{
                        background: "white",
                        margin: "auto",
                        paddingLeft: 0,
                        paddingRight: 0,
                        width: "1200px",
                    }}
                >
                    <FooterContent />
                </Footer>
            </Layout>
        </LayoutStyled>
    );
}

export default MainLayout;
