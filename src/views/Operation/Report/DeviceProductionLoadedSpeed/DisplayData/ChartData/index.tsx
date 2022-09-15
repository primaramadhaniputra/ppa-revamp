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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IProps {
	data: any;
}

export default function ChartData({ data }: IProps) {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const datas = {
		labels: data.map((item: { label: string }) => item.label),
		datasets: [
			{
				type: "bar" as const,
				label: "actual",
				backgroundColor: "#FA8231",
				data: data.map((item: { chartValue: number }) => item.chartValue),
				borderColor: "white",
				borderWidth: 2,
			},
		],
	};

	return (
		<div style={{ maxWidth: "1400px", width: "100%" }}>
			<Bar options={options} data={datas as any} />
		</div>
	);
}
