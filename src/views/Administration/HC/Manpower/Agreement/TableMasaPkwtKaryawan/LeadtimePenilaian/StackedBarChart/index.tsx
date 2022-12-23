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
import { fontFamilies } from "@hudoro/neron";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	indexAxis: "y" as const,
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	scales: {
		x: {
			stacked: true,
			ticks: {
				font: {
					family: fontFamilies.poppins,
				},
			},
		},
		y: {
			stacked: true,
			ticks: {
				font: {
					family: fontFamilies.poppins,
				},
			},
		},
	},
	plugins: {
		legend: {
			position: "top" as const,
			labels: {
				font: {
					family: fontFamilies.poppins,
				},
			},
		},
	},
};

const labels = ["Nov 2022", "Dec 2022"];

export const data = {
	labels,
	datasets: [
		{
			label: "Kurang dari sama dengan H-7",
			data: [10, 20],
			borderColor: "#008FFB",
			backgroundColor: "#008FFB",
		},
		{
			label: "Lebih dari H-7 sampai 0",
			data: [10, 20],
			borderColor: "#FEB019",
			backgroundColor: "#FEB019",
		},
		{
			label: "Lebih dari sama dengan H-1",
			data: [10, 20],
			borderColor: "#FF4560",
			backgroundColor: "#FF4560",
		},
	],
};

export default function StackedBarChart() {
	return <Bar options={options} data={data} style={{ maxHeight: "250px" }} />;
}
