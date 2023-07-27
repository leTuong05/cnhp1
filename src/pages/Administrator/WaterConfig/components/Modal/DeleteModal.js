import { Modal } from "antd";
import { useEffect, useState } from "react";

const DeleteModal = ({ data, isEdit }) => {
  const [loading, setLoading] = useState();
  const [openEdit, setOpenEdit] = useState();
  const [openDelete, setOpenDelete] = useState();
  const [isModalOpen, setIsModalOpen] = useState(data);

  const handleOk = () => {
    setIsModalOpen();
  };
  const handleCancel = () => {
    setIsModalOpen();
  };
  useEffect(() => {}, []);

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        đây là modal edit
      </Modal>
    </>
  );
};
export default DeleteModal;
