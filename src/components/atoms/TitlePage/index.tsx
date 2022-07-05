import { TextVariantType } from "@hudoro/neron";
import React from "react";
import { StyledTitle } from "./styles";

interface IProps {
  children: React.ReactNode;
  type: TextVariantType;
  styles?: React.CSSProperties;
}

export default function TitlePage({ children, type, styles }: IProps) {
  return (
    <StyledTitle variant={type} style={styles}>
      {children}
    </StyledTitle>
  );
}
