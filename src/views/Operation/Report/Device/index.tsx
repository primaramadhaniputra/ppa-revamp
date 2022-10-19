import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Production = dynamic(() => import("./Production"), {
	ssr: false,
});
const MachineCondition = dynamic(() => import("./MachineCondition"), {
	ssr: false,
});

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
