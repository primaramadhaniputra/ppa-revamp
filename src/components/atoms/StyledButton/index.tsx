import React from "react";
import { StyledButton as Button } from "./styles";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function StyledButton({ children, style, ...rest }: IProps) {
  return (
    <Button {...rest} style={{ cursor: "pointer", ...style }}>
      {children}
    </Button>
  );
}
