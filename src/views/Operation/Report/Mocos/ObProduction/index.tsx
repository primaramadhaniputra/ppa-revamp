import TabV3 from "molecules/TabV3";
import React, { useState } from "react";
import Dayli from "./Dayli";
import Hourly from "./Hourly";

const tabs = ["Hourly", "Daily", "Daily V.2", "Excavator Set", "Distance Dev"];

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <Hourly />;
	}
	if (activeTab === 1) {
		return <Dayli />;
	}
};

export default function ObProdution() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
