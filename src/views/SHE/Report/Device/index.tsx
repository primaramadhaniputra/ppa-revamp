import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Wrapper } from "./styles";

const Enviro = dynamic(() => import("./Enviro"), {
	ssr: false,
});
const RoadTracking = dynamic(() => import("./RoadTracking"), {
	ssr: false,
});
const FatigueMonitor = dynamic(() => import("./FatigueMonitor"), {
	ssr: false,
});
const Speed = dynamic(() => import("./Speed"), {
	ssr: false,
});
const DumpControl = dynamic(() => import("./DumpControl"), {
	ssr: false,
});

const tabTitle = [
	"Road Tracking",
	"Fatigue Monitor",
	"Fleet Monitoring",
	"Speed",
	"Dump Control",
	"Enviro",
];

const renderContet = (type: string) => {
	if (type === "Enviro") {
		return <Enviro />;
	} else if (type === "Road Tracking") {
		return <RoadTracking />;
	} else if (type === "Fatigue Monitor") {
		return <FatigueMonitor />;
	} else if (type === "Speed") {
		return <Speed />;
	} else if (type === "Dump Control") {
		return <DumpControl />;
	}
};

export default function Device() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Wrapper>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContet(tabTitle[activeTab])}
		</Wrapper>
	);
}
