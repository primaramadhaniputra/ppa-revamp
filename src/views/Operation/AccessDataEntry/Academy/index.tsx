import TabV2 from "molecules/TabV2";
import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

const tabTitle = ["Post Test"];
const tabTitle2 = ["Subject", "Question", "Schedule"];

const renderContent = (activeTab: number) => {
	if (activeTab === 2) {
		// return <SupportActivity />;
	}
};

export default function Academy() {
	const [activeTab, setActiveTab] = useState(0);
	const [activeTab2, setActiveTab2] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			<TabV3 tabsData={tabTitle2} activeTab={activeTab2} setActiveTab={setActiveTab2} />
			{renderContent(activeTab)}
		</>
	);
}
