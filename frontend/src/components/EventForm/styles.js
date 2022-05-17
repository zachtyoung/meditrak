import styled from "styled-components";

export const Container = styled.div``;

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
  .submit {
    border: none;
    color: white;
    background-color: #2ca6ff;
  }
`;
