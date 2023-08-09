import { Button } from "antd";
import TitleComponent from "../../../components/TitleComponent";

import CustomTable from "../../../components/Table";
import { WaterConfigStyle, WrapperButton } from "./styles";
import {
  DeleteWaterConfig,
  getWaterConfig,
} from "../../../services/apis/WaterConfig";
import { useEffect, useState } from "react";
import WaterConfigTable from "./components/WaterConfigTable";
import EditModal from "./components/Modal/EditModal";
const WaterConfig = () => {
  const [isEdit, setIsEdit] = useState();
  const [openEdit, setOpenEdit] = useState();
  const [loading, setLoading] = useState();
  const [dataTable1, setDataTable1] = useState();
  const [dataTable2, setDataTable2] = useState();

  const handleDelete = (id, type) => {
    setLoading(true);
    DeleteWaterConfig(id)
      .then((values) => {
        console.log(values);
      })
      .finally(() => {
        setLoading(false);
        type === 1 ? getList1() : getList2();
      });
  };

  const getList1 = () => {
    setLoading(true);
    getWaterConfig(1)
      .then((res) => {
        if (res?.isError) return;
        setDataTable1(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  const getList2 = () => {
    setLoading(true);
    getWaterConfig(2)
      .then((res) => {
        if (res?.isError) return;
        setDataTable2(res?.Object);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getList1();
    getList2();
  }, []);

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
      <WaterConfigTable
        type={1}
        handleDelete={(WaterPriceID) => {
          handleDelete(WaterPriceID, 1);
        }}
        data={dataTable1}
        setIsEdit={() => {
          setIsEdit(true);
        }}
        setOpenEdit={(record) => {
          setOpenEdit(record);
        }}
      />
      <div className="title-text">
        2. Giá bán nước sạch cho đối tượng là các cơ quan hành chính,đơn vị sự
        nghiệp,doanh nghiệp,tổ chức,cá nhân hoạt động sản xuất kinh doanh,dịch
        vụ trên dịa bàn thành phố Hà Nội
      </div>
      <WaterConfigTable
        type={2}
        handleDelete={(WaterPriceID) => {
          handleDelete(WaterPriceID, 2);
        }}
        data={dataTable2}
        setIsEdit={() => {
          setIsEdit(true);
        }}
        setOpenEdit={(record) => {
          setOpenEdit(record);
        }}
      />

      {!!openEdit && (
        <EditModal
          isEdit={isEdit}
          open={openEdit}
          onCancel={() => {
            setOpenEdit(false);
          }}
          getList={() => {
            getList1();
            getList2();
          }}
          data={openEdit}
        />
      )}
    </WaterConfigStyle>
  );
};
export default WaterConfig;
