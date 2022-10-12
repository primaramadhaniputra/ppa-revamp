import TabV5 from "molecules/TabV5";
import React, { useState } from "react";
import Fuel from "./Fuel";

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
