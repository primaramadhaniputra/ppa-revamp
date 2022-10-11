import TabV1 from "molecules/TabV1";
import React, { useState } from "react";

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

const Performance = () => {
	const [selectedItem, setSelectedItem] = useState("FUEL");
	return (
		<>
			<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
		</>
	);
};

export default Performance;
