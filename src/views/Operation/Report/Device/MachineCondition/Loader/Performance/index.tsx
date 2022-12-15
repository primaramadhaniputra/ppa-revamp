import TabV5 from "molecules/TabV5";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Boost = dynamic(() => import("./Boost"), { ssr: false });
const Fuel = dynamic(() => import("./Fuel"), { ssr: false });
const Exhaust = dynamic(() => import("./Exhaust"), { ssr: false });
const EnginePower = dynamic(() => import("./EnginePower"), { ssr: false });
const EngineSpeed = dynamic(() => import("./EngineSpeed"), { ssr: false });
const OilPressure = dynamic(() => import("./OilPressure"), { ssr: false });
const Temperature = dynamic(() => import("./Temperature"), { ssr: false });
const Torque = dynamic(() => import("./Torque"), { ssr: false });

const tabsData = [
	"FUEL",
	"BOOST",
	"EXHAUST",
	"TEMPERATURE",
	"ENGINE SPEED",
	"ENGINE POWER",
	"OIL PRESSURE",
	"TORQUE",
];

const renderContent = (type: string) => {
	if (type === "FUEL") {
		return <Fuel />;
	} else if (type === "BOOST") {
		return <Boost />;
	} else if (type === "EXHAUST") {
		return <Exhaust />;
	} else if (type === "ENGINE POWER") {
		return <EnginePower />;
	} else if (type === "ENGINE SPEED") {
		return <EngineSpeed />;
	} else if (type === "TEMPERATURE") {
		return <Temperature />;
	} else if (type === "OIL PRESSURE") {
		return <OilPressure />;
	} else if (type === "TORQUE") {
		return <Torque />;
	}
};

const Performance = () => {
	const [selectedItem, setSelectedItem] = useState("FUEL");
	return (
		<>
			<TabV5 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			{renderContent(selectedItem)}
		</>
	);
};

export default Performance;
