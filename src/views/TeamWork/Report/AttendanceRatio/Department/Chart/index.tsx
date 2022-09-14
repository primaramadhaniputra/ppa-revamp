import { Grid } from "@hudoro/neron";
import React from "react";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";
import { ChartWrapper } from "./styles";

export default function ChartComponent() {
  return (
    <Grid container style={{ marginTop: "50px" }}>
      <ChartWrapper>
        <LeftChart />
      </ChartWrapper>
      <ChartWrapper>
        <RightChart />
      </ChartWrapper>
    </Grid>
  );
}
