import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import HPR from "./HPR";
import PopulasiUnit from "./PopulasiUnit";
import Upload from "./Upload";

const HmBreakdownRevision = dynamic(() => import("./HmBreakdownRevision"), {
	ssr: false,
});

const tabTitle = [
	"HM Revision",
	"HM Breakdown Revision",
	"Populasi Unit",
	"Breakdown",
	"ABS Activity",
	"Fuel Rate",
	"HPR",
	"Upload",
	"Form Deviasi Fuel",
	"Ruas jalan",
];

const renderContent = (activeTab: number) => {
	if (activeTab === 2) {
		return <PopulasiUnit />;
	} else if (activeTab === 6) {
		return <HPR />;
	} else if (activeTab === 7) {
		return <Upload />;
	} else if (activeTab === 1) {
		return <HmBreakdownRevision />;
	}
};

export default function Moco() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<TabV2 tabsData={tabTitle} activeTab={activeTab} setActiveTab={setActiveTab} />
			{renderContent(activeTab)}
		</>
	);
}
