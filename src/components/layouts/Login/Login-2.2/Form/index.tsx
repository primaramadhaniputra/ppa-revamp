import Image from "next/image";
import React from "react";
import FormInput from "./FormInput";
import { FormWrapper } from "./styles";
import WelcomeTextComponent from "./WelcomeText";

export default function Form() {
  return (
    <FormWrapper>
      <Image src="/images/logo2.png" width={354} height={34} alt="ppa-logo" />
      <WelcomeTextComponent />
      <FormInput />
    </FormWrapper>
  );
}
