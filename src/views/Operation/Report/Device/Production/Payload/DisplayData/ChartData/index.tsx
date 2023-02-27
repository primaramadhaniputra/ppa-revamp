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
}

export default function ChartData({ data }: IProps) {
	const options = {
		responsive: false,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: "top" as const,
				labels: {
					boxWidth: 15,
				},
			},
			title: {
				display: true,
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
			},
		],
	};

	return (
		<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
			<Bar options={options} data={datas as any} height={300} />
		</div>
	);
}
