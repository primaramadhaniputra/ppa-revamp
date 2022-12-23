import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Text } from "@hudoro/neron";
import { Wrapper } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ["1", "2", "3", "4"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5],
			backgroundColor: ["#4A7ABC", "#25B78A", "#FBB82E", "#DEE2E6"],
			borderColor: ["#4A7ABC", "#25B78A", "#FBB82E", "#DEE2E6"],
			borderWidth: 1,
		},
	],
};

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom" as const,
			labels: {
				padding: 30,
				boxWidth: 15,
			},
		},
	},
};

export default function DoughnutChart() {
	return (
		<Wrapper>
			<Text variant="h4" style={{ fontWeight: 500, marginBottom: "30px" }}>
				Chart Masa PKWT
			</Text>
			<Doughnut data={data} options={options} style={{ maxHeight: "500px	" }} />
		</Wrapper>
	);
}
