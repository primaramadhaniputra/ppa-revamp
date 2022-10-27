import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Achievement from "./Achievement";
// import { Wrapper } from "./styles";

const MonitoringSap = dynamic(() => import("./MonitoringSap"));

const p2hTab = ["MONITORING SAP", "ACHIVEMENT"];

function renderTabContent(e: String) {
	if (e === "MONITORING SAP") {
		return <MonitoringSap />;
	} else if (e === "ACHIVEMENT") {
		return <Achievement />;
	}
}

export default function Sap() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={p2hTab} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderTabContent(p2hTab[activeTab])}
		</>
	);
}
