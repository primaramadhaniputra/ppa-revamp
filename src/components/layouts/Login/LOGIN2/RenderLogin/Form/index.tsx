import Image from "next/image";
import React from "react";
import FormInput from "./FormInput";
import { FormWrapper } from "./styles";
import WelcomeTextComponent from "./WelcomeText";

interface IProps {
  nameLogin?: string;
}

export default function Form({ nameLogin }: IProps) {
  return (
    <FormWrapper nameLogin={nameLogin}>
      <Image src="/images/logo2.png" width={354} height={34} alt="ppa-logo" />
      <WelcomeTextComponent />
      <FormInput />
    </FormWrapper>
  );
}
