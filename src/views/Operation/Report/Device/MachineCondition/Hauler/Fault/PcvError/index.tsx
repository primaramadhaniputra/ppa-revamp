import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const ImvPcv1 = dynamic(() => import("./ImvPcv1"));
const Pcv2 = dynamic(() => import("./Pcv2"));

const items = [
	{
		id: "1",
		label: "IMV/PCV1",
		values: "IMV/PCV1",
	},
	{
		id: "2",
		label: "PCV2",
		values: "PCV2",
	},
];

const renderContent = (type: string) => {
	if (type === "IMV/PCV1") {
		return <ImvPcv1 />;
	} else if (type === "PCV2") {
		return <Pcv2 />;
	}
};

const PcvError = () => {
	const [activeContent, setActiveContent] = useState("IMV/PCV1");

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

export default PcvError;
