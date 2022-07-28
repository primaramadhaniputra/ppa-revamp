import React from "react";
import { Text } from "@hudoro/neron";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { DonatContainer, Wrapper } from "./styles";
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const data = {
  labels: ["", "", "", "", '', '', "", '', '', '', '', ''],
  datasets: [{
    label: 'My First Dataset',
    data: [10, 12, 8, 9, 16, 13, 40, 10, 30, 1, 10, 10],
    borderColor: '#44ACFA',
    tension: .3,
    pointBorderWidth: -100,
    fill: true,
    backgroundColor: '#ACD7F8'
  }]
};

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: function (value: string) {
          return `${value}%`;
        }
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    annotation: {
      annotations: {
        box1: {
          type: 'line',
          borderColor: '#FF4560',
          borderDash: [6, 6],
          borderDashOffset: 0,
          borderWidth: 3,
          label: {
            enabled: true,
            content: 'Target 20%',
            position: 'end',
            backgroundColor: '#FF4560',
          },
          scaleID: 'y',
          value: 20,
        },
      }
    }
  },
};
export default function LineChart() {
  return (
    <Wrapper >
      <Text
        variant="h4"
        style={{ color: colors.orange, fontWeight: fontWeights.semi, fontSize: fontSizing.sm.fontSize, flex: 1 }}
      >
        Trend ATR
      </Text>
      <DonatContainer>
        <Line options={options as any} data={data} />
      </DonatContainer>
    </Wrapper>
  );
}
