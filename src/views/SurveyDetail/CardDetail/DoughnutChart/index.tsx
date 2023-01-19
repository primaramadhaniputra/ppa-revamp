import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { fontFamilies } from "@hudoro/neron";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      align: "center",
      labels: {
        padding: 30,
        boxWidth: 24,
      },
    },
    title: {
      padding: 100,
    },
    datalabels: {
      color: "white",
      font: {
        size: 12,
        family: fontFamilies.poppins,
      },
    },
  },
};

export const data = {
  labels: [
    "Safety",
    "Jumlah dan kerugian Insidenyang terjadi sesuai harapan",
    "Health",
    "Environtmental",
    "PH air yang keluar dari tambang",
    "Community Development",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#20DAE6", "#E1260D", "#524FE1", "#05585F", "#F5C01B", "#62CA92"],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={options as any} plugins={[ChartDataLabels as any]} />;
}
