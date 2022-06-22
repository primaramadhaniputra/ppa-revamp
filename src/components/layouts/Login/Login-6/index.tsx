import React from "react";
import Footer from "src/components/organism/Footer";
import Form from "./Form";
import { FooterContainer, Wrapper, WrapperImageInput } from "./styles";
import ImageForm from "./ImageForm";

interface IProps {
  url?: string;
}

export default function Login6({ url = "/images/mobilProyek.jpg" }: IProps) {
  return (
    <Wrapper>
      <WrapperImageInput>
        <Form />
        <ImageForm url={url} />
      </WrapperImageInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
}
