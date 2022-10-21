import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import BreakDown from "./BreakDown";
import HmMonitoring from "./HmMonitoring";
import OffFire from "./OffFire";
import PhysicalAvailability from "./PhysicalAvailability";

const tabTitle = ["Off Fire", "Breakdown", "Physical Availability", "HM Monitoring"];

const renderContent = (activeTab: string) => {
	if (activeTab === "Off Fire") {
		return <OffFire />;
	} else if (activeTab === "Breakdown") {
		return <BreakDown />;
	} else if (activeTab === "Physical Availability") {
		return <PhysicalAvailability />;
	} else if (activeTab === "HM Monitoring") {
		return <HmMonitoring />;
	}
};

export default function BaseControl() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</>
	);
}
