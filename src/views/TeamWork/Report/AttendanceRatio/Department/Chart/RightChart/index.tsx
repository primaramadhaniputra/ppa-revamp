import { Text } from "@hudoro/neron";
import React from "react";
import { Wrapper } from "./styles";
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
import { fontWeights } from "utils/styles";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
	plugins: {
		legend: {
			display: false,
			// labels: {
			//    boxWidth: 80,
			//    boxHeight: 15,
			//    padding: 30,
			// },
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

const labels = ["ENG", "FLO", "HCG", "MNG", "PAC", "PLT", "ENG", "SHE"];

export const data = {
	labels,
	datasets: [
		{
			label: "Sakit",
			data: [60, 65, 60, 60, 70, 65, 70, 60],
			backgroundColor: ["#FF4560"],
		},
		{
			label: "Izin",
			data: [60, 65, 60, 60, 70, 65, 70, 60],
			backgroundColor: ["#3B7DDD"],
		},
		{
			label: "Alpa",
			data: [60, 65, 60, 60, 70, 65, 70, 60],
			backgroundColor: ["#FCB92C"],
		},
	],
};

export default function RightChart() {
	return (
		<Wrapper>
			<Text variant="h4" style={{ fontWeight: fontWeights.bold, marginBottom: "20px" }}>
				TREND SIA
			</Text>
			<Bar options={options as any} data={data} />;
		</Wrapper>
	);
}
