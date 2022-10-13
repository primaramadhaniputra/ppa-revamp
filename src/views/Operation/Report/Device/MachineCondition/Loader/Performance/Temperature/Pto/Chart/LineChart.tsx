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
			borderColor: "#00BFFF",
			backgroundColor: "#00BFFF",
			tension: 0.4,
		},
	],
};

const LineChart = () => {
	return <Line options={options} data={data} />;
};

export default LineChart;
