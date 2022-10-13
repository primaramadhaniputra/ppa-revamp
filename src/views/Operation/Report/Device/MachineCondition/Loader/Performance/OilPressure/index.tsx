import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Engine = dynamic(() => import("./Engine"));
const PumpNo1 = dynamic(() => import("./PumpNo1"));
const PumpNo2 = dynamic(() => import("./PumpNo2"));
const FanPump = dynamic(() => import("./FanPump"));

const items = [
	{
		id: "1",
		label: "ENGINE",
		values: "ENGINE",
	},
	{
		id: "2",
		label: "PUMP NO 1",
		values: "PUMP NO 1",
	},
	{
		id: "3",
		label: "PUMP NO 2",
		values: "PUMP NO 2",
	},
	{
		id: "4",
		label: "FAN PUMP",
		values: "FAN PUMP",
	},
];

const renderContent = (type: string) => {
	if (type === "ENGINE") {
		return <Engine />;
	} else if (type === "PUMP NO 1") {
		return <PumpNo1 />;
	} else if (type === "PUMP NO 2") {
		return <PumpNo2 />;
	} else if (type === "FAN PUMP") {
		return <FanPump />;
	}
};

const OilPressure = () => {
	const [activeContent, setActiveContent] = useState("ENGINE");

	const handleActiveContent = (e: ISelectItem | ISelectItem[] | null) => {
		setActiveContent(e?.values);
	};

	return (
		<>
			<Grid style={{ marginTop: "20px" }}>
				<Select items={items} defaultValue={items[0]} onChange={handleActiveContent} />
			</Grid>
			{renderContent(activeContent)}
		</>
	);
};

export default OilPressure;
