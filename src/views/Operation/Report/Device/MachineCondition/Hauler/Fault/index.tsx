import TabV1 from "molecules/TabV1";
import React, { useState } from "react";

const tabsData = [
	"ALL CODE",
	"ENGINE OVER",
	"NEUTRAL COAST",
	"HIGH BLOWBY",
	"DROP IN OIL",
	"PCV ERROR",
];

const Fault = () => {
	const [selectedItem, setSelectedItem] = useState("ALL CODE");
	return (
		<>
			<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
		</>
	);
};

export default Fault;
