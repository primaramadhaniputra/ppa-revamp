import Image from "next/image";
import React from "react";
import Footer from "src/components/organism/Navbar/Footer";
import FormInput from "./FormInput";
import { Container, FooterContainer, FormWrapper, Wrapper } from "./styles";
import WelcomeTextComponent from "./WelcomeText";

export default function Form() {
  return (
    <Wrapper style={{ position: "relative" }}>
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
