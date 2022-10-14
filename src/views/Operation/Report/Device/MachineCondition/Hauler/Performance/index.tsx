import TabV5 from "molecules/TabV5";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const tabsData = [
	"FUEL",
	"BOOST",
	"ECO ON",
	"BREAK OIL",
	"TRAVEL SPEED",
	"EXHAUST TEMP",
	"TEMPERATURE",
	"BLOWBY PRESS",
	"ENGINE SPEED",
	"OIL PRESS",
];

const Fuel = dynamic(() => import("./Fuel"));
const Boost = dynamic(() => import("./Boost"));
const EcoOn = dynamic(() => import("./EcoOn"));
const BreakOil = dynamic(() => import("./BreakOil"));
const TravelSpeed = dynamic(() => import("./TravelSpeed"));
const ExhaustTemp = dynamic(() => import("./ExhaustTemp"));
const Temperature = dynamic(() => import("./Temperature"));
const BlowBy = dynamic(() => import("./BlowBy"));
const EngineSpeed = dynamic(() => import("./EngineSpeed"));
const OilPressure = dynamic(() => import("./OilPressure"));

const renderContent = (selectedItem: string) => {
	if (selectedItem === "FUEL") {
		return <Fuel />;
	} else if (selectedItem === "BOOST") {
		return <Boost />;
	} else if (selectedItem === "ECO ON") {
		return <EcoOn />;
	} else if (selectedItem === "BREAK OIL") {
		return <BreakOil />;
	} else if (selectedItem === "TRAVEL SPEED") {
		return <TravelSpeed />;
	} else if (selectedItem === "EXHAUST TEMP") {
		return <ExhaustTemp />;
	} else if (selectedItem === "TEMPERATURE") {
		return <Temperature />;
	} else if (selectedItem === "BLOWBY PRESS") {
		return <BlowBy />;
	} else if (selectedItem === "ENGINE SPEED") {
		return <EngineSpeed />;
	} else if (selectedItem === "OIL PRESS") {
		return <OilPressure />;
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
