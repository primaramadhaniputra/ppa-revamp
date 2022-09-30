import TabV3 from "molecules/TabV3";
import React, { useState } from "react";

export default function HPR() {
	const [activeTab, setActiveTab] = useState(0);
	const tabTitle = ["Master", "Form"];

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
		</>
	);
}
