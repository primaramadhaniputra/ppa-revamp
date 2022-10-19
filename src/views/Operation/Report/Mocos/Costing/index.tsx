import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabs = ["Equipment", "Fuel", "Wet"];

const Equipment = dynamic(() => import("./Equipment"), {
	ssr: false,
});

const renderContent = (type: string) => {
	if (type === "Equipment") {
		return <Equipment />;
	}
};

export default function Costing() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</>
	);
}
