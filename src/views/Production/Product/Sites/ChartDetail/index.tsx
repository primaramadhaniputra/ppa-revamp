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
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";
import { ChartWrapper } from "./styles";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	annotationPlugin,
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom" as const,
			labels: {
				padding: 30,
			},
		},
		title: {
			display: false,
			text: "Data chart",
		},
		annotation: {
			annotations: {
				box1: {
					type: "line",
					borderColor: "#4571C2",
					borderWidth: 2,
					label: {
						enabled: false,
						content: "Target 100",
						position: "end",
						backgroundColor: "#4571C2",
					},
					scaleID: "y",
					value: 300,
				},
			},
		},
	},
};

const labels = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
	28, 29, 30,
];

export const data = {
	labels,
	datasets: [
		{
			label: "Plan",
			data: [
				100, 200, 100, 400, 50, 70, 10, 300, 800, 100, 30, 134, 600, 500, 200, 630, 123, 456, 741,
				300, 210, 320, 500, 10, 20, 300, 400, 50, 600, 90,
			],
			borderColor: "#E67C39",
			backgroundColor: "#E67C39",
			tension: 0.4,
			pointRadius: 0,
			pointHoverRadius: 0,
		},
	],
};

export default function ChartDetail() {
	return (
		<ChartWrapper>
			<Line options={options as any} data={data} />
		</ChartWrapper>
	);
}
