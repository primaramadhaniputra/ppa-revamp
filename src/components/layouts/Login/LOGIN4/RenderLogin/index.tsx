import { Grid } from "@hudoro/neron";
import React from "react";
import Footer from "src/components/organism/Footer";
import Form from "./Form";
import ImageForm from "./ImageForm";
import { FooterContainer, Wrapper, WrapperImageInput } from "../styles";

interface IProps {
  type?: string;
}

export default function RenderLogin({ type }: IProps) {
  function render() {
    if (type === "login4" || type === "login51") {
      return (
        <Wrapper type={type}>
          <WrapperImageInput type="login4">
            <Grid style={{ position: "relative" }}>
              <Form type={type} />
              <ImageForm />
            </Grid>
          </WrapperImageInput>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Wrapper>
      );
    }
    return (
      <Wrapper type={type}>
        <WrapperImageInput>
          <Grid style={{ position: "relative" }}>
            <Form />
            <ImageForm />
          </Grid>
        </WrapperImageInput>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Wrapper>
    );
  }

  return <>{render()}</>;
}
