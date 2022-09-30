import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

const tabTitle = ["Fuel", "Lube", "Transportation"];

export default function SupportActivity() {
	const [activeTab, setActiveTab] = useState(0);

	return <TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />;
}
