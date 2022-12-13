import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const tabTitle = ["BreakDown", "Cs Periodik Sevice"];

const BreakDown = dynamic(() => import("./BreakDown"), {
	ssr: false,
});

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <BreakDown />;
	}
};

export default function BaseControl() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
