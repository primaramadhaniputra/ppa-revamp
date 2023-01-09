import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Equipment from "./Equipment";
import Fuel from "./Fuel";

const tabs = ["Equipment", "Fuel", "Wet"];

const Wet = dynamic(() => import("./Wet"), { ssr: false });

const renderContent = (type: string) => {
	if (type === "Equipment") {
		return <Equipment />;
	} else if (type === "Fuel") {
		return <Fuel />;
	} else if (type === "Wet") {
		return <Wet />;
	}
};

export default function Costing() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabs[activeTab])}
		</>
	);
}
