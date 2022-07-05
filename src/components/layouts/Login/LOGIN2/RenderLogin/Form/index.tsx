import Image from "next/image";
import React from "react";
import FormInput from "src/components/organism/FormInput";
import WelcomeTextComponent from "src/components/organism/WelcomeText";
import { FormWrapper } from "./styles";

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
