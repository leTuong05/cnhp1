import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "../pages/Auth/Login";
import MainLayout from "../layout/MainLayout";
import ContentFullWidth from "../layout/ContentFullWidth";
import Home from "../pages/Home/Home";
import OpenLetter from "../pages/About/OpenLetter";
import History from "../pages/About/History";
import Fields from "../pages/About/Fields";
import CoreValue from "../pages/About/CoreValue";
import Moral from "../pages/About/Moral";
import Culture from "../pages/About/Culture";
import Structure from "../pages/About/Structure";
import ContentLayout from "../layout/ContentLayout";
import Product from "../pages/Services&Products/Product";
import Services from "../pages/Services&Products/Services";
import Installation from "../pages/Services&Products/Installation";
import WaterUsageSearch from "../pages/Services&Products/WaterUsageSearch";
import Bill from "../pages/Services&Products/Bill";
import OnlinePayment from "../pages/Services&Products/OnlinePayment";
import Repair from "../pages/Services&Products/Repair";
import ChangeNameContract from "../pages/Services&Products/ChangeNameContract";
import RenewContract from "../pages/Services&Products/RenewContract";
import ChangeInfo from "../pages/Services&Products/ChangeInfo";
import Procedure from "../pages/CustomerService/Procedure";
import SuspendSchedule from "../pages/CustomerService/SuspendSchedule";
import MeterSchedule from "../pages/CustomerService/MeterSchedule";
import MeterSearch from "../pages/CustomerService/MeterSearch";
import Consumption from "../pages/CustomerService/Consumption";
import InvoiceTool from "../pages/CustomerService/InvoiceTool";
import WaterPrice from "../pages/CustomerService/WaterPrice";
import GeneralPolicy from "../pages/CustomerService/GeneralPolicy";
import SecurityPolicy from "../pages/CustomerService/SecurityPolicy";
import FinancialReport from "../pages/Shareholder/FinancialReport";
import AnnualReport from "../pages/Shareholder/AnnualReport";
import ManagementReport from "../pages/Shareholder/ManagementReport";
import ShareholderInfo from "../pages/Shareholder/ShareholderInfo";
import AnnualMeeting from "../pages/Shareholder/AnnualMeeting";
import ProductionActivity from "../pages/News/ProductionActivity";
import Union from "../pages/News/Union";
import RelatedNews from "../pages/News/RelatedNews";
import Quality from "../pages/Quality";
import Contact from "../pages/Contact/Contact";
import Search from "../pages/Search/Search";
import { useSelector } from "react-redux";

import DetailNews from "../pages/News/components/DetailNews";
import ProductDettail from "../pages/Services&Products/Product/ProductDetail";
import Genaral from "../pages/Administrator/Genaral/Genaral";

// route Admin
import LayoutAdmin from "../layout/Admin/LayoutAdmin";
// import TongQuann from "../pages/Admin/TongQuann";

import { Fragment } from "react";
// import HoaDonNuoc from '../pages/Admin/HoaDonNuoc';
// import DonHang from '../pages/Admin/DonHang';
import WaterBill from "../pages/Administrator/WaterBill";
// import Order from '../pages/Administrator/Order';
import TongQuan from "../pages/Administrator/Genaral/Genaral";
import DanhMucThe from "../pages/Administrator/ManagePosts/CategoryCard";
import SanPham from "../pages/Administrator/Products/Products";
import ToQuanLy from "../pages/Administrator/Units/Units";
import Department from "../pages/Administrator/ManageSystem/Department";
import UserDirectory from "../pages/Administrator/ManageSystem/UserDirectory";
import DanhMucBaiViet from "../pages/Administrator/ManagePosts/ManagePosts";
import DangBai from "../pages/Administrator/ManagePosts/Posts/Posts";
import ListUser from "../pages/Administrator/ManageSystem/ListUser";
import EnterPrise from "../pages/Administrator/ManageSystem/EnterPrise";

