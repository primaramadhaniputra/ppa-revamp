import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

export default function Upload() {
	const [activeTab, setActiveTab] = useState(0);
	const tabTitle = ["HPR", "Coal Hauling", "Weather", "Coal Exposed", "Mincon", "Ore"];

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
		</>
	);
}
