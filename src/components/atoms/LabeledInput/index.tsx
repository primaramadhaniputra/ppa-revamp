import { Grid } from "@hudoro/neron";
import React from "react";
import { StyledInput, StyledLabel } from "./styles";

interface IProps {
  title: string;
  label: boolean;
  placeholder?: string;
}

export default function LabeldInput({
  title = "Banana",
  label = true,
  ...rest
}: IProps) {
  return (
    <Grid container flexDirection="column" gap={5}>
      {label && <StyledLabel htmlFor="NRP">{title}</StyledLabel>}
      <StyledInput id="NRP" {...rest} />
    </Grid>
  );
}
