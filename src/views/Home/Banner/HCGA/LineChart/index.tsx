import React, { useRef } from "react";
import { Grid, Text } from "@hudoro/neron";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { DonatContainer, Wrapper } from "./styles";
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
// import * as Zoom from "chartjs-plugin-zoom";
import annotationPlugin from 'chartjs-plugin-annotation';
import { IcMinusCircle, IcPlusCircle } from "atoms/Icon";
import IcReset from "atoms/Icon/IcReset";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin,
  zoomPlugin
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
          return `${parseInt(value)}%`;
        }
      },
    },
    x: {
      grid: {
        display: false
      }
    },
  },
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        pinch: {
          enabled: true
        },
        mode: 'xy',
      },
      pan: {
        enabled: true,
        mode: 'xy',
      }
    },
    legend: {
      display: false,
    },
    annotation: {
      annotations: {
        box1: {
          type: 'line',
          borderColor: '#FF4560',
          borderWidth: 1,
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
    },
  },
};
export default function LineChart() {
  const chartRef = useRef(null);
  const resetZoom = () => (chartRef.current as any).resetZoom();
  const zoomIn = () => (chartRef.current as any).zoom(1.1);
  const zoomOut = () => (chartRef.current as any).zoom(0.9);

  return (
    <Wrapper >
      <Text
        variant="h4"
        style={{ color: colors.orange, fontWeight: fontWeights.semi, fontSize: fontSizing.sm.fontSize, flex: 1 }}
      >
        Trend ATR
      </Text>
      <DonatContainer>
        <Grid container alignItems="center" justifyContent="flex-end" gap={5}>
          <IcReset width={17} cursor='pointer' onClick={resetZoom} />
          <IcPlusCircle width={17} cursor='pointer' onClick={zoomIn} />
          <IcMinusCircle width={17} cursor='pointer' onClick={zoomOut} />
        </Grid>
        <Line options={options as any} data={data} ref={chartRef} />
      </DonatContainer>
    </Wrapper>
  );
}
