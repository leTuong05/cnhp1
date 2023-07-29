import { Button } from "antd";
import TitleComponent from "../../../components/TitleComponent";

import CustomTable from "../../../components/Table";
import { WaterConfigStyle, WrapperButton } from "./styles";
import { getWaterConfig } from "../../../services/apis/WaterConfig";
import { useState } from "react";
import WaterConfigTable from "./components/WaterConfigTable";
import EditModal from "./components/Modal/EditModal";
const WaterConfig = () => {
  const [isEdit, setIsEdit] = useState();
  const [openEdit, setOpenEdit] = useState();

  return (
    <WaterConfigStyle>
      <TitleComponent title={"Đơn giá - định mức"}>
        <WrapperButton>
          <Button
            onClick={() => {
              setIsEdit(false);
              setOpenEdit(true);
            }}
          >
            Thêm
          </Button>
        </WrapperButton>
      </TitleComponent>
      <div className="title-text">
        1. Giá bán nước sạch cho đối tượng là hộ gia đình sử dụng vào mục đích
        sinh hoạt
      </div>
      <WaterConfigTable type={1} />
      <div className="title-text">
        2. Giá bán nước sạch cho đối tượng là các cơ quan hành chính,đơn vị sự
        nghiệp,doanh nghiệp,tổ chức,cá nhân hoạt động sản xuất kinh doanh,dịch
        vụ trên dịa bàn thành phố Hà Nội
      </div>
      <WaterConfigTable type={2} />

      {!!openEdit && (
        <EditModal
          isEdit={isEdit}
          open={openEdit}
          onCancel={() => {
            setOpenEdit(false);
          }}
        />
      )}
    </WaterConfigStyle>
  );
};
export default WaterConfig;
