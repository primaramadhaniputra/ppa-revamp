import React from "react";
import Footer from "src/components/organism/Footer";
import Form from "./Form";
import ImageForm from "./ImageForm";
import { FooterContainer, WrapperImageInput } from "./styles";

interface IProps {
  order?: number;
}

export default function RenderLogin({ order }: IProps) {
  function render() {
    if (order === 1) {
      return (
        <>
          <WrapperImageInput>
            <Form order={order} />
            <ImageForm />
          </WrapperImageInput>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </>
      );
    }
    return (
      <>
        <WrapperImageInput>
          <Form />
          <ImageForm />
        </WrapperImageInput>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </>
    );
  }

  return <>{render()}</>;
}
