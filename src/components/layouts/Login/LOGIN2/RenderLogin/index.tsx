import ImageForm from "molecules/ImageForm";
import React from "react";
import Form from "./Form";
import { WrapperImageInput } from "./styles";

interface IProps {
  typeLogin?: string;
  nameLogin?: string;
}

export default function RenderLogin({ typeLogin, nameLogin }: IProps) {
  function render() {
    if (typeLogin === "login22") {
      return (
        <WrapperImageInput nameLogin={nameLogin}>
          <Form nameLogin={nameLogin} />
          <ImageForm />
        </WrapperImageInput>
      );
    }
    return (
      <WrapperImageInput>
        <Form />
        <ImageForm />
      </WrapperImageInput>
    );
  }

  return <>{render()}</>;
}
