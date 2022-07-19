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
      backgroundColor: [
        "#345aa0",
        "#008d07",
        "rgba(228, 176, 46, 0.7)",
        "rgba(197, 214, 214, 0.7)",
      ],
      borderColor: [
        "#345aa0",
        "#008d07",
        "rgba(228, 176, 46, 0.7)",
        "rgba(197, 214, 214, 0.7)",
      ],
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
        padding: 15,
      },
      title: {
        display: true,
        padding: {
          bottom: 20,
        },
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
