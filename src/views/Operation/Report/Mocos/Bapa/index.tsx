import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

const tabs = ["A2B", "A2S"];

export default function Bapa() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
		</>
	);
}
