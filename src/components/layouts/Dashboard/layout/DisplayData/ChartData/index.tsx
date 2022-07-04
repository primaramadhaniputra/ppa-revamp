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
  const dataName = Object.keys(data[0]).filter(item => item !== 'label' && item !== 'value' && item !== 'chartValue')
  const dataValue = dataName.map(item => {
    const value = data.map((name: { [x: string]: any; }) => name[item])
    return {
      label: item,
      data: value,
      backgroundColor: "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' +
        (85 + 10 * Math.random()) + '%)',
    }
  })
  useEffect(() => {
    const newLabels = data?.map((item: any) => item.label);
    setLabels(newLabels);
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
    datasets: dataValue,
  };
  return (
    <div style={{ maxWidth: "1400px", width: "100%" }}>
      <Bar options={options} data={datas} />
    </div>
  );
}
