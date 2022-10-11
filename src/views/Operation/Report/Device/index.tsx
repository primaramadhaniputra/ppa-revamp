import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import MachineCondition from "./MachineCondition";
import Production from "./Production";

const tabTitle = ["Production", "Machine Condition"];

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <Production />;
	}
	if (activeTab === 1) {
		return <MachineCondition />;
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
