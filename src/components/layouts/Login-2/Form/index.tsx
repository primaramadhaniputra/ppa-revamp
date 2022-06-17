import { Grid } from "@hudoro/neron";
import LabeldInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import Image from "next/image";
import React from "react";
import { FormWrapper, WelcomeText } from "./styles";

export default function Form() {
  return (
    <FormWrapper>
      <Image src="/images/logo2.png" width={354} height={34} alt="ppa-logo" />
      <Grid
        container
        flexDirection="column"
        gap={10}
        style={{ margin: "50px 0 30px", textAlign: "center" }}
      >
        <WelcomeText weight={500} size="18px" lineHeight="27px">
          Selamat Datang
        </WelcomeText>
        <WelcomeText weight={400} size="12px" lineHeight="18px">
          Silahkan login dengan akun anda
        </WelcomeText>
      </Grid>
      <Grid container flexDirection="column" style={{ width: "100%" }} gap={50}>
        <Grid container flexDirection="column" gap={20}>
          <LabeldInput label={true} title="NRP" />
          <LabeldInput label={true} title="Password" />
        </Grid>
        <StyledButton>Masuk</StyledButton>
      </Grid>
    </FormWrapper>
  );
}
