import React, { useEffect, useState } from "react";
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
	const [labels, setLabels] = useState(["0"]);
	const dataName = Object.keys(data[0]).filter(
		(item) => item !== "label" && item !== "value" && item !== "chartValue",
	);
	const dataValue = dataName.map((item) => {
		const value = data.map((name: { [x: string]: any }) => name[item]);
		return {
			label: item,
			data: value,
			backgroundColor: `hsl(${360 * Math.random()},${25 + 70 * Math.random()}%,${
				85 + 10 * Math.random()
			}%)`,
		};
	});
	useEffect(() => {
		const newLabels = data?.map((item: any) => item.label);
		setLabels(newLabels);
	}, [data]);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
				labels: {
					// padding: 30,
					boxWidth: 15,
				},
			},
			title: {
				display: true,
			},
		},
	};

	const datas = {
		labels,
		datasets: dataValue,
	};

	// const datas = {
	//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	//   datasets: [
	//     {
	//       type: 'line' as const,
	//       label: 'Dataset 1',
	//       borderColor: '#742774',
	//       borderWidth: 2,
	//       fill: false,
	//       data: [10, 50, 30, 40, 50, 60, 70],
	//       // borderDash: [7, 7],
	//       // stepped: true,
	//       tension: 0.4,
	//     },
	//     {
	//       type: 'line' as const,
	//       label: 'Dataset 1',
	//       borderColor: 'red',
	//       borderWidth: 2,
	//       fill: false,
	//       data: [20, 10, 30, 60, 20, 10, 100],
	//       borderDash: [7, 7],
	//       // stepped: true,
	//       tension: 0.4,
	//     },
	//     {
	//       type: 'line' as const,
	//       label: 'Dataset 1',
	//       borderColor: 'blue',
	//       borderWidth: 2,
	//       fill: false,
	//       data: [5, 50, 70, 10, 80, 10, 200],
	//       borderDash: [7, 7],
	//       // stepped: true,
	//       tension: 0.4,
	//     },
	//     {
	//       type: 'bar' as const,
	//       label: 'Dataset 2',
	//       backgroundColor: 'rgb(113, 76, 199)',
	//       data: [10, 50, 30, 40, 50, 60, 70],
	//       borderColor: 'white',
	//       borderWidth: 2,
	//     }
	//   ]
	// };

	return (
		<div style={{ maxWidth: "1400px", width: "100%" }}>
			<Bar options={options} data={datas} />
		</div>
	);
}