import Order from "../pages/Administrator/Order";
import InstalltionService from "../pages/Administrator/Services/InstalltionService";
import ContractNameService from "../pages/Administrator/Services/ContractNameService";
import ContractRenewalService from "../pages/Administrator/Services/ContractRenewalService";
import PaymentService from "../pages/Administrator/Services/PaymentService";
import RepairService from "../pages/Administrator/Services/RepairService";
import EditInfoService from "../pages/Administrator/Services/EditInfoService";
import SearchInfoService from "../pages/Administrator/Services/SearchInfoService";
import WaterConfig from "../pages/Administrator/WaterConfig";

export const routeAdmin = [
  { path: "/tong-quan", component: TongQuan, layout: true },
  { path: "/hoa-don-nuoc", component: WaterBill, layout: true },
  { path: "/don-hang", component: Order, layout: true },
  { path: "/dv-lap-dat-may-nuoc", component: InstalltionService, layout: true },
  {
    path: "/dv-sang-ten-hop-dong",
    component: ContractNameService,
    layout: true,
  },
  {
    path: "/dv-cap-lai-hop-dong",
    component: ContractRenewalService,
    layout: true,
  },
  { path: "/dv-thanh-toan-tien-nuoc", component: PaymentService, layout: true },
  { path: "/dv-sua-chua", component: RepairService, layout: true },
  {
    path: "/dv-thong-tin-khach-hang",
    component: EditInfoService,
    layout: true,
  },
  { path: "/dv-tra-cuu", component: SearchInfoService, layout: true },
  { path: "/don-gia-dinh-muc", component: WaterConfig, layout: true },

  // SẢn phẩm
  { path: "/kho-hang", component: SanPham, layout: true },

  // Quản trị hệ thống
  { path: "/phong-ban-chuc-vu", component: Department, layout: true },
  { path: "/danh-ba-nguoi-dung", component: UserDirectory, layout: true },
  { path: "/phan-quyen", component: ListUser, layout: true },
  { path: "/danh-ba-doanh-nghiep", component: EnterPrise, layout: true },

  { path: "/to-quan-ly", component: ToQuanLy, layout: true },
  { path: "/danh-muc-the", component: DanhMucThe, layout: true },

  { path: "/dang-bai", component: DangBai, layout: true },

  { path: "/danh-sach-bai-viet", component: DanhMucBaiViet, layout: true },
  { path: "/to-quan-ly", component: ToQuanLy, layout: true },
  { path: "/danh-muc-the", component: DanhMucThe, layout: true },
  { path: "/kho-hang", component: SanPham, layout: true },
];
// export const publicRoutes = [
//   { path: '/tong-quan', component: Home },

