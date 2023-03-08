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
	ScriptableContext,
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
				backgroundColor: (context: ScriptableContext<"line">) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 280);
					gradient.addColorStop(0, "rgba(137, 168, 245, 0.3)");
					gradient.addColorStop(1, "rgba(40, 95, 231, 0)");
					return gradient;
				},
			},
		],
	};
	return <Line options={options} data={data} height={300} style={{ maxHeight: 300 }} />;
}
