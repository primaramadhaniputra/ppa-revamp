import { Grid } from "@hudoro/neron";
import React from "react";
import { WelcomeText } from "./styles";

interface IProps {
  sizing?: boolean;
}

export default function WelcomeTextComponent({ sizing }: IProps) {
  return (
    <Grid
      container
      flexDirection="column"
      gap={10}
      style={{ margin: "50px 0 30px", textAlign: "center" }}
    >
      <WelcomeText
        weight={500}
        size={sizing ? `30px` : "18px"}
        lineHeight="27px"
      >
        Selamat Datang
      </WelcomeText>
      <WelcomeText
        weight={400}
        size={sizing ? `15px` : "12px"}
        lineHeight="18px"
      >
        Silahkan login dengan akun anda
      </WelcomeText>
    </Grid>
  );
}
