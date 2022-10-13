import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
	plugins: {
		legend: {
			display: false,
		},
	},
};
export const data = {
	labels: ["testing", "testing"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 3],
			backgroundColor: ["#00BFFF", "#808080"],
			borderWidth: 0,
		},
	],
};

const DoughnutChart = () => {
	return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
