import TabV1 from "molecules/TabV1";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const AllCode = dynamic(() => import("./AllCode"));

const tabsData = [
	"ALL CODE",
	"ENGINE OVER",
	"NEUTRAL COAST",
	"HIGH BLOWBY",
	"DROP IN OIL",
	"PCV ERROR",
];

const renderContent = (type: string) => {
	if (type === "ALL CODE") {
		return <AllCode />;
	}
};

const Fault = () => {
	const [selectedItem, setSelectedItem] = useState("ALL CODE");
	return (
		<>
			<TabV1 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			{renderContent(selectedItem)}
		</>
	);
};

export default Fault;
