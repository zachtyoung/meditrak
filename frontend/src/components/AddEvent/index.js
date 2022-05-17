import React, { useState } from "react";
import { Container, AddButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import EventForm from "../EventForm";
const AddEvent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container>
      <Modal
        title="Add New Event"
        closeIcon={<FontAwesomeIcon icon={faXmark} />}
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