//   // { path: '/upload', component: Upload, layout: HeaderOnly },
// ]
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="dang-nhap" element={<ContentFullWidth />}>
            <Route path="" element={<Login />} />
          </Route>
          <Route element={<Protected />}></Route>
          <Route path="" element={<ContentFullWidth />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="gioi-thieu" element={<ContentFullWidth />}>
            <Route
              path="ve-cap-nuoc-hai-phong/thu-ngo"
              element={<OpenLetter />}
            />
            <Route
              path="ve-cap-nuoc-hai-phong/lich-su-phat-trien"
              element={<History />}
            />
            <Route
              path="ve-cap-nuoc-hai-phong/cac-linh-vuc-kinh-doanh"
              element={<Fields />}
            />
            <Route
              path="thong-diep-lanh-dao/gia-tri-cot-loi"
              element={<CoreValue />}
            />
            <Route
              path="thong-diep-lanh-dao/chuan-muc-dao-duc"
              element={<Moral />}
            />
            <Route
              path="thong-diep-lanh-dao/thuc-thi-van-hoa"
              element={<Culture />}
            />
            <Route path="so-do-to-chuc" element={<Structure />} />
          </Route>
          <Route path="san-pham-va-dich-vu" element={<ContentLayout />}>
            <Route path="san-pham" element={<Product />} />
            <Route path="san-pham/:id" element={<ProductDettail />} />
            <Route path="dich-vu" element={<Services />} />
            <Route path="dich-vu/lap-dat-moi" element={<Installation />} />
            <Route
              path="dich-vu/sang-ten-hop-dong-dvcn"
              element={<ChangeNameContract />}
            />
            <Route
              path="dich-vu/cap-lai-hop-dong-dvcn"
              element={<RenewContract />}
            />
            <Route
              path="dich-vu/thanh-toan-truc-tuyen"
              element={<OnlinePayment />}
            />
            <Route path="dich-vu/sua-chua" element={<Repair />} />
            <Route
              path="dich-vu/dang-ky-thay-doi-TTKH"
              element={<ChangeInfo />}
            />
            <Route
              path="dich-vu/tra-cuu-su-dung-nuoc"
              element={<WaterUsageSearch />}
            />
            <Route path="dich-vu/hoa-don-dien-tu" element={<Bill />} />
          </Route>
          <Route path="cham-soc-khach-hang" element={<ContentLayout />}>
            <Route
              path="cac-thu-tuc-khach-hang-can-biet"
              element={<Procedure />}
            />
            <Route
              path="tra-cuu-thong-tin/lich-tam-ngung-cap-nuoc"
              element={<SuspendSchedule />}
            />
            <Route
              path="tra-cuu-thong-tin/lich-ghi-chi-so-cong-to"
              element={<MeterSchedule />}
            />
            <Route
              path="tra-cuu-thong-tin/tra-cuu-chi-so-cong-to"
              element={<MeterSearch />}
            />
            <Route
              path="tra-cuu-thong-tin/luong-nuoc-tieu-thu"
              element={<Consumption />}
            />
            <Route path="cong-cu-tinh-hoa-don" element={<InvoiceTool />} />
            <Route path="gia-nuoc-dinh-muc" element={<WaterPrice />} />
            <Route path="chinh-sach-chung" element={<GeneralPolicy />} />
            <Route path="chinh-sach-bao-mat" element={<SecurityPolicy />} />
          </Route>
          <Route path="co-dong" element={<ContentLayout />}>
            <Route path="bao-cao-tai-chinh" element={<FinancialReport />} />
            <Route path="bao-cao-thuong-nien" element={<AnnualReport />} />
            <Route path="bao-cao-quan-tri" element={<ManagementReport />} />
            <Route path="thong-tin-co-dong" element={<ShareholderInfo />} />
            <Route
              path="dai-hoi-co-dong-thuong-nien"
              element={<AnnualMeeting />}
            />
          </Route>{" "}
          <Route path="tin-tuc" element={<ContentLayout />}>
            <Route path="chi-tiet/:title" element={<DetailNews />} />
            <Route
              path="hoat-dong-san-xuat-kinh-doanh"
              element={<ProductionActivity />}
            />
            <Route path="dang-va-doan-the" element={<Union />} />
            <Route path="tin-tuc-lien-quan" element={<RelatedNews />} />
          </Route>
          <Route path="chat-luong-nuoc" element={<ContentLayout />}>
            <Route path="" element={<Quality />} />
          </Route>
          <Route path="lien-he" element={<ContentLayout />}>
            <Route path="" element={<Contact />} />
          </Route>
          <Route path="tim-kiem" element={<ContentLayout />}>
            <Route path="" element={<Search />} />
          </Route>
          <Route path="*" element={<div>Trang khong ton tai</div>} />
        </Route>

        {routeAdmin.map((route) => {
          const Page = route.component;
          let Layout;
          if (route.layout) {
            Layout = LayoutAdmin;
          } else {
            Layout = Fragment;
          }

          return (
            <Route
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

const Protected = ({ redirectPath = "/dang-nhap" }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
};
