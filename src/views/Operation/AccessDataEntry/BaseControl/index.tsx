import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
const tabTitle = ["BreakDown", "Cs Periodik Sevice"];

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
