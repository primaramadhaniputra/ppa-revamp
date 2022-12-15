import TabV5 from "molecules/TabV5";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const AllCode = dynamic(() => import("./AllCode"), { ssr: false });

const tabsData = ["ALL CODE"];

const Fault = () => {
	const [selectedItem, setSelectedItem] = useState("ALL CODE");
	return (
		<>
			<TabV5 tabsData={tabsData} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			<AllCode />
		</>
	);
};

export default Fault;
