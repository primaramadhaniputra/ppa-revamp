import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import DateText from "atoms/DateText";
import TopFilter from "src/components/organism/TopFilter";
import { TitleText, WrapperTable, WrapperTitle } from "../../../styles";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
	scales: {
		y: {
			min: 0,
			max: 8,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			display: false,
		},
		title: {
			display: false,
		},
	},
};

const labels = [
	"0 - 0.5km",
	"0.5 - 1km",
	"1 - 1.5km",
	"1.5 - 2km",
	"2 - 2.5km",
	"2.5 - 3km",
	"3 - 3.5km",
	"3.5 - 4km",
	"4 - 4.5km",
	"4.5 - 5km",
];

export const data = {
	labels,
	datasets: [
		{
			data: [2, 4, 1, 3, 5, 7, 2, 1, 4, 7],
			borderColor: "rgb(143,175,212)",
			backgroundColor: "rgb(79,129,188)",
			pointBorderWidth: 7,
			tension: 0.7,
		},
	],
};

export default function RoadGrade() {
	return (
		<>
			<WrapperTitle>
				<TitleText>Road Grade HD785</TitleText>
				<DateText />
			</WrapperTitle>
			<TopFilter />
			<WrapperTable>
				<Line options={options} data={data} />
			</WrapperTable>
		</>
	);
}
