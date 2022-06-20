import React from "react";
import Footer from "src/components/organism/Navbar/Footer";
import Form from "./Form";
import { FooterContainer, Wrapper, WrapperImageInput } from "./styles";
import ImageForm from "./ImageForm";
import { Grid } from "@hudoro/neron";

interface IProps {
  url?: string;
}

export default function Login4({ url = "/images/mobilProyek.jpg" }: IProps) {
  return (
    <Wrapper>
      <WrapperImageInput>
        <Grid style={{ position: 'relative' }}>
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
