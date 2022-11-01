import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const items = [
	{
		id: 0,
		values: "Bar",
		label: "Bar",
	},
	{
		id: 1,
		values: "Line",
		label: "Line",
	},
];

export default function DisplayChart() {
	const [activeChart, setActiveChart] = useState("Bar");

	const handleActiveChart = (value: ISelectItem | ISelectItem[] | null) => {
		setActiveChart(value?.values);
	};

	return (
		<>
			<Grid style={{ margin: "15px auto", maxWidth: "150px" }}>
				<Select
					placeholder="..."
					items={items}
					defaultValue={{
						id: 0,
						values: "Bar",
						label: "Bar",
					}}
					onChange={handleActiveChart}
				/>
			</Grid>
			{activeChart === "Bar" ? <BarChart /> : <LineChart />}
		</>
	);
}
