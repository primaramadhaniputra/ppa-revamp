import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import Production from "./Production";

const tabTitle = ["Production", "Machine Condition"];

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <Production />;
	}
};

export default function Device() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
