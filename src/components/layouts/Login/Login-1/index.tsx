import React from "react";
import Footer from "src/components/organism/Footer";
import Form from "./Form";
import { LoginWrapper, StyledCard, Title, Wrapper } from "./styles";

export default function Login1() {
  return (
    <Wrapper>
      <LoginWrapper>
        <StyledCard>
          <Title>Login</Title>
          <Form />
        </StyledCard>
      </LoginWrapper>
      <Footer />
    </Wrapper>
  );
}
