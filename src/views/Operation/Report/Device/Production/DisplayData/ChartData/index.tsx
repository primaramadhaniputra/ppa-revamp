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
	isActive: boolean;
}

export default function ChartData({ data, isActive }: IProps) {
	console.log("data", data);
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: isActive ? true : false,
				labels: {
					boxWidth: 25,
					boxHeight: 25,
					usePointStyle: true,
					pointStyle: "rectRounded",
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
		labels: data.map((item: { value: string }) => item.value),
		datasets: [
			{
				type: "bar" as const,
				label: "actual",
				backgroundColor: "#FA8231",
				data: data.map((item: { chartValue: number }) => item.chartValue),
				borderColor: "white",
				borderWidth: 2,
				borderRadius: 15,
			},
		],
	};

	return <Bar options={options} data={datas as any} height={300} style={{ maxHeight: "300px" }} />;
}
