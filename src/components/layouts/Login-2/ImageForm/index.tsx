import React from "react";
import { LoginImage } from "./styled";

interface IProps {
  url: string;
}

export default function ImageForm({ url }: IProps) {
  return <LoginImage urlImage={url}></LoginImage>;
}
