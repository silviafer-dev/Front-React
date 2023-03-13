import React, { useState } from "react";
import { AddUser } from "../components/AddUser";
import { TableData } from "../components/TableData";
import { Button, Modal } from "antd";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Front React Code</h1>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Add New User
        </Button>
      </div>
      <Modal
        title="Add New User Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
        ]}
      >
        <AddUser handleCancel={handleCancel} />
      </Modal>
      <TableData />
    </div>
  );
};
