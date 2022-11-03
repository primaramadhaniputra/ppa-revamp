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
	scales: {
		y: {
			ticks: {
				beginAtZero: true,
				callback: function (value: number) {
					if (value % 1 === 0) {
						return value;
					}
				},
			},
		},
	},
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
};

const labels = [""];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: [],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

export function LineChart() {
	return <Line options={options as any} data={data} height={25} />;
}
