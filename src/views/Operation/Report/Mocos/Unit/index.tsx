import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

const tabs = ["Breakdown Monitoring", "HM Monitoring"];

export default function Unit() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
		</>
	);
}
