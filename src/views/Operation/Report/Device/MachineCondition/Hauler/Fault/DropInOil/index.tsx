import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Engine = dynamic(() => import("./Engine"));
const Hydraulic = dynamic(() => import("./Hydraulic"));
const Tm = dynamic(() => import("./Tm"));

const items = [
	{
		id: "1",
		label: "ENGINE",
		values: "ENGINE",
	},
	{
		id: "2",
		label: "HYDRAULIC",
		values: "HYDRAULIC",
	},
	{
		id: "3",
		label: "T/M",
		values: "T/M",
	},
];

const renderContent = (type: string) => {
	if (type === "ENGINE") {
		return <Engine />;
	} else if (type === "HYDRAULIC") {
		return <Hydraulic />;
	} else if (type === "T/M") {
		return <Tm />;
	}
};

const DropInOil = () => {
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

export default DropInOil;
