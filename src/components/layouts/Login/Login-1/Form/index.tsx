import { Grid } from "@hudoro/neron";
import LabeldInput from "atoms/LabeledInput";
import StyledButton from "atoms/StyledButton";
import React from "react";

export default function Form() {
  return (
    <Grid container flexDirection="column" gap={39}>
      <Grid container flexDirection="column" gap={9}>
        <LabeldInput label={true} title="NRP" />
        <LabeldInput label={true} title="Password" />
      </Grid>
      <StyledButton>Masuk</StyledButton>
    </Grid>
  );
}
