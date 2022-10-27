import { Grid } from "@hudoro/neron";
import TabV4 from "molecules/TabV4";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Individual = dynamic(() => import("./Individual"));
const Department = dynamic(() => import("./Department"));
const IndividualYtd = dynamic(() => import("./IndividualYtd"));

const p2hTab = ["INDIVIDUAL", "DEPARTMENT", "INDIVIDUAL YTD"];

function renderTabContent(e: String) {
	if (e === "INDIVIDUAL") {
		return <Individual />;
	} else if (e === "DEPARTMENT") {
		return <Department />;
	} else if (e === "INDIVIDUAL YTD") {
		return <IndividualYtd />;
	}
}

export default function Achievement() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Grid style={{ margin: "20px 0" }}>
			<TabV4 tabText={p2hTab} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderTabContent(p2hTab[activeTab])}
		</Grid>
	);
}
