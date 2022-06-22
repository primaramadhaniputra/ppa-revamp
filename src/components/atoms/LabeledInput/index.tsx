import { Grid } from "@hudoro/neron";
import React from "react";
import { StyledInput, StyledLabel } from "./styles";

interface IProps {
  title: string;
  label: boolean;
  placeholder?: string;
  name: string;
  onClick?: () => void;
  value?: string;
  color?: string;
}

export default function LabeldInput({
  title = "Banana",
  label = true,
  color = "black",
  ...rest
}: IProps) {
  return (
    <Grid container flexDirection="column" gap={5}>
      {label && <StyledLabel style={{ color }}>{title}</StyledLabel>}
      <StyledInput autoComplete="off" {...rest} />
    </Grid>
  );
}
