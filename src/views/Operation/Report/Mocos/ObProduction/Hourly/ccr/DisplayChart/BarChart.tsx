import React from "react";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	plugins: {
		legend: {
			position: "bottom" as const,
			display: false,
		},
	},
	responsive: true,
	scales: {
		x: {
			stacked: true,
		},
		y: {
			stacked: true,
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: [10, 20, 30, 40, 50, 60, 70],
			backgroundColor: "rgb(255, 99, 132)",
		},
		{
			label: "Dataset 2",
			data: [10, 20, 30, 40, 50, 60, 70],
			backgroundColor: "rgb(75, 192, 192)",
		},
		{
			label: "Dataset 3",
			data: [10, 20, 30, 40, 50, 60, 70],
			backgroundColor: "rgb(53, 162, 235)",
		},
	],
};

export default function BarChart() {
	return <Bar options={options} data={data} />;
}
