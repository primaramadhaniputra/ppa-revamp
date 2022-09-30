import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import SupportActivity from "./SupportActivity";

const tabTitle = ["HM Operator", "HM By Activity", "Support Activity", "ACH Operator"];

const renderContent = (activeTab: number) => {
	if (activeTab === 2) {
		return <SupportActivity />;
	}
};

export default function Mobile() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
