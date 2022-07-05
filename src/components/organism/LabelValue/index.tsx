import { Grid } from "@hudoro/neron";
import React from "react";
import { StyledText } from "./styles";

interface IProps {
  data: string[];
}

export default function LabelValue({ data }: IProps) {
  return (
    <Grid container justifyContent="space-between">
      {data.map((item, index) => (
        <StyledText key={index}>{item}</StyledText>
      ))}
    </Grid>
  );
}
