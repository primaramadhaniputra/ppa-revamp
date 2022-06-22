import React from "react";
import Footer from "src/components/organism/Footer";
import FormInput from "src/components/organism/FormInput";
import { LoginWrapper, StyledCard, Title, Wrapper } from "./styles";

export default function Login1() {
  return (
    <Wrapper>
      <LoginWrapper>
        <StyledCard>
          <Title>Login</Title>
          <FormInput />
        </StyledCard>
      </LoginWrapper>
      <Footer />
    </Wrapper>
  );
}
