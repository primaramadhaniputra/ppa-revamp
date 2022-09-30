import { Grid, ISelectItem, Select, Text } from "@hudoro/neron";
import { IcClose } from "atoms/Icon";
import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { Wrapper } from "./styles";

interface IProps {
	setisChart: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export default function DisplayChart({ setisChart }: IProps) {
	const [activeChart, setActiveChart] = useState("Bar");

	const handleActiveChart = (value: ISelectItem | ISelectItem[] | null) => {
		setActiveChart(value?.values);
	};

	return (
		<Wrapper>
			<Grid container justifyContent="space-between">
				<Text variant="h4" style={{ fontSize: "15px" }}>
					Hourly Production on August 24, 2022
				</Text>
				<IcClose width={18} cursor="pointer" onClick={() => setisChart(false)} />
			</Grid>
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
		</Wrapper>
	);
}
