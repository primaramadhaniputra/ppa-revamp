import { TextVariantType } from "@hudoro/neron";
import React from "react";
import { StyledTitle } from "./styles";

interface IProps {
  children: React.ReactNode;
  type: TextVariantType;
  styles?: React.CSSProperties;
  sizing?: string;
}

export default function TitlePage({ children, type, styles, sizing }: IProps) {
  return (
    <StyledTitle sizing={sizing} variant={type} style={styles}>
      {children}
    </StyledTitle>
  );
}
