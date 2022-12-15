import TabV2 from "molecules/TabV2";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const HPR = dynamic(() => import("./HPR"), {
	ssr: false,
});
const PopulasiUnit = dynamic(() => import("./PopulasiUnit"), {
	ssr: false,
});
const Upload = dynamic(() => import("./Upload"), {
	ssr: false,
});
const HmBreakdownRevision = dynamic(() => import("./HmBreakdownRevision"), {
	ssr: false,
});
const Breakdown = dynamic(() => import("./Breakdown"), {
	ssr: false,
});
const AbsActivity = dynamic(() => import("./AbsActivity"), {
	ssr: false,
});
const FuelRate = dynamic(() => import("./FuelRate"), {
	ssr: false,
});
const FormDeviasiFuel = dynamic(() => import("./FormDeviasiFuel"), {
	ssr: false,
});
const RuasJalan = dynamic(() => import("./RuasJalan"), {
	ssr: false,
});
const HmRevision = dynamic(() => import("./HmRevision"), {
	ssr: false,
});

const tabTitle = [
	"HM Revision",
	"HM Breakdown Revision",
	"Populasi Unit",
	"Breakdown",
	"ABC Activity",
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
	} else if (activeTab === 3) {
		return <Breakdown />;
	} else if (activeTab === 4) {
		return <AbsActivity />;
	} else if (activeTab === 5) {
		return <FuelRate />;
	} else if (activeTab === 8) {
		return <FormDeviasiFuel />;
	} else if (activeTab === 9) {
		return <RuasJalan />;
	} else if (activeTab === 0) {
		return <HmRevision />;
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
