import { fontFamilies, Grid, Text } from "@hudoro/neron";
import React from "react";
import { NumberInput } from "./styles";

interface IProps {
  value: {
    id: number;
    values: string;
    label: string;
  };
  handleChange: (e: any) => void;
}

export default function ShowDataTable({ value, handleChange }: IProps) {
  return (
    <Grid container alignItems="center" gap={5}>
      <Text variant="p" style={{ fontFamily: fontFamilies.poppins }}>
        Show
      </Text>
      <Grid>
        <NumberInput
          value={parseInt(value.values, 10)}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
