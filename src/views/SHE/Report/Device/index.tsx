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
