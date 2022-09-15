import React from "react";
import { TitleChart } from "./styles";
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
import { WrapperTable } from "../../styles";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const options = {
	plugins: {
		legend: {
			display: false,
		},
	},
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
	},
};

const labels = [
	"January",
	"February",
	"March",
	"April",
	"Mei",
	"Juni",
	"July",
	"Agustus",
	"September",
	"November",
	"Oktober",
	"Desember",
];

const data = {
	labels,
	datasets: [
		{
			label: "First Aid Injury",
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			backgroundColor: "#3B7DDD",
		},
	],
};

export default function SafetyPerformanceBar() {
	return (
		<WrapperTable style={{ marginTop: "20px" }}>
			<TitleChart>Safety Performance</TitleChart>
			<Bar options={options as any} data={data as any} style={{ maxHeight: "400px" }} />
		</WrapperTable>
	);
}
