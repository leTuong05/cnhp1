import React, { useEffect, useState } from "react";
import { Wrapper, WrapperButton, WrapperSearch } from "./styles";
import { Button, Col, Input, Row, Select } from "antd";
import TitleComponent from "../../../../components/TitleComponent";
import ListAdress from "../components/ListAdress";
import ListPhonebook from "../components/ListPhonebook";
import ModalInsertGuest from "../components/ModalInsertGuest";
import { getListPhonebookGuest } from "../../../../services/apis/user";
const { Search } = Input;
const PhonebookGuest = () => {
  const [showModalInsert, setShowModalInsert] = useState(false);
  const [listPhonebookGuest, setListPhoneBookGuest] = useState([]);
  const [load, setLoad] = useState(false);
  const handleInsertGuestToList = (isLoad) => {
    setLoad(isLoad);
  };
  useEffect(() => {
    const getPhonebook = async () => {
      const response = await getListPhonebookGuest({
        PageSize: 50,
        CurrentPage: 1,
        TextSearch: "",
        ProvinceID: 0,
        DistrictID: 0,
        WardID: 0,
      });
      setListPhoneBookGuest(response.Object);
      setLoad(false);
    };
    getPhonebook();
  }, [load]);
  const handleHide = () => {
    setShowModalInsert(false);
  };
  const handleOpen = () => {
    setShowModalInsert(true);
  };
  return (
    <Wrapper>
      <WrapperSearch>
        <Row gutter={20} style={{ marginTop: "20px" }}>
          <Col span={16}>
            <Search
              placeholder="Nhập tên, mã, SĐT khách hàng"
              style={{
                width: "100%",
              }}
            />
          </Col>
          <Col span={8}>
            <Select
              defaultValue="Tất cả"
              style={{
                width: "100%",
              }}
              options={[
                {
                  value: 0,
                  label: "Tất cả",
                },
                {
                  value: 1,
                  label: "Tư nhân",
                },
                {
                  value: 2,
                  label: "Cơ quan",
                },
                {
                  value: 3,
                  label: "Đại lý cấp 1",
                },
                {
                  value: 4,
                  label: "Đại lý cấp 2",
                },
              ]}
            />
          </Col>
        </Row>
      </WrapperSearch>
      <TitleComponent title={"Danh bạ khách hàng"}>
        <WrapperButton>
          <Button>Nhập file khách hàng</Button>
          <Button>Xuất file</Button>
          <Button className="btn-add" onClick={handleOpen}>
            Thêm khách hàng
          </Button>
        </WrapperButton>
      </TitleComponent>
      <Row gutter={20}>
        <Col span={5}>
          <ListAdress />
        </Col>
        <Col span={19}>
          <ListPhonebook
            listPhonebookGuest={listPhonebookGuest}
            onDelete={handleInsertGuestToList}
          />
        </Col>
      </Row>
      {showModalInsert && (
        <ModalInsertGuest
          isModalOpen={showModalInsert}
          onCancel={handleHide}
          onInsertGuest={handleInsertGuestToList}
        />
      )}
    </Wrapper>
  );
};

export default PhonebookGuest;
