import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Unit = dynamic(() => import("./Unit"), { ssr: false });
const Productivity = dynamic(() => import("./Productivity"), { ssr: false });
const OreProduction = dynamic(() => import("./OreProduction"), { ssr: false });
const ObProduction = dynamic(() => import("./ObProduction"), { ssr: false });
const Costing = dynamic(() => import("./Costing"), { ssr: false });
const CoalProduction = dynamic(() => import("./CoalProduction"), { ssr: false });
const Bapa = dynamic(() => import("./Bapa"), { ssr: false });
const Hpr = dynamic(() => import("./Hpr"), { ssr: false });
const MohhDaily = dynamic(() => import("./MohhDaily"), { ssr: false });

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
