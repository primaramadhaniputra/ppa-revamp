import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Card, Grid, Text } from "@hudoro/neron";
import { colors } from "utils/styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Latest", "Update", "Out to date", "No data"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "#1e4181",
        "#008d07",
        "rgba(228, 176, 46, 0.7)",
        "rgba(197, 214, 214, 0.7)",
      ],
      borderColor: [
        "#1e4181",
        "#008d07",
        "rgba(228, 176, 46, 0.7)",
        "rgba(197, 214, 214, 0.7)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutChart() {
  return (
    <Card style={{ maxWidth: "900px", margin: "auto" }}>
      <Doughnut data={data} />
      <Grid>
        <Text variant="h4">CAT777</Text>
        <Text variant="h4" style={{ backgroundColor: colors.orange }}>
          CAT777
        </Text>
      </Grid>
      <Grid>
        <Text variant="h4">CAT777</Text>
        <Text variant="h4" style={{ backgroundColor: colors.orange }}>
          CAT777
        </Text>
      </Grid>
    </Card>
  );
}
