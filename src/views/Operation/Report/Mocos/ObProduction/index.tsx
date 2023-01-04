import TabV3 from "molecules/TabV3";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabs = ["Hourly", "Daily", "Excavator Set", "Distance Dev"];

const Hourly = dynamic(() => import("./Hourly"), { ssr: false });
const ExcavatorSet = dynamic(() => import("./ExcavatorSet"), { ssr: false });
const DistanceDev = dynamic(() => import("./DistanceDev"), { ssr: false });
const Dayli = dynamic(() => import("./Dayli"), { ssr: false });

const renderContent = (activeTab: number) => {
	if (activeTab === 0) {
		return <Hourly />;
	} else if (activeTab === 1) {
		return <Dayli />;
	} else if (activeTab === 3) {
		return <DistanceDev />;
	} else if (activeTab === 2) {
		return <ExcavatorSet />;
	}
};

export default function ObProdution() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV3 tabsData={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
