import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px 0 20px;
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin: 0;
    padding: 0;
    height: 20px;
  }
  a {
    cursor: pointer;
    .fa-bars {
      font-size: 22px;
      color: #2ca6ff;
    }
  }
`;
