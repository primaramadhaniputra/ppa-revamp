import { Grid } from "@hudoro/neron";
import LabeldInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React from "react";

export default function FormInput() {
  return (
    <Grid container flexDirection="column" style={{ width: "100%" }} gap={50}>
      <Grid container flexDirection="column" gap={20}>
        <LabeldInput label={true} title="NRP" />
        <LabeldInput label={true} title="Password" />
      </Grid>
      <StyledButton>Masuk</StyledButton>
    </Grid>
  );
}
