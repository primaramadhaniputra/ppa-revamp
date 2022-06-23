import Cookies from "js-cookie";
import Router from "next/router";
import React from "react";
import Footer from "src/components/organism/Footer";
import FormInput from "src/components/organism/FormInput";
import { LoginWrapper, StyledCard, Title, Wrapper } from "./styles";

export default function Login1() {
  const token = Cookies.get("token");
  if (token) {
    Router.push("/dashboard");
  }
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
