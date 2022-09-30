import TabV2 from "molecules/TabV2";
import React, { useState } from "react";

const tabTitle = ["Off Fire", "Breakdown", "Physical Availability", "HM Monitoring"];

// const renderContent = (activeTab: number) => {
// };

export default function BaseControl() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{/* {renderContent(activeTab)} */}
		</>
	);
}
