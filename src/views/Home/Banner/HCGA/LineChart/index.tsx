import React from "react";
import { Text } from "@hudoro/neron";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { DonatContainer, Wrapper } from "./styles";
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["", "", "", "", '', '', ""],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4,
    pointBorderWidth: 0,
    fill: true
  }]
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
};
export default function LineChart() {
  return (
    <Wrapper >
      <Text
        variant="h4"
        style={{ color: colors.orange, fontWeight: fontWeights.semi, fontSize: fontSizing.sm.fontSize }}
      >
        Trend ATR
      </Text>
      <DonatContainer>
        <Line options={options} data={data} />
      </DonatContainer>
    </Wrapper>
  );
}
