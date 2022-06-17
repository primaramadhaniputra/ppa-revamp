import React from "react";
import Footer from "src/components/organism/Navbar/Footer";
import Form from "./Form";
import { Wrapper, WrapperImageInput } from "./styles";
import ImageForm from "./ImageForm";

interface IProps {
  url?: string;
}

export default function Login2({ url = "/images/mobilProyek.jpg" }: IProps) {
  return (
    <Wrapper>
      <WrapperImageInput>
        <Form />
        <ImageForm url={url} />
      </WrapperImageInput>
      <Footer />
    </Wrapper>
  );
}
