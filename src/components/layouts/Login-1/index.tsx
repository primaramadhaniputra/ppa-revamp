import { Grid } from "@hudoro/neron";
import LabeldInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React from "react";
import Footer from "src/components/organism/Navbar/Footer";
import { LoginWrapper, StyledCard, Title, Wrapper } from "./styles";

export default function Login1() {
  return (
    <Wrapper>
      <LoginWrapper>
        <StyledCard>
          <Title>Login</Title>
          <Grid container flexDirection="column" gap={39}>
            <Grid container flexDirection="column" gap={9}>
              <LabeldInput label={true} title="NRP" />
              <LabeldInput label={true} title="Password" />
            </Grid>
            <StyledButton>Masuk</StyledButton>
          </Grid>
        </StyledCard>
      </LoginWrapper>
      <Footer />
    </Wrapper>
  );
}
