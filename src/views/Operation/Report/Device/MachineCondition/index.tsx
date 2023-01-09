import TabV3 from "molecules/TabV3";
import React, { useState } from "react";
import Hauler from "./Hauler";
import Loader from "./Loader";

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
