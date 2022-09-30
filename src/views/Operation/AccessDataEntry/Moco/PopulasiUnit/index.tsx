import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

export default function PopulasiUnit() {
	const [activeTab, setActiveTab] = useState(0);
	const tabTitle = ["Current", "Daily"];

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
		</>
	);
}
