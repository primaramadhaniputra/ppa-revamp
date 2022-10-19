import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Loader = dynamic(() => import("./Loader"));
const Hauler = dynamic(() => import("./Hauler"));

const tabs = ["Loader", "Hauler"];

const renderContent = (type: number) => {
	if (type === 0) {
		return <Loader />;
	} else if (type === 1) {
		return <Hauler />;
	}
};

export default function MachineCondition() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
