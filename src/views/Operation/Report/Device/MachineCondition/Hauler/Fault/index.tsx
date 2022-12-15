import TabV5 from "molecules/TabV5";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const AllCode = dynamic(() => import("./AllCode"), { ssr: false });
const EngineOverrun = dynamic(() => import("./EngineOverrun"), { ssr: false });
const NeutralCoast = dynamic(() => import("./NeutralCoast"), { ssr: false });
const HighBlowby = dynamic(() => import("./HighBlowby"), { ssr: false });
const DropInOil = dynamic(() => import("./DropInOil"), { ssr: false });
const PcvError = dynamic(() => import("./PcvError"), { ssr: false });

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
	} else if (type === "HIGH BLOWBY") {
		return <HighBlowby />;
	} else if (type === "DROP IN OIL") {
		return <DropInOil />;
	} else if (type === "PCV ERROR") {
		return <PcvError />;
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
