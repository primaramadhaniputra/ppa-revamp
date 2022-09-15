import React from "react";
import { fontFamilies, Text } from "@hudoro/neron";
import { colors, fontSizing, fontWeights } from "utils/styles";
import { DonatContainer, Wrapper } from "./styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
	aspectRatio: 2,
	responsive: true,
	plugins: {
		legend: {
			position: "right" as const,
			labels: {
				padding: 5,
				boxWidth: 7,
				usePointStyle: true,
				render: "label",
				font: {
					size: 12,
					family: fontFamilies.poppins,
				},
			},
		},
		datalabels: {
			color: "White",
			formatter: (value: string) => {
				return value + "%";
			},
			font: {
				size: 12,
				family: fontFamilies.poppins,
				weight: fontWeights.bold,
			},
			align: "start",
			anchor: "end",
			padding: 10,
		},
	},
};

interface IProps {
	data: any;
}

export default function PieChart({ data }: IProps) {
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
				<Pie data={data} options={options as any} plugins={[ChartDataLabels]} />
			</DonatContainer>
		</Wrapper>
	);
}
