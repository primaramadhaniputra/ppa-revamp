import React from "react";
import Footer from "src/components/organism/Footer";
import Form from "./Form";
import { FooterContainer, Wrapper, WrapperImageInput } from "./styles";
import ImageForm from "./ImageForm";

export default function Login6() {
  return (
    <Wrapper>
      <WrapperImageInput>
        <Form />
        <ImageForm />
      </WrapperImageInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
}
