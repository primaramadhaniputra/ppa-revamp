import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const A2B = dynamic(() => import("./A2B"));

const tabs = ["A2B", "A2S"];

const renderContent = (type: string) => {
	if (type === "A2B") {
		return <A2B />;
	}
};

export default function Bapa() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</>
	);
}
