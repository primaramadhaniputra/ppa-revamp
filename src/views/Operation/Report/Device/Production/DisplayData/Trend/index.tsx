import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
);

interface IProps {
	datas:
		| {
				target: number;
				data: {
					[x: string]: any;
					date: string;
				}[];
		  }
		| undefined;
}

export default function Trend({ datas }: IProps) {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
				display: false,
			},
			title: {
				display: true,
			},
		},
	};

	const labels = datas?.data?.map((item) => item.date);
	const dataTrend = datas?.data.map((item) => {
		const dataName = Object.keys(item)[1];
		return item[dataName];
	});
	dataTrend?.push(datas?.target as number);

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: "Payload",
				data: dataTrend,
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return <Line options={options} data={data} height={300} style={{ maxHeight: 300 }} />;
}
