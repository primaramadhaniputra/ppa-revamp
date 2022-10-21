import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import OffFire from "./OffFire";

const tabTitle = ["Off Fire", "Breakdown", "Physical Availability", "HM Monitoring"];

const renderContent = (activeTab: string) => {
	if (activeTab === "Off Fire") {
		return <OffFire />;
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
