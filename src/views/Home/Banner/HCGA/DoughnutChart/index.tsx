import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Text } from "@hudoro/neron";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { DonatContainer, Wrapper } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      labels: {
        padding: 30,
        boxWidth: 7,
        usePointStyle: true,

      },
    },

  },
};

interface IProps {
  data: any
}

export default function DoughnutChart({ data }: IProps) {
  return (
    <Wrapper >
      <Text
        variant="h4"
        style={{ color: colors.orange, fontWeight: fontWeights.semi, fontSize: fontSizing.sm.fontSize }}
      >
        Total Manpower
      </Text>
      <DonatContainer>
        <Doughnut data={data} options={options} />
      </DonatContainer>
    </Wrapper>
  );
}
