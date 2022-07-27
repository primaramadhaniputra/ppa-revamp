import React from "react";
import { Text } from "@hudoro/neron";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { DonatContainer, Wrapper } from "./styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; 'chart.js';
import { Bar } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const data = {
  labels: [""],
  datasets: [{
    data: [10],
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor: '#0496FF',
  }]
};

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: function () {
          return '';
        }
      }
    }
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
          borderDashOffset: 0,
          borderWidth: 1,
          label: {
            enabled: true,
            content: '2%',
            position: 'center',
            backgroundColor: 'transparent',
            color: 'black',
            padding: 0,
            font: {
              family: 'poppins',
              size: 13
            }
          },
          scaleID: 'y',
          value: 20,
        },
      }
    },
    Tooltip: {
      display: false
    },

  },
};
export default function GridChart() {
  return (
    <Wrapper  >
      <Text
        variant="h4"
        style={{ color: colors.orange, fontWeight: fontWeights.semi, fontSize: fontSizing.sm.fontSize, flex: 1 }}
      >
        Turn Over
      </Text>
      <DonatContainer>
        <Bar options={options as any} data={data} />
      </DonatContainer>
    </Wrapper>
  );
}
