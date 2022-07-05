import React from "react";
import { WelcomeText, WelcomeTextHeader, Wrapper } from "./styles";

interface IProps {
  styles?: React.CSSProperties;
}

export default function WelcomeTextComponent({ styles }: IProps) {
  return (
    <Wrapper container flexDirection="column" gap={10}>
      <WelcomeTextHeader style={styles}>Selamat Datang</WelcomeTextHeader>
      <WelcomeText style={styles}>Silahkan login dengan akun anda</WelcomeText>
    </Wrapper>
  );
}
