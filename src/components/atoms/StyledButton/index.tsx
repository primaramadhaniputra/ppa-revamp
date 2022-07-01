import React from "react";
import { StyledButton as Button } from "./styles";

interface IProps {
  children: React.ReactNode;
}

export default function StyledButton({ children, ...rest }: IProps) {
  return (
    <Button {...rest} style={{ cursor: "pointer" }}>
      {children}
    </Button>
  );
}
