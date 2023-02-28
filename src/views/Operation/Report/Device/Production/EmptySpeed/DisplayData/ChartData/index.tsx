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
	heigth: string;
	data: any;
}

export default function ChartData({ data, heigth }: IProps) {
	console.log("data", data);
	const options = {
		responsive: true,
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
				type: "bar" as const,
				label: "actual",
				backgroundColor: "#FA8231",
				data: data.map((item: { chartValue: number }) => item.chartValue),
				borderColor: "white",
				borderWidth: 2,
			},
		],
	};

	return <Bar options={options} data={datas as any} height={`${heigth}!important`} />;
}