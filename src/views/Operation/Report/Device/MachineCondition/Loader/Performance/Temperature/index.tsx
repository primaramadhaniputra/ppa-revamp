import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const EngineOil = dynamic(() => import("./EngineOil"));
const Coolant = dynamic(() => import("./Coolant"));
const Hydraulic = dynamic(() => import("./Hydraulic"));
const Pto = dynamic(() => import("./Pto"));

const items = [
	{
		id: "1",
		label: "ENGINE OIL",
		values: "ENGINE OIL",
	},
	{
		id: "2",
		label: "COOLANT",
		values: "COOLANT",
	},
	{
		id: "3",
		label: "HYDRAULIC",
		values: "HYDRAULIC",
	},
	{
		id: "4",
		label: "PTO",
		values: "PTO",
	},
];

const renderContent = (type: string) => {
	if (type === "ENGINE OIL") {
		return <EngineOil />;
	} else if (type === "COOLANT") {
		return <Coolant />;
	} else if (type === "HYDRAULIC") {
		return <Hydraulic />;
	} else if (type === "PTO") {
		return <Pto />;
	}
};

const Temperature = () => {
	const [activeContent, setActiveContent] = useState("ENGINE OIL");

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

export default Temperature;
