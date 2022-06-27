import ImageForm from "molecules/ImageForm";
import React from "react";
import Footer from "src/components/organism/Footer";
import Form from "./Form";
import { FooterContainer, Wrapper, WrapperImageInput } from "./styles";

interface IProps {
  order?: number;
}

export default function RenderLogin({ order }: IProps) {
  function render() {
    if (order === 1) {
      return (
        <Wrapper>
          <WrapperImageInput>
            <Form order={order} />
            <ImageForm height="100vh" />
          </WrapperImageInput>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <WrapperImageInput>
          <Form />
          <ImageForm height="100vh" />
        </WrapperImageInput>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Wrapper>
    );
  }

  return <>{render()}</>;
}
