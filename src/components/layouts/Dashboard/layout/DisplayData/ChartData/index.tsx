import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IProps {
  data: any;
}

export default function ChartData({ data }: IProps) {
  const [labels, setLabels] = useState(["0"]);
  const [target, setTarget] = useState([0]);
  const [ppa, setPpa] = useState([0]);
  const [komatsu, setKomatsu] = useState([0]);

  useEffect(() => {
    const newLabels = data?.map((item: any) => item.label);
    const newTarget = data?.map((item: any) => item.target);
    const newPpa = data?.map((item: any) => item.ppa);
    const newKomatsu = data?.map((item: any) => item.komatsu);
    setLabels(newLabels);
    setTarget(newTarget);
    setPpa(newPpa);
    setKomatsu(newKomatsu);
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  const datas = {
    labels,
    datasets: [
      {
        label: "Target",
        data: target,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "PPA",
        data: ppa,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Komatsu",
        data: komatsu,
        backgroundColor: "rgba(53, 235, 190, 0.5)",
      },
    ],
  };
  return (
    <div style={{ maxWidth: "1400px", width: "100%" }}>
      <Bar options={options} data={datas} />
    </div>
  );
}
