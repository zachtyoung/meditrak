import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Container, LineChart, ChartTitle } from "./styles";
import AddEvent from "../AddEvent";
const Chart = () => {
  return (
    <Container>
      <ChartTitle>
        <a>
          <FontAwesomeIcon icon={faCalendar} />
        </a>
        May 16 - May 22
      </ChartTitle>
      <LineChart>Chart</LineChart>
      <AddEvent />
    </Container>
  );
};

export default Chart;
