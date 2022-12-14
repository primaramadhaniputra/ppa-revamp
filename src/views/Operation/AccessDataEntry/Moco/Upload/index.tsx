import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabTitle = ["HPR", "Coal Hauling", "Weather", "Coal Exposed", "Mincon", "Ore"];

const Hpr = dynamic(() => import("./Hpr"), {
	ssr: false,
});
const Weather = dynamic(() => import("./Weather"), {
	ssr: false,
});
const CoalExposed = dynamic(() => import("./CoalExposed"), {
	ssr: false,
});
const Mincon = dynamic(() => import("./Mincon"), {
	ssr: false,
});
const Ore = dynamic(() => import("./Ore"), {
	ssr: false,
});

const renderContent = (type: string) => {
	if (type === "HPR") {
		return <Hpr />;
	} else if (type === "Weather") {
		return <Weather />;
	} else if (type === "Coal Exposed") {
		return <CoalExposed />;
	} else if (type === "Mincon") {
		return <Mincon />;
	} else if (type === "Ore") {
		return <Ore />;
	}
};

export default function Upload() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(tabTitle[activeTab])}
		</>
	);
}
