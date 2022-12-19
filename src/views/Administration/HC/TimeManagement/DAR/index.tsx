import { Grid, ISelectItem, Select } from "@hudoro/neron";
import TitleText from "atoms/TitleText";
import React, { useState } from "react";
import TopFilter from "src/components/organism/TopFilter";
import { WrapperTitle } from "../../../styles";
import ActivityDar from "./ActivityDar";
import SummaryByActivity from "./SummaryByActivity";
import SummaryDar from "./SummaryDar";

const items = [
	{
		id: "0",
		label: "Activity Dar",
		values: "Activity Dar",
	},
	{
		id: "1",
		label: "Summary By Activity",
		values: "Summary By Activity",
	},
	{
		id: "2",
		label: "Summary Dar",
		values: "Summary Dar",
	},
];

const renderContent = (type: string) => {
	if (type === "Activity Dar") {
		return <ActivityDar />;
	} else if (type === "Summary By Activity") {
		return <SummaryByActivity />;
	} else {
		return <SummaryDar />;
	}
};

const DAR = () => {
	const [activeSelect, setActiveSelect] = useState("Activity Dar");

	const handleChange = (e: ISelectItem | ISelectItem[] | null) => {
		setActiveSelect(e?.values);
	};

	return (
		<>
			<WrapperTitle>
				<TitleText>DAR</TitleText>
			</WrapperTitle>
			<TopFilter />
			<Grid container justifyContent="center" style={{ margin: "20px 0" }}>
				<Grid style={{ maxWidth: "250px" }}>
					<Select items={items} defaultValue={items[0]} onChange={handleChange} />
				</Grid>
			</Grid>
			{renderContent(activeSelect)}
		</>
	);
};

export default DAR;
