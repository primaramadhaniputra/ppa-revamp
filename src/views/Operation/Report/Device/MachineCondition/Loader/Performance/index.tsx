import TabV5 from "molecules/TabV5";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Boost = dynamic(() => import("./Boost"));
const Fuel = dynamic(() => import("./Fuel"));
const Exhaust = dynamic(() => import("./Exhaust"));
const EnginePower = dynamic(() => import("./EnginePower"));
const EngineSpeed = dynamic(() => import("./EngineSpeed"));

const tabsData = [
	"FUEL",
	"BOOST",
	"EXHAUST",
	"TEMPRATURE",
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
