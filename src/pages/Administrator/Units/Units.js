import React from "react";
import TableCommon from "../../../components/Admin/TableCommon";
import TitleComponent from "../../../components/TitleComponent";

const Units = () => {
  return (
    <>
      <TableCommon
        title={
          <>
            <TitleComponent title={"Danh sách tổ quản lý"} />
          </>
        }
      />
    </>
  );
};

export default Units;
