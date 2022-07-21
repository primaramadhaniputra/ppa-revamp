import { Grid } from "@hudoro/neron";
import React from "react";
import { StyledInput, StyledLabel } from "./styles";

interface IProps {
  title: string;
  placeholder?: string;
  name: string;
  onClick?: () => void;
  value?: string;
  color?: string;
  type?: string;
  style?: React.CSSProperties;
  onChange?: (e: any) => void;
  disabled?: boolean;
}

export default function LabeledInput({
  title,
  color = "black",
  ...rest
}: IProps) {
  return (
    <Grid container flexDirection="column" gap={5}>
      {title && <StyledLabel style={{ color }}>{title}</StyledLabel>}
      <StyledInput autoComplete="off" {...rest} />
    </Grid>
  );
}
