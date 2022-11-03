import { Grid } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React from "react";
import { Item } from "../styles";
import DoughnutChart from "./DoughnutChart";
import GridChart from "./GridChart";
import PieChart from "./PieChart";
import TitleHcga from "./TitleHcga";

const LineChart = dynamic(() => import("./LineChart"), {
	ssr: false,
});

export default function HCGA() {
	return (
		<>
			<TitleHcga />
			<Grid container gap={20}>
				<Item style={{ flex: 5, boxShadow: "0 1px 3px rgba(0,0,0,.1)" }}>
					<DoughnutChart />
				</Item>
				<Item style={{ flex: 5, boxShadow: "0 1px 3px rgba(0,0,0,.1)" }}>
					<PieChart />
				</Item>
				<Item style={{ flex: 1, boxShadow: "0 1px 3px rgba(0,0,0,.1)" }}>
					<GridChart />
				</Item>
				<Item style={{ flex: 5, boxShadow: "0 1px 3px rgba(0,0,0,.1)" }}>
					<LineChart />
				</Item>
			</Grid>
		</>
	);
}
