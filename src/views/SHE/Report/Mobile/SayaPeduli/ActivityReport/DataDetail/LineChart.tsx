import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			display: false,
		},
		title: {
			display: true,
			text: "Reporting by departement",
		},
		labels: {
			display: false,
		},
		datalabels: {
			display: false,
		},
	},
};

export const data = {
	labels: [""],
	datasets: [
		{
			label: "Dataset 1",
			data: [100, -100, 100, -100, 100, -100, 100, -100, 100, -100, 100, -100],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
			borderWidth: -1000,
		},
	],
};
const LineChart = () => {
	return <Line options={options} data={data} height={100} />;
};

export default LineChart;
