import Image from "next/image";
import React from "react";
import Footer from "src/components/organism/Footer";
import FormInput from "./FormInput";
import { Container, FooterContainer, FormWrapper, Wrapper } from "./styles";
import WelcomeTextComponent from "./WelcomeText";

interface IProps {
  type?: string;
}

export default function Form({ type }: IProps) {
  return (
    <Wrapper type={type} style={{ position: "relative" }}>
      <Container>
        <FormWrapper>
          <Image
            src="/images/logo2.png"
            width={354}
            height={34}
            alt="ppa-logo"
          />
          <WelcomeTextComponent />
          <FormInput />
        </FormWrapper>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </Wrapper>
  );
}
