import TabV1 from "molecules/TabV1";
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

const Performance = () => {
	const [selectedItem, setSelectedItem] = useState("FUEL");
	return (
		<>
			<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
		</>
	);
};

export default Performance;
