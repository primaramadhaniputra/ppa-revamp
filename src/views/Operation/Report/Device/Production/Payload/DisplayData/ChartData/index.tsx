import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
} from "chart.js";
import React from "react";

import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
);

interface IProps {
	data: any;
	isActive: boolean;
}

function ChartData({ data, isActive }: IProps) {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
				display: isActive ? true : false,
				labels: {
					boxWidth: 15,
				},
			},
			title: {
				display: true,
			},
		},
		scales: {
			x: {
				grid: {
					borderDash: [8, 4],
					display: isActive ? true : false,
				},
			},
			y: {
				grid: {
					borderDash: [8, 4],
					display: isActive ? true : false,
				},
			},
		},
	};

	const datas = {
		labels: data.map((item: { label: string }) => item.label),
		datasets: [
			{
				type: "line" as const,
				label: "actual",
				borderColor: "#696969",
				backgroundColor: "#696969",
				borderWidth: 1,
				fill: false,
				data: data.map((item: { actual: number }) => item.actual),
				tension: 0.4,
			},
			{
				type: "line" as const,
				label: "komatsu",
				borderColor: "#1A2ADB",
				backgroundColor: "#1A2ADB",
				borderWidth: 1,
				fill: false,
				data: data.map((item: { komatsu: number }) => item.komatsu),
				borderDash: [10, 10],
				tension: 0.4,
			},
			{
				type: "line" as const,
				label: "ppa",
				borderColor: "#21AD1A",
				backgroundColor: "#21AD1A",
				borderWidth: 1,
				fill: false,
				data: data.map((item: { ppa: number }) => item.ppa),
				borderDash: [10, 10],
				tension: 0.4,
			},
			{
				type: "bar" as const,
				label: "actual",
				backgroundColor: [
					"#FFEA00",
					"#FFEA00",
					"#FFEA00",
					"#76FF03",
					"#76FF03",
					"#76FF03",
					"#76FF03",
					"#76FF03",
					"#76FF03",
					"#FF3D00",
					"#FF3D00",
				],
				data: data.map((item: { actual: number }) => item.actual),
				borderColor: "white",
				borderWidth: 2,
				borderRadius: 15,
			},
		],
	};

	return <Bar options={options} data={datas as any} height={300} style={{ maxHeight: 300 }} />;
}

export default React.memo(ChartData);
