import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const options = {
	scales: {
		r: {
			angleLines: {
				display: false,
			},
			suggestedMin: 1,
			suggestedMax: 11,
		},
	},
};

export const data = {
	labels: ["EST", "PAYLOAD", "LOAD TIME", "SPEED", "PRDTY", "FUEL"],
	datasets: [
		{
			label: "# of Votes",
			data: [10, 10, 10, 10, 10, 10],
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgba(255, 99, 132, 1)",
			borderWidth: 1,
		},
	],
};

const LineChart = () => {
	return <Radar data={data} options={options} style={{ maxHeight: "800px" }} />;
};

export default LineChart;
