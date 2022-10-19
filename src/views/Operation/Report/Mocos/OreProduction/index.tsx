import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabs = ["Hourly", "Daily"];

const Hourly = dynamic(() => import("./Hourly"));
const Daily = dynamic(() => import("./Daily"));

const renderContent = (tab: string) => {
	if (tab === "Hourly") {
		return <Hourly />;
	} else if (tab === "Daily") {
		return <Daily />;
	}
};

export default function OreProdution() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</>
	);
}
