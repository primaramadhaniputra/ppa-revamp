import TabV3 from "molecules/TabV3";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const tabs = ["Breakdown Monitoring", "HM Monitoring"];

const BreakDownMonitoring = dynamic(() => import("./BreakdownMonitoring"));
const HmMonitoring = dynamic(() => import("./HmMonitoring"));

const renderContent = (type: string) => {
	if (type === "Breakdown Monitoring") {
		return <BreakDownMonitoring />;
	} else {
		return <HmMonitoring />;
	}
};

export default function Unit() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</>
	);
}
