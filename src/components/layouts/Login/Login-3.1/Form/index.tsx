import { Grid } from "@hudoro/neron";
import Image from "next/image";
import React from "react";
import Footer from "src/components/organism/Navbar/Footer";
import FormInput from "./FormInput";
import { FooterContainer, FormWrapper } from "./styles";
import WelcomeTextComponent from "./WelcomeText";

export default function Form() {
  return (
    <Grid style={{ position: "relative", order: 2 }}>
      <FormWrapper>
        <Image src="/images/logo2.png" width={354} height={34} alt="ppa-logo" />
        <WelcomeTextComponent />
        <FormInput />
      </FormWrapper>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Grid>
  );
}
