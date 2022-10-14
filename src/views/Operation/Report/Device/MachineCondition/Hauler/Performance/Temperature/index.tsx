import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const EngineOil = dynamic(() => import("./EngineOil"));
const Coolant = dynamic(() => import("./Coolant"));

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
];

const renderContent = (type: string) => {
	if (type === "ENGINE OIL") {
		return <EngineOil />;
	} else if (type === "COOLANT") {
		return <Coolant />;
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
