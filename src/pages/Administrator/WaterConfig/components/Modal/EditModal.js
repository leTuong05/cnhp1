import { Button, Modal } from "antd";
import { useState } from "react";

const EditModal = ({ open, onCancel, onOk, isEdit }) => {
  const [buttonShow, SetButtonShow] = useState(null);
  const [loading, setLoading] = useState();
  const [openDelete, setOpenDelete] = useState();
  const [isModalOpen, setIsModalOpen] = useState(open);

  const title = !!isEdit
    ? "Cập nhật đối tượng sử dụng/mức sử dụng"
    : "Thêm đối tượng sử dụng/mức sử dụng";

  const footer = [<Button>sửa</Button>, <Button>thoát</Button>];

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={onCancel}
        footer={footer}
      >
        đây là modal edit
      </Modal>
    </>
  );
};
export default EditModal;
