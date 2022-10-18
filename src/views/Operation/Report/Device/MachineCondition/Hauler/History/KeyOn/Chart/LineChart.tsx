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
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
);

export const options = {
	plugins: {
		legend: {
			display: false,
		},
	},
	responsive: true,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: [150, 50, 100, 100, 50, 100, 50, 100, 50, 100, 50, 100],
			borderColor: "#5E93E5",
			backgroundColor: "#9BBCEF",
			tension: 0.4,
			fill: true,
		},
	],
};

const LineChart = () => {
	return <Line options={options} data={data} />;
};

export default LineChart;
