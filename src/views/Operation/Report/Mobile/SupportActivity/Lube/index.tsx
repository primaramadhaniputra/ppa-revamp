import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const History = dynamic(() => import("./History"));
const Detail = dynamic(() => import("./Detail"));

const selectData = [
	{
		id: "0",
		label: "Detail",
		values: "Detail",
	},
	{
		id: "1",
		label: "History",
		values: "History",
	},
];

const renderContent = (type: string) => {
	if (type === "Detail") {
		return <Detail />;
	} else if (type === "History") {
		return <History />;
	}
};

export default function Lube() {
	const [activeTab, setActiveTab] = useState("Detail");

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
