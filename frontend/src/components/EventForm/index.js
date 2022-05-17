import React from "react";
import { Container, Form } from "./styles";
const EventForm = () => {
  return (
    <Container>
      <Form>
        <input placeholder="Date" />
        <input placeholder="Duration" />
        <input placeholder="Medication given" />
        <textarea placeholder="Notes" />
      </Form>
    </Container>
  );
};

export default EventForm;
