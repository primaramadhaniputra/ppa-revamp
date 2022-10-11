import TabV3 from "molecules/TabV3";
import React, { useState } from "react";
import CoalTable from "./CoalTable";

const tabs = ["Daily"];

export default function CoalProdution() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			<CoalTable />
		</>
	);
}
