import TabV5 from "molecules/TabV5";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const AllCode = dynamic(() => import("./AllCode"));
const EngineOverrun = dynamic(() => import("./EngineOverrun"));
const NeutralCoast = dynamic(() => import("./NeutralCoast"));

const tabsData = [
	"ALL CODE",
	"ENGINE OVERRUN",
	"NEUTRAL COAST",
	"HIGH BLOWBY",
	"DROP IN OIL",
	"PCV ERROR",
];

const renderContent = (type: string) => {
	if (type === "ALL CODE") {
		return <AllCode />;
	} else if (type === "ENGINE OVERRUN") {
		return <EngineOverrun />;
	} else if (type === "NEUTRAL COAST") {
		return <NeutralCoast />;
	}
};

const Fault = () => {
	const [selectedItem, setSelectedItem] = useState("ALL CODE");
	return (
		<>
			<TabV5 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			{renderContent(selectedItem)}
		</>
	);
};

export default Fault;
