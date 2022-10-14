import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const EngineOil = dynamic(() => import("./EngineOil"));
const Coolant = dynamic(() => import("./Coolant"));

const items = [
	{
		id: "1",
		label: "ENGINE",
		values: "ENGINE",
	},
	{
		id: "2",
		label: "TRANSMISI",
		values: "TRANSMISI",
	},
];

const renderContent = (type: string) => {
	if (type === "ENGINE") {
		return <EngineOil />;
	} else if (type === "TRANSMISI") {
		return <Coolant />;
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
