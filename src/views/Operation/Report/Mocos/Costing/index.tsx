import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

const tabs = ["Equipment", "Fuel", "Wet"];

export default function Costing() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
		</>
	);
}
