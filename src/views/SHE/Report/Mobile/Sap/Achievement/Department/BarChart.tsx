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
// import annotationPlugin from "chartjs-plugin-annotation";
import { fontFamilies } from "@hudoro/neron";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	scales: {
		y: {
			ticks: {
				callback: function (value: string) {
					return `${parseInt(value)}%`;
				},
			},
		},
		x: {
			grid: {
				display: false,
			},
		},
	},
	plugins: {
		legend: {
			position: "top" as const,
			display: false,
		},
		title: {
			display: true,
			text: "Percentage",
			position: "top" as const,
			font: {
				size: 15,
				family: fontFamilies.poppins,
			},
		},
		annotation: {
			annotations: {
				box1: {
					type: "line",
					borderColor: "rgb(64,207,255)",
					borderDashOffset: 0,
					borderWidth: 3,
					label: {
						enabled: true,
						content: "",
					},
					scaleID: "y",
					value: 430,
				},
			},
		},
	},
};
const labels = ["ENG", "FLO", "HCG", "PJO", "PAC", "PLT", "PRO", "SHE"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: [100, 200, 300, 400, 500, 100, 20, 10],
			backgroundColor: "rgb(255,140,0)",
		},
	],
};

export function BarChart() {
	return <Bar options={options as any} data={data} />;
}
