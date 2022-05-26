import React from "react";
import { Container, LoginForm } from "./styles";
const Login = () => {
  return (
    <Container>
      <LoginForm>
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </LoginForm>
    </Container>
  );
};

export default Login;
