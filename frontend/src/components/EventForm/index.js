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
        <input className="submit" type="submit" value="Add" />
      </Form>
    </Container>
  );
};

export default EventForm;
