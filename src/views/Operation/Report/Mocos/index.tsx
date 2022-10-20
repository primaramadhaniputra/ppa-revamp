import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Unit = dynamic(() => import("./Unit"));
const Productivity = dynamic(() => import("./Productivity"));
const OreProduction = dynamic(() => import("./OreProduction"));
const ObProduction = dynamic(() => import("./ObProduction"));
const Costing = dynamic(() => import("./Costing"));
const CoalProduction = dynamic(() => import("./CoalProduction"));
const Bapa = dynamic(() => import("./Bapa"));
const Hpr = dynamic(() => import("./Hpr"));
const MohhDaily = dynamic(() => import("./MohhDaily"));

const tabTitle = [
	"OB Production",
	"Coal Production",
	"Ore Production",
	"Costing",
	"Productivity",
	"BAPA",
	"Unit",
	"HPR",
	"MOHH DAILY",
];

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <ObProduction />;
	} else if (activeTab === 1) {
		return <CoalProduction />;
	} else if (activeTab === 2) {
		return <OreProduction />;
	} else if (activeTab === 3) {
		return <Costing />;
	} else if (activeTab === 4) {
		return <Productivity />;
	} else if (activeTab === 5) {
		return <Bapa />;
	} else if (activeTab === 6) {
		return <Unit />;
	} else if (activeTab === 7) {
		return <Hpr />;
	} else if (activeTab === 8) {
		return <MohhDaily />;
	}
};

export default function Mocos() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
