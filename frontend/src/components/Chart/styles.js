import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px 20px 0 20px;
`;
export const LineChart = styled.div`
  background-color: lightgrey;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  font-weight: 700;
  border-radius: 8px;
`;
export const ChartTitle = styled.h2`
  font-size: 14px;
  color: #2ca6ff;
  font-weight: 700;
  a {
    padding-right: 10px;
    .fa-calendar {
      color: #2ca6ff;
    }
  }
`;
