import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface IProps {
  datas:
  | {
    target: number;
    data: {
      date: string;
      payload: number;
    }[];
  }
  | undefined;
}

export default function Trend({ datas }: IProps) {
  console.log(datas)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },

    },
  };

  const data = {
    labels: datas?.data?.map((item) => item.date),
    datasets: [
      {
        fill: true,
        label: "Payload",
        data: datas?.data.map((item) => item.payload),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.4,
      },
    ],
  };
  return <Line options={options} data={data} />;
}
