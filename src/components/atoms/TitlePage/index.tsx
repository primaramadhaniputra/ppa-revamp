import { TextVariantType } from "@hudoro/neron";
import React from "react";
import { StyledTitle } from "./styles";

interface IProps {
  children: React.ReactNode;
  type: TextVariantType;
}

export default function TitlePage({ children, type }: IProps) {
  return <StyledTitle variant={type}>{children}</StyledTitle>;
}
