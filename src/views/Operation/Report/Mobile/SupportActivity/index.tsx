import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Transportation = dynamic(() => import("./Transportation"), { ssr: false });
const Lube = dynamic(() => import("./Lube"), { ssr: false });
const Fuel = dynamic(() => import("./Fuel"), { ssr: false });

const tabTitle = ["Fuel", "Lube", "Transportation"];

const renderContent = (type: string) => {
	if (type === "Fuel") {
		return <Fuel />;
	} else if (type === "Lube") {
		return <Lube />;
	} else if (type === "Transportation") {
		return <Transportation />;
	}
};

export default function SupportActivity() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</>
	);
}
