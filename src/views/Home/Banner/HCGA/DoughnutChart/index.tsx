import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { fontFamilies } from "@hudoro/neron";
import { fontWeights } from "utils/styles";
import { DonatContainer, Wrapper } from "./styles";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
	responsive: true,
	aspectRatio: 2,
	plugins: {
		legend: {
			position: "right",
			labels: {
				padding: 5,
				boxWidth: 7,
				usePointStyle: true,
				font: {
					size: 12,
					family: fontFamilies.poppins,
				},
			},
		},
		datalabels: {
			color: "white",
			formatter: (value: string) => {
				return value + "%";
			},
			font: {
				size: 12,
				family: fontFamilies.poppins,
				weight: fontWeights.bold,
			},
		},
	},
};

const data = {
	labels: ["ENG", "FLO", "HCG", "PAC", "PLT", "PRO", "SHE"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5, 7, 8, 9],
			backgroundColor: [
				"#0496FF",
				"#00E396",
				"#FEB019",
				"#546E7A",
				"#FF4560",
				"#775DD0",
				"#00A859",
			],
			borderColor: ["#0496FF", "#00E396", "#FEB019", "#546E7A", "#FF4560", "#775DD0", "#00A859"],
			borderWidth: 1,
		},
	],
};

export default function DoughnutChart() {
	return (
		<Wrapper>
			<p className="font-montserrat text-sm text-orange-400 font-medium mb-[30px]">
				Total Manpower
			</p>
			<DonatContainer>
				<Doughnut data={data} options={options as any} plugins={[ChartDataLabels as any]} />
			</DonatContainer>
		</Wrapper>
	);
}
