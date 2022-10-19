import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import All from "./All";
import AllByLoader from "./AllByLoader";

const tabs = [
	"Payload",
	"Empty Stop",
	"Loading Time",
	"Speed",
	"Loaded Speed",
	"Empty Speed",
	"All",
	"All By Loader",
];

const DynamicPayloadView = dynamic(() => import("./Payload"));
const DynamicEmptyStopView = dynamic(() => import("./EmptyStop"));
const DynamicLoadingTimeView = dynamic(() => import("./LoadingTime"));
const DynamicSpeedView = dynamic(() => import("./Speed"));
const DynamicLoadedSpeedView = dynamic(() => import("./LoadedSpeed"));

const renderContent = (type: number) => {
	if (type === 0) {
		return <DynamicPayloadView />;
	} else if (type === 1) {
		return <DynamicEmptyStopView />;
	} else if (type === 2) {
		return <DynamicLoadingTimeView />;
	} else if (type === 3) {
		return <DynamicSpeedView />;
	} else if (type === 4) {
		return <DynamicLoadedSpeedView />;
	} else if (type === 5) {
		return <DynamicEmptyStopView />;
	} else if (type === 6) {
		return <All />;
	} else if (type === 7) {
		return <AllByLoader />;
	}
};

export default function Production() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
