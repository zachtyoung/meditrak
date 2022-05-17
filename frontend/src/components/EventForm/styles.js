import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px 20px 0 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
    padding: 8px 14px;
    border-radius: 20px;
    border: 1px solid grey;
  }
  textarea {
    resize: none;
    height: 200px;
    border-radius: 20px;
    padding: 8px 14px;
  }
`;
