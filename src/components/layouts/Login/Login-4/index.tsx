import React from "react";
import Footer from "src/components/organism/Navbar/Footer";
import { Grid } from "@hudoro/neron";
import Form from "./Form";
import { FooterContainer, Wrapper, WrapperImageInput } from "./styles";
import ImageForm from "./ImageForm";

interface IProps {
  url?: string;
}

export default function Login4({ url = "/images/mobilProyek.jpg" }: IProps) {
  return (
    <Wrapper>
      <WrapperImageInput>
        <Grid style={{ position: "relative" }}>
          <Form />
          <ImageForm url={url} />
        </Grid>
      </WrapperImageInput>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
}
