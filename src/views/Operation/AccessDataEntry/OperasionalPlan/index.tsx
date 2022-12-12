import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TitleText, WrapperTitle } from "../styles";

const Monthly = dynamic(() => import("./Monthly"), { ssr: false });
const Daily = dynamic(() => import("./Daily"), { ssr: false });
const Idle = dynamic(() => import("./Idle"), { ssr: false });

const data = [
	{
		id: "1",
		label: "Monthly",
		values: "Monthly",
	},
	{
		id: "2",
		label: "Dayli",
		values: "Dayli",
	},
	{
		id: "3",
		label: "Idle",
		values: "Idle",
	},
];

const renderContent = (type: string) => {
	if (type === "Monthly") {
		return <Monthly />;
	} else if (type === "Dayli") {
		return <Daily />;
	} else if (type === "Idle") {
		return <Idle />;
	}
};

export default function OperasionalPlant() {
	const [tableType, setTableType] = useState("Monthly");

	const handleChange = (e: ISelectItem | ISelectItem[] | null) => {
		setTableType(e?.values);
	};
	return (
		<>
			<WrapperTitle style={{ marginTop: "20px" }}>
				<TitleText>Operasional Plan</TitleText>
			</WrapperTitle>
			<Grid style={{ margin: "10px auto", maxWidth: "250px" }}>
				<Select items={data} defaultValue={data[0]} onChange={handleChange} />
			</Grid>
			{renderContent(tableType)}
		</>
	);
}
