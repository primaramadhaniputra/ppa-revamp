import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Summary = dynamic(() => import("./Summary"));
const Refueling = dynamic(() => import("./Refueling"));
const Flowmeter = dynamic(() => import("./Flowmeter"));

const selectData = [
	{
		id: "0",
		label: "SUMMARY",
		values: "SUMMARY",
	},
	{
		id: "1",
		label: "REFUELING",
		values: "REFUELING",
	},
	{
		id: "2",
		label: "FLOWMETER",
		values: "FLOWMETER",
	},
];

const renderContent = (type: string) => {
	if (type === "SUMMARY") {
		return <Summary />;
	} else if (type === "REFUELING") {
		return <Refueling />;
	} else if (type === "FLOWMETER") {
		return <Flowmeter />;
	}
};

export default function Fuel() {
	const [activeTab, setActiveTab] = useState("SUMMARY");

	const handleChange = (e: ISelectItem | ISelectItem[] | null) => {
		setActiveTab(e?.values);
	};

	return (
		<>
			<Grid style={{ maxWidth: "250px", margin: "20px auto 0" }}>
				<Select items={selectData} defaultValue={selectData[0]} onChange={handleChange} />
			</Grid>
			{renderContent(activeTab)}
		</>
	);
}
