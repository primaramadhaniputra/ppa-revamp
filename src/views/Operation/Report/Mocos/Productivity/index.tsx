import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Hm = dynamic(() => import("./Hm"));

const tabs = ["By HM", "By Material", "By Operator", "By Operator(Beta)"];

const renderContent = (type: string) => {
	if (type === "By HM") {
		return <Hm />;
	}
};

export default function Productivity() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</>
	);
}
