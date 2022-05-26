import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin-top: 20px;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  max-width: 400px;

  width: 100%;
  margin: 0 auto;
  input {
    border-radius: 50px;
    border: 1px solid #2ca6ff;
    padding: 8px 10px;
  }
  button {
    border-radius: 50px;
    background-color: #2ca6ff;
    color: white;
    border: none;
    padding: 10px 0;
    font-weight: 700;
    font-size: 18px;
  }
`;
