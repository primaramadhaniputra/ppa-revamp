import { Grid, ISelectItem, Select } from "@hudoro/neron";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";
import FlowMeter from "./Flowmeter";

const data = [
	{
		id: "1",
		label: "Flowmeter",
		values: "Flowmeter",
	},
	{
		id: "2",
		label: "Station",
		values: "Station",
	},
];

export default function FuelStation() {
	const [tableType, setTableType] = useState("Flowmeter");

	const handleChange = (e: ISelectItem | ISelectItem[] | null) => {
		setTableType(e?.values);
	};
	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Fuel Station</TitleText>
			</WrapperTitle>
			<Grid style={{ margin: "10px auto", maxWidth: "250px" }}>
				<Select items={data} defaultValue={data[0]} onChange={handleChange} />
			</Grid>
			{tableType === "Flowmeter" ? <FlowMeter /> : <FlowMeter />}
		</>
	);
}
