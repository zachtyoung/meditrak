import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Container, LineChart, ChartTitle } from "./styles";
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
    </Container>
  );
};

export default Chart;
