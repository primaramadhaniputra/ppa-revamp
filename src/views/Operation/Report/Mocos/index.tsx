import TabV2 from "molecules/TabV2";
import React, { useState } from "react";
import Bapa from "./Bapa";
import CoalProdution from "./CoalProduction";
import Costing from "./Costing";
import ObProdution from "./ObProduction";
import OreProdution from "./OreProduction";
import Productivity from "./Productivity";
import Unit from "./Unit";

const tabTitle = [
	"OB Production",
	"Coal Production",
	"Ore Production",
	"Costing",
	"Productivity",
	"BAPA",
	"Unit",
	"HPR",
];

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <ObProdution />;
	} else if (activeTab === 1) {
		return <CoalProdution />;
	} else if (activeTab === 2) {
		return <OreProdution />;
	} else if (activeTab === 3) {
		return <Costing />;
	} else if (activeTab === 4) {
		return <Productivity />;
	} else if (activeTab === 5) {
		return <Bapa />;
	} else if (activeTab === 6) {
		return <Unit />;
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
