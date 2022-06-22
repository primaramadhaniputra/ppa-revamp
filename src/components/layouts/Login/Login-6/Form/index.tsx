import Image from "next/image";
import React from "react";
import Footer from "src/components/organism/Navbar/Footer";
import FormInput from "./FormInput";
import {
  FooterContainer,
  FormWrapper,
  Text1,
  Text2,
  TextWrapper,
  Wrapper,
  Wrapper2,
} from "./styles";
import WelcomeTextComponent from "./WelcomeText";

export default function Form() {
  return (
    <Wrapper>
      <Wrapper2>
        <FormWrapper>
          <Image
            src="/images/logo2.png"
            width={354}
            height={34}
            alt="ppa-logo"
          />
          <WelcomeTextComponent sizing={true} />
          <FormInput />
        </FormWrapper>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Wrapper2>
      <TextWrapper>
        <div>
          <Text1 variant="h1"> SAFE & STRONG</Text1>
          <Text2 variant="h4">OPERATIONAL PERFORMANCE</Text2>
        </div>
      </TextWrapper>
    </Wrapper>
  );
}
