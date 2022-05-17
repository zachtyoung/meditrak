import React, { useState } from "react";
import { Container, AddButton } from "./styles";
import { Modal } from "antd";
import EventForm from "../EventForm";
const AddEvent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <Modal
        footer={null}
        centered
        visible={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <EventForm />
      </Modal>
      <AddButton onClick={() => setModalOpen(true)}>New Event</AddButton>
    </Container>
  );
};

export default AddEvent;
