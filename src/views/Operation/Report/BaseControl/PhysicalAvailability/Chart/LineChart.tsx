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
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "PA",
		},
	},
};

const newData = new Array(100).fill(100);
const newData2 = new Array(100).fill(70);

const labels = newData;

export const data = {
	labels,
	datasets: [
		{
			label: "Plan",
			data: newData,
			backgroundColor: "rgba(242,168,43,.3)",
		},
		{
			label: "Ach",
			data: newData2,
			backgroundColor: "rgba(0,66,142,.3)",
		},
	],
};

const LineChart = () => {
	return <Bar options={options} data={data} />;
};

export default LineChart;
