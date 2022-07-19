import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Text } from "@hudoro/neron";
import { fontWeights } from "utils/styles";
import { Container, DataContainer, DonatContainer, Wrapper } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Latest", "Update", "Out to date", "No data"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["#4A7ABC", "#25B78A", "#FBB82E", "#DEE2E6"],
      borderColor: ["#4A7ABC", "#25B78A", "#FBB82E", "#DEE2E6"],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 30,
        boxWidth: 15,
      },
    },
  },
};

export default function DoughnutChart() {
  return (
    <Wrapper>
      <Text
        variant="h4"
        style={{ fontWeight: fontWeights.bold, marginBottom: "30px" }}
      >
        VHMS Download
      </Text>
      <DonatContainer>
        <Doughnut data={data} options={options} />
      </DonatContainer>
      <Container>
        <DataContainer>
          <Text variant="h4">CAT777</Text>
          <Text variant="h4">1001</Text>
        </DataContainer>
        <DataContainer>
          <Text variant="h4">CAT777</Text>
          <Text variant="h4">1001</Text>
        </DataContainer>
      </Container>
    </Wrapper>
  );
}
