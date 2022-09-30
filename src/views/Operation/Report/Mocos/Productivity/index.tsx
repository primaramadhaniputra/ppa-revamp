import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

const tabs = ["By HM", "By Material", "By Operator", "By Operator(Beta)"];

export default function Productivity() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
		</>
	);
}
