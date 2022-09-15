import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { fontFamilies, Text } from "@hudoro/neron";
import { colors, fontSizing, fontWeights } from "utils/styles";
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
			<Text
				variant="h4"
				style={{
					color: colors.orange,
					fontWeight: fontWeights.semi,
					fontSize: fontSizing.sm.fontSize,
					marginBottom: "30px",
				}}
			>
				Total Manpower
			</Text>
			<DonatContainer>
				<Doughnut data={data} options={options as any} plugins={[ChartDataLabels]} />
			</DonatContainer>
		</Wrapper>
	);
}
