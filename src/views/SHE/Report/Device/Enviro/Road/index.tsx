import { Grid, ISelectItem, Select } from "@hudoro/neron";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "../../styles";

const RoadGrade = dynamic(() => import("./RoadGrade"));

const tabTitle = [
	{
		id: "1",
		label: "Road Grade",
		values: "Road Grade",
	},
	{
		id: "2",
		label: "Distance",
		values: "Distance",
	},
];

const renderContent = (type: string) => {
	if (type === "Road Grade") {
		return <RoadGrade />;
	}
};

export default function Road() {
	const [activeTab, setActiveTab] = useState("Road Grade");

	const handleChangeActiveTab = (e: ISelectItem | ISelectItem[] | null) => {
		setActiveTab(e?.values);
	};

	return (
		<Wrapper>
			<Grid style={{ margin: "20px auto ", maxWidth: "250px" }}>
				<Select items={tabTitle} defaultValue={tabTitle[0]} onChange={handleChangeActiveTab} />
			</Grid>
			{renderContent(activeTab)}
		</Wrapper>
	);
}
